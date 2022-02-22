import {MHApi} from "../mh-api";
import {Subuser} from "../types/Subuser";
import {CustomerProduct} from "../types/product";

export default class SubUserController {
    public async getAllSubUser(): Promise<Subuser[]> {
        return MHApi.request('GET', 'subuser');
    }

    public async getSubUser(id: string): Promise<Subuser> {
        return MHApi.request('GET', 'subuser/' + id);
    }

    public  async getAvailableProducts(id: string): Promise<CustomerProduct[]> {
        return MHApi.request('GET', 'subuser/availableProducts');
    }

    public async createSubUser(id: string): Promise<Subuser> {
        return MHApi.request('POST', 'subuser/' + id);
    }

    public async addProductToSubUser(id: string, productId: string): Promise<Subuser> {
        return MHApi.request('POST', 'subuser/' + id + '/product/' + productId);
    }

    public async editSubUserPermissions(id: string, productId: string, permissions: string[]): Promise<Subuser> {
        return MHApi.request('PUT', 'subuser/' + id + '/product/' + productId, {data: {permissions}});
    }
}
