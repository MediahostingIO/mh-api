import { MHApi } from "../../../mh-api";
import { Vlan } from "../../../types/vms/Vlan";

export class KvmVlanController {
	public async getVlans(): Promise<Vlan[]> {
		return MHApi.request('GET', 'kvm/vlan');
	}

	public async getVlan(id: string): Promise<Vlan> {
		return MHApi.request('GET', 'kvm/vlan/' + id);
	}

	public async createVlan(vlanAware: boolean): Promise<Vlan> {
		return MHApi.request('POST', 'kvm/vlan', {data: { vlanAware }});
	}

	public async deleteVlan(id: string): Promise<void> {
		return MHApi.request('DELETE', 'kvm/vlan/' + id);
	}

	public async supplyVlan(id: string, kvmIds: number[]): Promise<void> {
		return MHApi.request('PUT', 'kvm/vlan/supply/' + id, {data: { kvmIds }});
	}

	public async unsupplyVlan(id: string, kvmIds: number[]): Promise<void> {
		return MHApi.request('DELETE', 'kvm/vlan/unsupply/' + id, {data: { kvmIds }});
	}
}
