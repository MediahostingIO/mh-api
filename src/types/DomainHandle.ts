import {User} from "./User";

export interface DomainHandle {
    id: string;
    userId: string;
    user: User;
    birthday: string;
    birthplace: string;
    firstName: string;
    lastName: string;
    gender: string;
    email: string;
    street: string;
    city: string;
    state: string;
    postCode: string;
    country: string;
    stateOfBirth: string;
    countryOfBirth: string;
    identifyCardNumber: string;
    issuingAuthority: string;
    dateOfIssue: string;
    taxNumber: string;
    taxId: string;
    companyNumber: string;
}

export interface DomainHandleDto {
    birthday: string;
    birthplace: string;
    firstName: string;
    lastName: string;
    gender: string;
    email: string;
    street: string;
    city: string;
    state: string;
    postCode: string;
    country: string;
    stateOfBirth: string;
    countryOfBirth: string;
    identifyCardNumber: string;
    issuingAuthority: string;
    dateOfIssue: string;
    taxNumber: string;
    taxId: string;
    companyNumber: string;
}
