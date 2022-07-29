import { MHApi } from "../../mh-api";
import { MailTemplate, MailTemplateDTO } from "../../types/team/MailTemplate";

export default class MailTemplateController {
	public async getAll(): Promise<MailTemplate[]> {
		return MHApi.request('GET', 'team/mailtemplate');
	}

	public async get(id: number): Promise<MailTemplate> {
		return MHApi.request('GET', `team/mailtemplate/${id}`);
	}

	public async create(mailTemplate: MailTemplateDTO): Promise<any> {
		return MHApi.request('POST', 'team/mailtemplate', { data: mailTemplate });
	}

	public async update(id: number, mailTemplate: MailTemplateDTO): Promise<any> {
		return MHApi.request('PUT', `team/mailtemplate/${id}`, { data: mailTemplate });
	}

	public async delete(id: number): Promise<any> {
		return MHApi.request('DELETE', `team/mailtemplate/${id}`);
	}
}
