import { WebspaceController } from './products/WebspaceController';
import {Categories, CustomerProduct} from "../types/product";
import { MHApi } from "../mh-api";
import { VmController } from "./products/VmController";
import { DomainController } from "./products/domain/DomainController";

export class ProductsController {
    public readonly kvm = new VmController();
    public readonly webspace = new WebspaceController();
    public readonly domains = new DomainController();

    public async getAllProducts(): Promise<Categories> {
        return MHApi.request('GET', 'products');
    }

    public async getAllUserProducts(): Promise<CustomerProduct[]> {
        return MHApi.request('GET', 'user/products');
    }

    public async cancelProduct(id: string, now = false): Promise<void> {
        return MHApi.request('PUT', `user/products/${id}/cancel`, {params: {now}})
    }
}
