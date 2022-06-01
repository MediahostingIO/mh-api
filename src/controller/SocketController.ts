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

    private socketConnetion: Socket;

    constructor(socketHost: string) {
        this._socketHost = socketHost;
        this.socketConnetion = io(this._socketHost, {
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
        this.socketConnetion.emit("subscribe-ticket", {ticketId});
        this.socketConnetion.on('ticketMessage', onTicketMessage);
    }

    public disconnectTicketSocket(ticketId: string) {
        this.socketConnetion.emit("unsubscribe-ticket", {ticketId});
        this.socketConnetion.off('ticketMessage');
    }

    public connectKvmSocket(kvmId: string, dataCallbacks: KvmCallbacks) {
        if (!localStorage?.getItem('authToken')) {
            throw new Error("authToken unavailable");
        }
        this.socketConnetion.emit("subscribe-kvm", {kvmId});
        this.socketConnetion.on('kvm-data', dataCallbacks.onKvmData);
        this.socketConnetion.on('kvm-statistics', dataCallbacks.onKvmStatistics);
        this.socketConnetion.on('live-data', dataCallbacks.onLiveData);
    }

    public disconnectKvmSocket(kvmId: string) {
        this.socketConnetion.emit("unsubscribe-kvm", {kvmId});
        this.socketConnetion.off('kvm-data');
        this.socketConnetion.off('kvm-statistics');
        this.socketConnetion.off('live-data');
    }

    public connectToNotificationSocket(onNotification: (notification: Notification) => void) {
        if (!localStorage?.getItem('authToken')) {
            throw new Error("authToken unavailable");
        }
        this.socketConnetion.emit("subscribe-notification");
        this.socketConnetion.on('notification', onNotification);
    }

    public disconnectNotificationSocket() {
        this.socketConnetion.emit("unsubscribe-notification");
        this.socketConnetion.off('notification');
    }
}
