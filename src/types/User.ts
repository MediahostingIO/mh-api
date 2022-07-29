export interface BaseUser extends SmallBaseUser {
    domainHandle: {
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

export interface SmallBaseUser {
    id?: string;
    firstName: string;
    lastName: string;
    gender: string;
    companyName?: string;
    email: string;
    username: string;
    billingEmail?: string;
    street: string;
    city: string;
    state: string;
    postCode: string;
    country: string;
    phoneNumber?: string;
    domainHandleTag?: string;
    credits: number;
    emailVerified: boolean;
    twoFactorAuthenticationEnabled: boolean;
    role: RoleType;
    lastLogin: Date;
}

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    role: number;
}

export enum RoleType {
    CUSTOMER = 'customer',
    PARTNER = 'partner',
    FIRSTLEVELSUPPORT = 'firstlevel',
    SECONDLEVELSUPPORT = 'secondlevel',
    THIRDLEVELSUPPORT = 'thirdlevel',
    FOURTHLEVELSUPPORT = 'fourthlvl',
    MANAGEMENT = 'managment',
    ADMIN = 'admin',
}


