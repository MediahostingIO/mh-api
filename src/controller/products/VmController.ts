import {KvmActions, KvmTemplate, Vm, VmResponse, VpsData} from '../../types/vms/vm';
import { MHApi } from '../../mh-api';
import { VpsStatistics } from "../../types/vms/kvmStatistics";
import {SshKey} from "../../types/vms/sshkey";
import {KvmBackup} from "../../types/vms/backups";
import {Cronjob, CronJobDTO} from "../../types/vms/cronjobs";

export class VmController {
    public async getAllKvm(): Promise<Vm[]> {
        return MHApi.request('GET', 'kvm');
    }

    public async templates(): Promise<KvmTemplate[]> {
        return MHApi.request('GET', 'kvm/templates');
    }

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

    public async getKvm(id: string): Promise<VmResponse> {
        return MHApi.request('GET', 'kvm/' + id);
    }

    public async controlKvm(data: KvmActions): Promise<{ success: boolean }> {
        return MHApi.request('PUT', `kvm/${data.id}/${data.act}`)
    }

    public async getKvmData(id: string): Promise<VpsData> {
        return MHApi.request('GET', 'kvm/' + id + '/data');
    }

    public async getKvmStatistics(id: string): Promise<VpsStatistics[]> {
        return MHApi.request('GET', 'kvm/' + id + '/statistics');
    }

    public async reinstallKvm(id: string, data: { password: string, template: string, hostname: string }): Promise<void> {
        return MHApi.request('PUT', 'kvm/' + id + '/reinstall', {data});
    }

    public async setHostname(id: string, hostname: string): Promise<{ success: boolean }> {
        return MHApi.request('PUT', 'kvm/' + id + '/hostname', {data: {hostname}});
    }

    public async setRootPassword(id: string, password: string): Promise<{ success: boolean }> {
        return MHApi.request('PUT', 'kvm/' + id + '/password', {data: {password}});
    }

    public async setRescueMode(id: string, data: { enable: boolean, password?: string }): Promise<void> {
        return MHApi.request('PUT', 'kvm/' + id + '/rescue', {data});
    }

    public async sendCommand(id: string, cmd: string): Promise<{ success: boolean }> {
        return MHApi.request('PUT', 'kvm/' + id + '/cmd', {data: {cmd}});
    }

    public async getBackups(id: string): Promise<KvmBackup[]> {
        return MHApi.request('GET', 'kvm/' + id + '/backups');
    }

    public async createBackup(id: string, mode: 'snapshot' | 'suspend' | 'stop'): Promise<{ success: boolean }> {
        return MHApi.request('POST', 'kvm/' + id + '/backups', {data: {mode}});
    }

    public async restoreBackup(id: string, backupId: string): Promise<{ success: boolean, backupId: string }> {
        return MHApi.request('POST', 'kvm/' + id + '/backups/' + backupId);
    }

    public async getCronJobs(id: string): Promise<Cronjob[]> {
        return MHApi.request('GET', 'kvm/' + id + '/cronjobs');
    }

    public async createCronJob(id: string, data: CronJobDTO): Promise<Cronjob> {
        return MHApi.request('POST', 'kvm/' + id + '/cronjobs', {data});
    }

    public async deleteCronJob(id: string, cronJobId: string): Promise<{success: boolean, error?: string}> {
        return MHApi.request('DELETE', 'kvm/' + id + '/cronjobs/' + cronJobId);
    }
}
