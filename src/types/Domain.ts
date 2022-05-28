import { CustomerProduct } from "./Product";

export interface DomainResponse {
    domain: Domain;
    domainData: DomainData;
}

export interface DomainDNS {
    id: number;
    name: string;
    nameUnicode: string;
    serial: number;
    refresh: number;
    retry: number;
    expire: number;
    ttl: number;
    records: Record[];
}

export interface UpdateDomainDTO {
    ns1: string;
    ns2: string;
    ns3?: string;
    ns4?: string;
    ns5?: string;
}

export interface Record {
    id: number;
    name: string;
    type: string;
    content: string;
    ttl: number;
    priority: number;
}


export interface Domain {
    id: string;
    sld: string;
    tld: string;
    name: string;
    renew: boolean;
    userId: string;
    productId: string;
    product: CustomerProduct;
}

export interface DomainData {
    id: number;
    sld: string;
    tld: string;
    name: string;
    nameUnicode: string;
    ownerC: string;
    adminC: string;
    techC: string;
    zoneC: string;
    create: Date;
    expire: Date;
    delete: Date;
    suspended_at: Date;
    suspended_until: Date;
    authinfo: null;
    status: string;
    zone_id: number;
    zone: string;
    ns1: string;
    ns2: string;
    ns3: string;
    ns4: string;
    ns5: string;
    premium_price_class: string;
    created_at: Date;
    updated_at: Date;
}

export interface AuthInfo {
    authcode: string;
    domain: Domain;
}
