import {io, Socket} from "socket.io-client";
import {Notification} from "../types/Notification";
import {KvmCallbacks} from '../types/vms/Socket';
import {Message} from '../types/ticket/Ticket';

interface DefaultCallbacks {
    onError: (error: any) => void;
    onDisconnect?: (reason: any) => void;
    onReconnect?: (reconnect) => void;
    onReconnectError?: (error) => void;
    onConnect: () => void;
}

export class SocketController {
    private _socketHost: string;
    private socketConnection: Socket;

    constructor(socketHost: string) {
        this._socketHost = socketHost;
        this.socketConnection = io(this._socketHost, {
            auth: {
                token: localStorage.getItem('authToken')
            },
            path: '',
            withCredentials: true,
            transports: ['websocket'],
        })
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

    public connectTicketSocket(ticketId: string, onTicketMessage: (message: Message) => void) {
        this.socketConnection.emit("subscribe-ticket", {ticketId});
        this.socketConnection.on('ticketMessage', onTicketMessage);
    }

    public disconnectTicketSocket(ticketId: string) {
        this.socketConnection.emit("unsubscribe-ticket", {ticketId});
        this.socketConnection.off('ticketMessage');
    }

    public connectKvmSocket(kvmId: string, dataCallbacks: KvmCallbacks) {
        if (!localStorage?.getItem('authToken')) {
            throw new Error("authToken unavailable");
        }
        this.socketConnection.emit("subscribe-kvm", {kvmId});
        this.socketConnection.on('kvm-data', dataCallbacks.onKvmData);
        this.socketConnection.on('kvm-statistics', dataCallbacks.onKvmStatistics);
        this.socketConnection.on('live-data', dataCallbacks.onLiveData);
    }

    public disconnectKvmSocket(kvmId: string) {
        this.socketConnection.emit("unsubscribe-kvm", {kvmId});
        this.socketConnection.off('kvm-data');
        this.socketConnection.off('kvm-statistics');
        this.socketConnection.off('live-data');
    }

    public connectToNotificationSocket(onNotification: (notification: Notification) => void) {
        if (!localStorage?.getItem('authToken')) {
            throw new Error("authToken unavailable");
        }
        this.socketConnection.emit("subscribe-notification");
        this.socketConnection.on('notification', onNotification);
    }

    public disconnectNotificationSocket() {
        this.socketConnection.emit("unsubscribe-notification");
        this.socketConnection.off('notification');
    }
}
