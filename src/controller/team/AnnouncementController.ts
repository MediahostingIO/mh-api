import { MHApi } from "../../mh-api";
import { Announcement, AnnouncementDTO } from "../../types/Announcement";

export default class AnnouncementController {
	public async getAll(): Promise<Announcement[]> {
		return MHApi.request('GET', 'team/announcements');
	}

	public async get(id: string): Promise<Announcement> {
		return MHApi.request('GET', 'team/announcements/' + id);
	}

	public async create(data: Announcement): Promise<AnnouncementDTO> {
		return MHApi.request('POST', 'team/announcements', { data });
	}

	public async delete(id: string): Promise<boolean> {
		return MHApi.request('DELETE', 'team/announcements/' + id);
	}
}
