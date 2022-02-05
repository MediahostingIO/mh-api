import { MHApi } from "../../mh-api";

export class PasswordResetController {
    public requestPasswordReset(email: string): Promise<boolean> {
        return MHApi.request('POST', 'auth/password/request', {data: email});
    }

    public resetPassword(token: string, password: string): Promise<boolean> {
        return MHApi.request('POST', 'auth/password/reset?token=' + token, {data: password});
    }

    public isTokenValid(token: string): Promise<{ exist: boolean, valid: boolean }> {
        return MHApi.request('GET', 'auth/password/check?token=' + token);
    }
}
