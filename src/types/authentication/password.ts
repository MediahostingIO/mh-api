export interface ChangePasswordDTO {
    newPassword: string;
    currentPassword: string;
    twoFactorAuthenticationCode?: string;
}
