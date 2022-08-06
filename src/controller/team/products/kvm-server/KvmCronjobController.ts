import { Cronjob, CronJobDTO } from "../../../../types/vms/Cronjobs";
import { MHApi } from "../../../../mh-api";

export default class KvmCronjobController {
	public async getCronJobs(id: string): Promise<Cronjob[]> {
		return MHApi.request('GET', 'team/kvm/' + id + '/cronjobs');
	}

	public async createCronJob(id: string, data: CronJobDTO): Promise<Cronjob> {
		return MHApi.request('POST', 'team/kvm/' + id + '/cronjobs', { data });
	}

	public async deleteCronJob(id: string, cronJobId: string): Promise<{ success: boolean, error?: string }> {
		return MHApi.request('DELETE', 'team/kvm/' + id + '/cronjobs/' + cronJobId);
	}
}
