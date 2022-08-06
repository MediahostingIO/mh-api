import { SshKey } from "../../../../types/vms/SshKey";
import { MHApi } from "../../../../mh-api";

export default class KVMSshKeyController {
	public async getSshKeys(userId: number): Promise<SshKey[]> {
		return MHApi.request('GET', 'team/sshkeys/all' + userId);
	}

	public async getSshKey(id: string): Promise<SshKey> {
		return MHApi.request('GET', 'team/sshkeys/' + id);
	}

	public async createSshKey(name: string, publicKey: string): Promise<SshKey> {
		return MHApi.request('POST', 'team/sshkeys', {data: {name, publicKey}});
	}

	public async editSshKey(id: string, name: string, publicKey: string): Promise<SshKey> {
		return MHApi.request('POST', 'team/sshkeys/' + id, {data: {name, publicKey}});
	}

	public async deleteSshKey(id: string, sshKeyId: string): Promise<{ success: boolean }> {
		return MHApi.request('DELETE', 'team/sshkeys/' + sshKeyId);
	}

	public async setSshKey(id: string, sshKeyId: string): Promise<{ success: boolean }> {
		return MHApi.request('PUT', 'team/kvm/' + id + '/sshkeys/' + sshKeyId + '/enable');
	}

	public async unsetSshKey(id: string, sshKeyId: string): Promise<{ success: boolean }> {
		return MHApi.request('PUT', 'team/kvm/' + id + '/sshkeys/' + sshKeyId + '/disable');
	}
}
