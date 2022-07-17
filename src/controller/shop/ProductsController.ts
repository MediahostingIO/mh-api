import { MHApi } from "../../mh-api";
import { ShopProductTypes } from "../../types/ShopProductTypes";

export default class ProductsController {
	public getProductsByType(type: ShopProductTypes): Promise<any[]> {
		return MHApi.request('GET', 'shop/products/' + type);
	}
}
