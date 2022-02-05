import { MHApi } from "../../mh-api";

export class TwoFactorAuthenticationController {
    public async verifyTwoFactorAuthentication(code: string): Promise<{ success: boolean, token: string }> {
        return await MHApi.request('PUT', 'auth/2fa/verify', {data: {code}});
    }

    public async enableTwoFactorAuthentication(code: string): Promise<{ success: boolean, token: string }> {
        return await MHApi.request('PUT', 'auth/2fa/enable', {data: {code}});
    }

    public async getTwoFactorAuthenticationKey(): Promise<{ token: string, qrCode: string }> {
        return await MHApi.request('GET', 'auth/2fa/generate');
    }
}
