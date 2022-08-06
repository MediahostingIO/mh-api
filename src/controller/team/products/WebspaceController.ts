import { Webspace, WebspaceStatistics } from "../../../types/Webspace";
import { MHApi } from "../../../mh-api";

export default class WebspaceController {
    public async getAllWebspaces(userId: number): Promise<Webspace[]> {
        return MHApi.request('GET', 'team/webspace/' + userId);
    }

    public async getWebspace(id: string): Promise<Webspace> {
        return MHApi.request('GET', `team/webspace/${id}`);
    }

    public async getWebspaceStatistics(id: string): Promise<WebspaceStatistics> {
        return MHApi.request('GET', `team/webspace/${id}/statistics`);
    }

    public autoLoginToWebspace(id: string): void {
        window
            .open(`https://restapi.mediahosting.io/api/webspace/${id}/login?token=${localStorage.getItem('authToken')}`, '_blank')
            .focus();
    }
}
