import DomainHandleController from "./DomainHandleController";
import { AuthInfo, Domain, DomainDNS, DomainResponse, Record, UpdateDomainDTO } from "../../../types/Domain";
import { MHApi } from "../../../mh-api";

export default class DomainController {
    public readonly handles = new DomainHandleController();

    public async getAllDomains(userId: number): Promise<Domain[]> {
        return MHApi.request('GET', 'team/domains/all/' + userId);
    }

    public async getDomain(id: number): Promise<DomainResponse> {
        return MHApi.request('GET', `team/domains/${id}`);
    }

    public async updateDomain(id: number, data: UpdateDomainDTO): Promise<DomainResponse> {
        return MHApi.request('PUT', `team/domains/${id}`, {data});
    }

    public async getDNSRecords(id: number): Promise<DomainDNS> {
        return MHApi.request('GET', `team/domains/${id}/dns`)
    }

    public async updateDNSRecords(id: number, records: Record[]): Promise<DomainDNS> {
        return MHApi.request('PUT', `team/domains/${id}/dns`, {data: records})
    }

    public async reqAuthInfo(id: number): Promise<AuthInfo> {
        return MHApi.request('POST', `team/domains/${id}/authinfo`)
    }
}
