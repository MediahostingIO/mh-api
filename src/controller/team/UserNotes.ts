import { SmallBaseUser } from "../../types/User";
import { MHApi } from "../../mh-api";

export default class UserNotes {
	public async get(id: number): Promise<SmallBaseUser> {
		return MHApi.request('GET', 'team/customer/' + id);
	}

	public async update(id: number, notes: string): Promise<SmallBaseUser> {
		return MHApi.request('GET', 'team/customer/' + id, {data: { notes }});
	}
}
