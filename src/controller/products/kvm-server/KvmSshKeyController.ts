import {SshKey} from "../../../types/vms/SshKey";
import {MHApi} from "../../../mh-api";

export class KVMSshKeyController {
	public async getSshKeys(): Promise<SshKey[]> {
		return MHApi.request('GET', 'kvm/sshkeys');
	}

	public async getSshKey(id: string): Promise<SshKey> {
		return MHApi.request('GET', 'kvm/sshkeys/' + id);
	}

	public async createSshKey(name: string, publicKey: string): Promise<SshKey> {
		return MHApi.request('POST', 'kvm/sshkeys', {data: {name, publicKey}});
	}

	public async deleteSshKey(id: string, sshKeyId: string): Promise<{ success: boolean }> {
		return MHApi.request('DELETE', 'kvm/' + id + '/sshkeys/' + sshKeyId);
	}

	public async setSshKey(id: string, sshKeyId: string): Promise<{ success: boolean }> {
		return MHApi.request('PUT', 'kvm/' + id + '/sshkeys/' + sshKeyId + '/enable');
	}

	public async unsetSshKey(id: string, sshKeyId: string): Promise<{ success: boolean }> {
		return MHApi.request('PUT', 'kvm/' + id + '/sshkeys/' + sshKeyId + '/disable');
	}

	public async editSshKey(id: string, name: string, publicKey: string): Promise<SshKey> {
		return MHApi.request('POST', 'kvm/sshkeys/' + id, {data: {name, publicKey}});
	}
}
