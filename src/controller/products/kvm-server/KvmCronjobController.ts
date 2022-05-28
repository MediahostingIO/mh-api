import { Cronjob, CronJobDTO } from "../../../types/vms/Cronjobs";
import { MHApi } from "../../../mh-api";

export class KvmCronjobController {
	public async getCronJobs(id: string): Promise<Cronjob[]> {
		return MHApi.request('GET', 'kvm/' + id + '/cronjobs');
	}

	public async createCronJob(id: string, data: CronJobDTO): Promise<Cronjob> {
		return MHApi.request('POST', 'kvm/' + id + '/cronjobs', { data });
	}

	public async deleteCronJob(id: string, cronJobId: string): Promise<{ success: boolean, error?: string }> {
		return MHApi.request('DELETE', 'kvm/' + id + '/cronjobs/' + cronJobId);
	}
}
