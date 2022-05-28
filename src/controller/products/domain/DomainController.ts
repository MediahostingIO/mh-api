import { MHApi } from "../../../mh-api";
import {AuthInfo, Domain, DomainDNS, DomainResponse, Record, UpdateDomainDTO} from "../../../types/Domain";
import {DomainHandleController} from "./DomainHandleController";

export class DomainController {
    public readonly handles = new DomainHandleController();

    public async getAllDomains(): Promise<Domain[]> {
        return MHApi.request('GET', 'domains');
    }

    public async getDomain(id: string): Promise<DomainResponse> {
        return MHApi.request('GET', `domains/${id}`);
    }

    public async updateDomain(id: string, data: UpdateDomainDTO): Promise<DomainResponse> {
        return MHApi.request('PUT', `domains/${id}`, {data});
    }

    public async cancelDomain(id: string, now: boolean = false): Promise<void> {
        return MHApi.request('PUT', `domains/${id}/cancel`, {data: {now}});
    }

    public async getDNSRecords(id: string): Promise<DomainDNS> {
        return MHApi.request('GET', `domains/${id}/dns`)
    }

    public async updateDNSRecords(id: string, records: Record[]): Promise<DomainDNS> {
        return MHApi.request('PUT', `domains/${id}/dns`, {data: records})
    }

    public async reqAuthInfo(id: string): Promise<AuthInfo> {
        return MHApi.request('POST', `domains/${id}/authinfo`)
    }
}
