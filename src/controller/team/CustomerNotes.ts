import { MHApi } from "../../mh-api";

export default class CustomerNotes {
	public async get(id: number): Promise<{ userId: number, notes: string }> {
		return MHApi.request('GET', 'team/customer/' + id);
	}

	public async update(id: number, notes: string): Promise<any> {
		return MHApi.request('GET', 'team/customer/' + id, {data: { notes }});
	}
}
