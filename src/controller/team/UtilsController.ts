import { MHApi } from "../../mh-api";
import { Notification } from "../../types/team/NotificationDTO";

export default class UtilsController {
	public async getMaintenance(): Promise<{ success: boolean, maintenance: boolean }> {
		return MHApi.request('GET', 'team/utils/maintenance');
	}

	public async setMaintenance(maintenance: boolean): Promise<{ success: boolean }> {
		return MHApi.request('POST', 'team/utils/maintenance', { data: { maintenance } });
	}

	public async sendNotification(notification: Notification): Promise<{ success: boolean }> {
		return MHApi.request('POST', 'team/utils/sendnotification', { data: { notification } });
	}
}
