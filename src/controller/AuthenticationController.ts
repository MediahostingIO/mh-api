import { AuthController } from "./auth/AuthController";
import { PasswordResetController } from "./auth/PasswordResetController";
import { TwoFactorAuthenticationController } from "./auth/TwoFactorAuthenticationController";

export class AuthenticationController {
    public authController: AuthController = new AuthController();
    public twoFactorAuthentication: TwoFactorAuthenticationController = new TwoFactorAuthenticationController();
    public passwordReset: PasswordResetController = new PasswordResetController();
}
