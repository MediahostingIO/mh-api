import { Notifications } from "../../types/Notification";
import { MHApi } from "../../mh-api";
import { IpRange, NetworkDTO } from "../../types/team/Network";

export default class NetworkController {
    public async getAll(): Promise<IpRange[]> {
        return MHApi.request('GET', 'team/network');
    }

    public async get(id: string): Promise<IpRange> {
        return MHApi.request('GET', 'team/network/' + id);
    }

    public async create(subnet: NetworkDTO): Promise<'ok'> {
        return MHApi.request('POST', 'team/network', { data: subnet });
    }

    public async assignIp(ip: string, kvmId: string): Promise<'ok'> {
        return MHApi.request('POST', 'team/network/assign', { data: { ip, kvmId } });
    }

    public async update(id: string, subnet: NetworkDTO): Promise<'ok'> {
        return MHApi.request('PUT', 'team/network/' + id, { data: subnet });
    }

    public async delete(id: string): Promise<'ok'> {
        return MHApi.request('DELETE', 'team/network/' + id);
    }
}
