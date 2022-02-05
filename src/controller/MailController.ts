import { Mail } from "../types/mail";
import { MHApi } from "../mh-api";

export class MailController {
    public async getMails(options: { page?: number, take?: number, keyword?: string }): Promise<Mail[]> {
        return MHApi.request('GET', 'mails', {params: options});
    }

    public async getMail(id: string): Promise<Mail> {
        return MHApi.request('GET', 'mails/' + id);
    }

    public async getMailContent(id: string): Promise<string> {
        return MHApi.request('GET', `mails/${id}/content`);
    }

    public async resendMail(id: string): Promise<string> {
        return MHApi.request('PUT', `mails/${id}/resend`);
    }
}
