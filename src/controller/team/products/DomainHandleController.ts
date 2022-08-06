import { DomainHandle, DomainHandleDto } from "../../../types/DomainHandle";
import { MHApi } from "../../../mh-api";

export default class DomainHandleController {
    public async getAllHandles(userId: number): Promise<DomainHandle[]> {
        return MHApi.request('GET', `team/handle/all/${userId}`);
    }

    public async getHandle(id: number): Promise<DomainHandle> {
        return MHApi.request('GET', `team/handle/${id}`);
    }

    public async createHandle(id: number, handle: DomainHandleDto): Promise<DomainHandle> {
        return MHApi.request('POST', `team/handle/${id}`, {data: handle});
    }

    public async updateHandle(id: number, handle: DomainHandleDto): Promise<DomainHandle> {
        return MHApi.request('PUT', `team/handle/${id}`, {data: handle});
    }

    public async deleteHandle(id: number): Promise<void> {
        return MHApi.request('DELETE', `team/handle/${id}`);
    }
}
