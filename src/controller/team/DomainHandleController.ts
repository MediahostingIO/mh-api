import { DomainHandle, DomainHandleDto } from "../../types/DomainHandle";
import { MHApi } from "../../mh-api";

export default class DomainHandleController {
    public async getAllHandles(id: number): Promise<DomainHandle[]> {
        return MHApi.request('GET', `team/handle/${id}`);
    }

    public async getHandle(id: number, handleId: string): Promise<DomainHandle> {
        return MHApi.request('GET', `team/handle/${id}/${handleId}`);
    }

    public async createHandle(id: number, handle: DomainHandleDto): Promise<DomainHandle> {
        return MHApi.request('POST', 'team/handle' + id, {data: handle});
    }

    public async updateHandle(id: number, handleId: string, handle: DomainHandleDto): Promise<DomainHandle> {
        return MHApi.request('PUT', `team/handle/${id}/${handleId}`, {data: handle});
    }

    public async deleteHandle(id: number, handleId: string): Promise<void> {
        return MHApi.request('DELETE', `team/handle/${id}/${handleId}`);
    }
}
