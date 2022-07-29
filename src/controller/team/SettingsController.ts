import { MHApi } from "../../mh-api";

export default class SettingsController {
    public async getTopOffers(): Promise<{}[]> {
        return MHApi.request('GET', 'team/settings/topoffers');
    }

    public async getHardware(): Promise<{}[]> {
        return MHApi.request('GET', 'team/settings/hardware');
    }

    public async getImprint(): Promise<string> {
        return MHApi.request('GET', 'team/settings/imprint');
    }

    public async getAGB(): Promise<string> {
        return MHApi.request('GET', 'team/settings/agb');
    }

    public async getPrivacy(): Promise<string> {
        return MHApi.request('GET', 'team/settings/privacy');
    }

    public async getRightOfWithdrawalid(): Promise<string> {
        return MHApi.request('GET', 'team/settings/rightofwithdrawalid');
    }

    public async getPaymentAndShipping(): Promise<string> {
        return MHApi.request('GET', 'team/settings/paymentandshipping');
    }

    public async getMaintenance(): Promise<{ maintenance: boolean }> {
        return MHApi.request('GET', 'team/settings/maintenance');
    }

    public async setImprint(): Promise<string> {
        return MHApi.request('POST', 'team/settings/imprint');
    }

    public async setAGB(): Promise<string> {
        return MHApi.request('POST', 'team/settings/abg');
    }

    public async setPrivacy(): Promise<string> {
        return MHApi.request('POST', 'team/settings/privacy');
    }

    public async setRightOfWithdrawalid(): Promise<string> {
        return MHApi.request('POST', 'team/settings/rightofwithdrawalid');
    }

    public async setPaymentAndShipping(): Promise<string> {
        return MHApi.request('POST', 'team/settings/paymentandshipping');
    }

    public async setHardware(): Promise<{}[]> {
        return MHApi.request('POST', 'team/settings/hardware');
    }

    public async setTopOffers(): Promise<string[]> {
        return MHApi.request('POST', 'team/settings/topOffers');
    }

    public async setMaintenance(): Promise<{ maintenance: boolean }> {
        return MHApi.request('POST', 'team/settings/maintenance');
    }
}
