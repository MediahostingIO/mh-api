
import {MHApi} from "../../../mh-api";
import {DomainHandle, DomainHandleDto} from "../../../types/DomainHandle";

export class DomainHandleController {
    public async getAllHandles(): Promise<DomainHandle[]> {
        return MHApi.request('GET', 'handle');
    }

    public async getHandle(id: string): Promise<DomainHandle> {
        return MHApi.request('GET', `handle/${id}`);
    }

    public async createHandle(handle: DomainHandleDto): Promise<DomainHandle> {
        return MHApi.request('POST', 'handle', {data: handle});
    }

    public async updateHandle(id: string, handle: DomainHandleDto): Promise<DomainHandle> {
        return MHApi.request('PUT', `handle/${id}`, {data: handle});
    }

    public async deleteHandle(id: string): Promise<void> {
        return MHApi.request('DELETE', `handle/${id}`);
    }
}
