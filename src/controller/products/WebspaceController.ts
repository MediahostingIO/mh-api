import { Webspace, WebspaceStatistics } from "../../types/webspace";
import { MHApi } from "../../mh-api";

export class WebspaceController {
    public async getAllWebspaces(): Promise<Webspace[]> {
        return MHApi.request('GET', 'webspace');
    }

    public async getWebspace(id: string): Promise<Webspace> {
        return MHApi.request('GET', `webspace/${id}`);
    }

    public async getWebspaceStatistics(id: string): Promise<WebspaceStatistics> {
        return MHApi.request('GET', `webspace/${id}/statistics`);
    }

    public autoLoginToWebspace(id: string): void {
        window
            .open(`https://restapi.mediahosting.io/api/webspace/${id}/login?token=${localStorage.getItem('authToken')}`, '_blank')
            .focus();
    }
}
