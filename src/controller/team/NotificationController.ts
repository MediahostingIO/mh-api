import { Notifications } from "../../types/Notification";
import { MHApi } from "../../mh-api";

export default class NotificationsController {
    public async getAllNotifications(): Promise<Notifications> {
        return MHApi.request('GET', 'notifications');
    }

    public async getNotification(id: string): Promise<Notification> {
        return MHApi.request('GET', 'notifications/' + id);
    }
}
