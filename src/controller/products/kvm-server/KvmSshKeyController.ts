import {SshKey} from "../../../types/vms/SshKey";
import {MHApi} from "../../../mh-api";

export class KVMSshKeyController {
	public async getSshKeys(): Promise<SshKey[]> {
		return MHApi.request('GET', 'sshkeys');
	}

	public async getSshKey(id: string): Promise<SshKey> {
		return MHApi.request('GET', 'sshkeys/' + id);
	}

	public async createSshKey(name: string, publicKey: string): Promise<SshKey> {
		return MHApi.request('POST', 'sshkeys', {data: {name, publicKey}});
	}

	public async editSshKey(id: string, name: string, publicKey: string): Promise<SshKey> {
		return MHApi.request('POST', 'sshkeys/' + id, {data: {name, publicKey}});
	}

	public async deleteSshKey(id: string, sshKeyId: string): Promise<{ success: boolean }> {
		return MHApi.request('DELETE', 'sshkeys/' + sshKeyId);
	}

	public async setSshKey(id: string, sshKeyId: string): Promise<{ success: boolean }> {
		return MHApi.request('PUT', 'kvm/' + id + '/sshkeys/' + sshKeyId + '/enable');
	}

	public async unsetSshKey(id: string, sshKeyId: string): Promise<{ success: boolean }> {
		return MHApi.request('PUT', 'kvm/' + id + '/sshkeys/' + sshKeyId + '/disable');
	}
}
