import { MHApi } from "../../mh-api";
import { Product } from "../../types/team/Product";

export default class ProductsController {
    public async getAll(): Promise<Product[]> {
        return MHApi.request('GET', 'team/products');
    }

    public async get(id: number): Promise<Product> {
        return MHApi.request('GET', 'team/products' + id);
    }

    public async createProduct(product: Product): Promise<any> {
        return MHApi.request('POST', 'team/products', { data: product });
    }

    public async editProduct(product: Product): Promise<any> {
        return MHApi.request('PUT', 'team/products' + product.id, { data: product });
    }

    public async deleteProduct(id: number): Promise<any> {
        return MHApi.request('DELETE', 'team/products' + id);
    }
}
