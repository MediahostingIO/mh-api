import { Host } from "../../types/team/Host";
import { MHApi } from "../../mh-api";

export default class HostController {
    public async getAll(): Promise<Host[]> {
        return MHApi.request('GET', 'team/hosts');
    }

    public async get(id: string): Promise<Host> {
        return MHApi.request('GET', `team/hosts/${id}`);
    }

    public async create(host: Host): Promise<Host> {
        return MHApi.request('POST', 'team/hosts', { data: host });
    }

    public async update(id: string, host: Host): Promise<Host> {
        return MHApi.request('PUT', `team/hosts/${id}`, { data: host });
    }

    public async delete(id: string): Promise<any> {
        return MHApi.request('DELETE', `team/hosts/${id}`);
    }
}
