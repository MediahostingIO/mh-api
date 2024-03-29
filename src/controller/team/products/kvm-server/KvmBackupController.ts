import { KvmBackup } from "../../../../types/vms/Backups";
import { MHApi } from "../../../../mh-api";

export default class KvmBackupController {
	public async getBackups(id: string): Promise<KvmBackup[]> {
		return MHApi.request('GET', 'team/kvm/' + id + '/backups');
	}

	public async createBackup(id: string, mode: 'snapshot' | 'suspend' | 'stop'): Promise<{ success: boolean }> {
		return MHApi.request('POST', 'team/kvm/' + id + '/backups', {data: {mode}});
	}

	public async restoreBackup(id: string, backupId: string): Promise<{ success: boolean, backupId: string }> {
		return MHApi.request('POST', 'team/kvm/' + id + '/backups/' + backupId);
	}
}
