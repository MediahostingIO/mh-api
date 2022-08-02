import { SmallBaseUser } from "../../types/User";
import { MHApi } from "../../mh-api";

export default class UserNotes {
	public async get(id: number): Promise<SmallBaseUser> {
		return MHApi.request('GET', 'team/customer/' + id);
	}
}
