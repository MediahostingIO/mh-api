import axios, { Method, ResponseType } from 'axios';
import { PaymentController } from './controller/PaymentController';
import { TicketController } from "./controller/TicketController";
import { DiscordController } from "./controller/DiscordController";
import { NotificationsController } from "./controller/NotificationController";
import { RoleType } from "./types/User";
import { SocketController } from "./controller/SocketController";
import { StatisticsController } from "./controller/StatisticsController";
import { ProductsController } from "./controller/ProductsController";
import { AuthenticationController } from "./controller/AuthenticationController";
import { DepartmentController } from "./controller/DepartmentController";
import { MailController } from "./controller/MailController";
import { AnnouncementController } from './controller/AnnouncementController';
import { SettingsController } from './controller/SettingsController';
import SubUserController from "./controller/SubUserController";

class MHApi {
    private static _authToken: string;
    private static _host: string;
    private static _active = false;

    public static readonly authentication = new AuthenticationController();
    public static readonly announcements = new AnnouncementController();
    public static readonly payments = new PaymentController();
    public static readonly discord = new DiscordController();
    public static readonly notifications = new NotificationsController();
    public static readonly tickets = new TicketController();
    public static readonly departments = new DepartmentController();
    public static readonly statistics = new StatisticsController();
    public static readonly mails = new MailController();
    public static readonly products = new ProductsController();
    public static readonly settings = new SettingsController();
    public static readonly subuser = new SubUserController();
    public static socket: SocketController;

    public static initialize(host: string, socketHost: string): void {
        this._host = host;
        this.socket = new SocketController(socketHost);
        if (typeof localStorage !== 'undefined' && localStorage.getItem('authToken')) {
            this.setAuthToken(localStorage.getItem('authToken')!);
        }
    }

    public static get host(): string {
        return this._host;
    }

    public static setAuthToken(token: string): void {
        this._authToken = token;
    }

    public static startRefreshTokenTimer(callback: (reason: any) => void): void {
        this._active = true;
        this.checkAuthToken(callback);
    }

    public static stopRefreshTokenTimer(): void {
        this._active = false;
    }

    private static async checkAuthToken(callback: (reason: any) => void): Promise<void> {
        if (!this._active) {
            return;
        }
        await this.authentication.authController.getToken().catch(_ => this._active = false);
        setTimeout(() => this.checkAuthToken(callback), 9.5 * 60 * 1000);
    }

    public static request(method: Method, uri: string, options?: { data?: any, headers?: any, responseType?: ResponseType, params?: any }): Promise<any> {
        return new Promise((resolve, reject) => {
            axios
                .request({
                    headers: this._authToken
                        ? {
                            authorization: 'Bearer ' + this._authToken,
                            ...options?.headers,
                        }
                        : {...options?.headers,},
                    url: this.host + '/' + uri,
                    responseType: options?.responseType,
                    method,
                    data: options?.data,
                    params: options?.params,
                })
                .then((r) => resolve(r.data))
                .catch(reason => reject(reason.response ?? reason));
        });
    }

    public static getRoleName(mode: RoleType): string {
        switch (mode) {
            case RoleType.ADMIN:
                return 'Administrator';
            case RoleType.MANAGEMENT:
                return 'Manager';
            case RoleType.FOURTHLEVELSUPPORT:
                return '4. Level Supporter';
            case RoleType.THIRDLEVELSUPPORT:
                return '3. Level Supporter';
            case RoleType.SECONDLEVELSUPPORT:
                return '2. Level Supporter';
            case RoleType.FIRSTLEVELSUPPORT:
                return '1. Level Supporter';
            case RoleType.PARTNER:
                return 'Partner';
            case RoleType.CUSTOMER:
                return 'Kunde';
            default:
                return 'invalid';
        }
    }
}

export {
    MHApi
};
