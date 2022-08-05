import DomainHandleController from "./DomainHandleController";
import { AuthInfo, Domain, DomainDNS, DomainResponse, Record, UpdateDomainDTO } from "../../types/Domain";
import { MHApi } from "../../mh-api";

export default class DomainController {
    public readonly handles = new DomainHandleController();

    public async getAllDomains(id: number): Promise<Domain[]> {
        return MHApi.request('GET', 'team/domains' + id);
    }

    public async getDomain(id: number, domainId: string): Promise<DomainResponse> {
        return MHApi.request('GET', `team/domains/${id}/${domainId}`);
    }

    public async updateDomain(id: number, domainId: string, data: UpdateDomainDTO): Promise<DomainResponse> {
        return MHApi.request('PUT', `team/domains/${id}/${domainId}`, {data});
    }

    public async getDNSRecords(id: number, domainId: string): Promise<DomainDNS> {
        return MHApi.request('GET', `team/domains/${id}/${domainId}/dns`)
    }

    public async updateDNSRecords(id: number, domainId: string, records: Record[]): Promise<DomainDNS> {
        return MHApi.request('PUT', `team/domains/${id}/${domainId}/dns`, {data: records})
    }

    public async reqAuthInfo(id: number, domainId: string): Promise<AuthInfo> {
        return MHApi.request('POST', `team/domains/${id}/${domainId}/authinfo`)
    }
}
