import { CustomerProduct } from "./Product";

export interface Webspace {
    id: string;
    productId: string;
    pleskId: number;
    userId: string;
    domain: string;
    plan: string;
    guid: string;
    product: CustomerProduct;
}

export interface WebspaceStatistics {
    active_domains: number;
    subdomains: number;
    disk_space: number;
    email_postboxes: number;
    email_redirects: number;
    email_response_messages: number;
    mailing_lists: number;
    databases: number;
    traffic: number;
    traffic_prevday: number;
}
