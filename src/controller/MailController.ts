import { Mail, MailOptions, MailResponse } from "../types/Mail";
import {MHApi} from "../mh-api";

export class MailController {

    public async getMails(options: MailOptions): Promise<MailResponse> {
        return MHApi.request('GET', 'mails', {params: options});
    }

    public async resendMail(id: string): Promise<string> {
        return MHApi.request('PUT', `mails/${id}/resend`);
    }
}
