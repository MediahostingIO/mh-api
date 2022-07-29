import { MHApi } from "../../mh-api";
import { Announcement, AnnouncementDTO } from "../../types/Announcement";

export default class BetakeyController {
	public async getAll(): Promise<Announcement[]> {
		return MHApi.request('GET', 'team/betakeys');
	}

	public async get(id: string): Promise<Announcement> {
		return MHApi.request('GET', 'team/betakeys/' + id);
	}

	public async create(data: Announcement): Promise<AnnouncementDTO> {
		return MHApi.request('POST', 'team/betakeys', { data });
	}
}
