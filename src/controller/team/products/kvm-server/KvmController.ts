import {
	KvmActions,
	KvmReinstall, KvmRescue,
	KvmServerNetworkInterface,
	KvmTemplate,
	Vm,
	VpsData
} from "../../../../types/vms/Vm";
import KVMSshKeyController from "./KvmSshKeyController";
import KvmCronjobController from "./KvmCronjobController";
import KvmVlanController from "./KvmVlanController";
import KvmBackupController from "./KvmBackupController";
import { MHApi } from "../../../../mh-api";
import { VpsStatistics } from "../../../../types/vms/KvmStatistics";

export class KvmController {
	public readonly sshkeys = new KVMSshKeyController();
	public readonly backups = new KvmBackupController();
	public readonly cronjobs = new KvmCronjobController();
	public readonly vlans = new KvmVlanController();

	public async templates(): Promise<KvmTemplate[]> {
		return MHApi.request('GET', 'team/kvm/templates');
	}

	public async getAllKvm(userId: number): Promise<Vm[]> {
		return MHApi.request('GET', 'team/kvm/all/' + userId);
	}

	public async getKvm(id: string): Promise<Vm> {
		return MHApi.request('GET', 'team/kvm/' + id);
	}

	public async controlKvm(data: KvmActions): Promise<{ success: boolean }> {
		return MHApi.request('PUT', `kvm/${data.id}/${data.act}`)
	}

	public async getKvmData(id: string): Promise<VpsData> {
		return MHApi.request('GET', 'team/kvm/' + id + '/data');
	}

	public async getKvmNetworkInterface(id: string): Promise<KvmServerNetworkInterface[]> {
		return MHApi.request('GET', 'team/kvm/' + id + '/network');
	}

	public async getKvmStatistics(id: string): Promise<VpsStatistics[]> {
		return MHApi.request('GET', 'team/kvm/' + id + '/statistics');
	}

	public async changeRdns(id: string, rdns: string): Promise<{ success: boolean }> {
		return MHApi.request('PUT', 'team/kvm/' + id + '/rdns', {data: {rdns}});
	}

	public async reinstallKvm(id: string, data: KvmReinstall): Promise<void> {
		return MHApi.request('PUT', 'team/kvm/' + id + '/reinstall', { data });
	}

	public async setHostname(id: string, hostname: string): Promise<{ success: boolean }> {
		return MHApi.request('PUT', 'team/kvm/' + id + '/hostname', { data: { hostname } });
	}

	public async setRootPassword(id: string, password: string): Promise<{ success: boolean }> {
		return MHApi.request('PUT', 'team/kvm/' + id + '/password', { data: { password } });
	}

	public async setRescueMode(id: string, data: KvmRescue): Promise<void> {
		return MHApi.request('PUT', 'team/kvm/' + id + '/rescue', { data });
	}

	public async sendCommand(id: string, cmd: string): Promise<{ success: boolean }> {
		return MHApi.request('PUT', 'team/kvm/' + id + '/cmd', { data: { cmd } });
	}

	public async deleteVm(id: string): Promise<{ success: boolean, error?: string }> {
		return MHApi.request('DELETE', 'team/kvm/' + id);
	}

	public async connectNic(id: string, nic: "nic0" | "nic1" | "nic2" | "nic3"): Promise<{ success: boolean }> {
		return MHApi.request('PUT', 'team/kvm/' + id + '/connectnic/' + nic);
	}

	public async disconnectNic(id: string, nic: "nic0" | "nic1" | "nic2" | "nic3"): Promise<{ success: boolean }> {
		return MHApi.request('PUT', 'team/kvm/' + id + '/disconnectnic/' + nic);
	}
}
