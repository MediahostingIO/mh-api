import { MHApi } from "../../mh-api";
import { ShopProductType } from "../../types/ShopProductTypes";

export default class ProductsController {
	public getProductsByType(type: ShopProductType): Promise<any[]> {
		return MHApi.request('GET', 'shop/products/' + type);
	}
}
