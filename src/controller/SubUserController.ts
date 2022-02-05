import {MHApi} from "../mh-api";
import {Subuser} from "../types/Subuser";

export default class SubUserController {
    public async getAllSubUser(): Promise<Subuser[]> {
        return MHApi.request('GET', 'subuser');
    }

    public async getSubUser(id: string): Promise<Subuser> {
        return MHApi.request('GET', 'subuser/' + id);
    }

    public async getSubUsersForProduct(id: string): Promise<Subuser[]> {
        return MHApi.request('GET', 'subuser/' + id);
    }

    public async editSubUser(id: string, data: Subuser): Promise<Subuser> {
        return MHApi.request('PUT', 'subuser', {data});
    }
}
