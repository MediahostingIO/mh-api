import { BaseUser } from '../user';

export type RegisterResponse = { success: boolean };

export interface EditUserDTO {
    firstName?: string;
    lastName?: string;
    gender?: string;
    street?: string;
    city?: string;
    state?: string;
    postCode?: string;
    country?: string;
    billingEmail?: string;
    phoneNumber?: string;
    companyName?: string;
    domainHandle?: {
        birthday?: string;
        birthplace?: string;
        stateOfBirth?: string;
        countryOfBirth?: string;
        identifyCardNumber?: string;
        issuingAuthority?: string;
        dateOfIssue?: string;
        taxNumber?: string;
        taxId?: string;
        companyNumber?: string;
    }
}

export interface RegisterDTO {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    gender: string;
    username: string;
    street: string;
    city: string;
    state: string;
    postCode: string;
    country: string;
    billingEmail?: string;
    phoneNumber?: string;
    companyName?: string;
    betakey?: string;
}

interface LoginBasics {
    password: string;
}

interface LoginWithUsername extends LoginBasics {
    username: string;
    email?: never;
}

interface LoginWithEmail extends LoginBasics {
    username?: never;
    email: string;
}

export type LoginDTO = LoginWithEmail | LoginWithUsername;

export interface LoginResponse {
    success: boolean;
    user?: BaseUser;
    token?: string;
}
