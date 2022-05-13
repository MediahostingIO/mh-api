import {io, Socket} from "socket.io-client";
import {Notification} from "../types/notification";
import {KvmCallbacks} from '../types/vms/socket';
import {Message} from '../types/ticket/ticket';

interface DefaultCallbacks {
    onError: (error: any) => void;
    onDisconnect?: (reason: any) => void;
    onReconnect?: (reconnect) => void;
    onReconnectError?: (error) => void;
    onConnect: () => void;
}

export class SocketController {
    private _socketHost: string;

    constructor(socketHost: string) {
        this._socketHost = socketHost;
    }

    public createClient(path: string, callbacks: DefaultCallbacks, query?: any): Socket {
        return io(this._socketHost + path, {
            auth: {
                token: localStorage.getItem('authToken')
            },
            query,
            path: '',
            withCredentials: true,
            transports: ['websocket'],
        })
            .on('connect', callbacks.onConnect)
            .on('connect_error', callbacks.onError)
            .on('disconnect', callbacks.onDisconnect ?? (() => null))
            .on('reconnect', callbacks.onReconnect)
            .on('reconnect_error', callbacks.onReconnectError);
    }

    public connectToTicketSocket(ticketId: string, onTicketMessage: (message: Message) => void, callbacks: DefaultCallbacks): Socket {
        return this
            .createClient('tickets', callbacks, {ticketId})
            .on('ticketMessage', onTicketMessage);
    }

    public connectToKvmSocket(kvmId: string, dataCallbacks: KvmCallbacks, callbacks: DefaultCallbacks): Socket {
        if (!localStorage?.getItem('authToken')) {
            throw new Error("authToken unavailable");
        }
        const socket = this.createClient('kvm', callbacks, {id: kvmId});
        socket.on('kvm-data', dataCallbacks.onKvmData);
        socket.on('kvm-statistics', dataCallbacks.onKvmStatistics);
        socket.on('live-data', dataCallbacks.onLiveData);
        return socket;
    }

    public connectToNotificationSocket(onNotification: (notification: Notification) => void, callbacks: DefaultCallbacks): Socket {
        if (!localStorage?.getItem('authToken')) {
            throw new Error("authToken unavailable");
        }
        return this
            .createClient('notifications', callbacks)
            .on('notification', onNotification);
    }
}
