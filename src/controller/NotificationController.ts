import { MHApi } from "../mh-api";
import { Notification, Notifications } from "../types/notification";

export class NotificationsController {
    public async getAllNotifications(): Promise<Notifications> {
        return MHApi.request('GET', 'notifications');
    }

    public async getNotification(id: string): Promise<Notification> {
        return MHApi.request('GET', 'notifications/' + id);
    }
}