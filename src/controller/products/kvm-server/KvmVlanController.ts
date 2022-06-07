import { MHApi } from "../../../mh-api";
import { Vlan } from "../../../types/vms/Vlan";

export class KvmVlanController {
	public async getVlans(): Promise<Vlan[]> {
		return MHApi.request('GET', 'vlan');
	}

	public async getVlan(id: string): Promise<Vlan> {
		return MHApi.request('GET', 'vlan/' + id);
	}

	public async createVlan(vlanAware: boolean): Promise<Vlan> {
		return MHApi.request('POST', 'vlan', {data: { vlanAware }});
	}

	public async deleteVlan(id: string): Promise<void> {
		return MHApi.request('DELETE', 'vlan/' + id);
	}

	public async supplyVlan(id: string, kvmIds: number[]): Promise<void> {
		return MHApi.request('PUT', 'vlan/supply/' + id, {data: { kvmIds }});
	}

	public async unsupplyVlan(id: string, kvmIds: number[]): Promise<void> {
		return MHApi.request('DELETE', 'vlan/unsupply/' + id, {data: { kvmIds }});
	}
}
