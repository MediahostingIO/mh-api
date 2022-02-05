import { MHApi } from '../../mh-api';
import { EditUserDTO, LoginDTO, LoginResponse, RegisterDTO, RegisterResponse } from '../../types/authentication/login';
import { BaseUser } from "../../types/user";
import { ChangePasswordDTO } from "../../types/authentication/password";

export class AuthController {
    public async login(credentials: LoginDTO): Promise<LoginResponse> {
        return await MHApi.request('POST', 'auth/login', {data: credentials}).then(value => {
            if (value.success && typeof localStorage !== 'undefined') {
                localStorage.setItem('authToken', value.token);
                localStorage.setItem('refreshToken', value.refreshToken);
                MHApi.setAuthToken(localStorage.getItem('authToken')!);
            } else if (value.success) {
                MHApi.setAuthToken(value.token);
            }
            return value;
        });
    }

    public async getToken(): Promise<{ success: boolean, token: string }> {
        if (!localStorage?.getItem('refreshToken')) {
            throw new Error('InvalidRefreshToken');
        }
        return await MHApi.request('PUT', 'auth/token', {headers: {refreshToken: localStorage.getItem('refreshToken')}})
            .then(value => {
                this.setAuthtoken(value.token);
                return value;
            });
    }

    public async register(data: RegisterDTO): Promise<RegisterResponse> {
        return await MHApi.request('POST', 'auth/register', {data});
    }

    public async edit(data: EditUserDTO): Promise<void> {
        return await MHApi.request('PUT', 'users', {data});
    }

    public async verifyEmail(token: string): Promise<{ success: boolean }> {
        return await MHApi.request('GET', 'auth/verify?token=' + token);
    }

    public async resetPassword(data: ChangePasswordDTO): Promise<{ success: boolean }> {
        return await MHApi.request('PUT', 'auth/change', {data});
    }

    public async me(): Promise<BaseUser> {
        return await MHApi.request('GET', 'auth/me');
    }

    private setAuthtoken(token: string, refreshToken?: string): void {
        if (localStorage) {
            localStorage.setItem('authToken', token);
            if (refreshToken) {
                localStorage.setItem('refreshToken', refreshToken);
            }
        }
        MHApi.setAuthToken(token);
    }

    public async isBeta(): Promise<{ isBeta: boolean }> {
        return await MHApi.request('GET', 'auth/isbeta');
    }
}
