import { Vlan } from "../../../../types/vms/Vlan";
import { MHApi } from "../../../../mh-api";

export default class KvmVlanController {
	public async getVlans(userId: number): Promise<Vlan[]> {
		return MHApi.request('GET', 'team/vlan/all/' + userId);
	}

	public async getVlan(id: string): Promise<Vlan> {
		return MHApi.request('GET', 'team/vlan/' + id);
	}

	public async createVlan(vlanAware: boolean, userId: number): Promise<Vlan> {
		return MHApi.request('POST', 'team/vlan', {data: { vlanAware, userId }});
	}

	public async deleteVlan(id: string): Promise<void> {
		return MHApi.request('DELETE', 'team/vlan/' + id);
	}

	public async supplyVlan(id: string, kvmIds: number[]): Promise<void> {
		return MHApi.request('PUT', 'team/vlan/supply/' + id, {data: { kvmIds }});
	}

	public async unsupplyVlan(id: string, kvmIds: number[]): Promise<void> {
		return MHApi.request('DELETE', 'team/vlan/unsupply/' + id, {data: { kvmIds }});
	}
}
