import { MHApi } from "../../mh-api";
import { SmallBaseUser } from "../../types/User";
import { CustomerProduct } from "../../types/Product";

export default class UserController {
	public async getAll(): Promise<SmallBaseUser[]> {
		return MHApi.request('GET', 'team/customer');
	}

	public async get(id: number): Promise<SmallBaseUser> {
		return MHApi.request('GET', 'team/customer/' + id);
	}

	public async getCustomerProducts(id: number): Promise<CustomerProduct[]> {
		return MHApi.request('GET', 'team/customer/' + id + '/customerproducts');
	}

	public async create(user: SmallBaseUser): Promise<any> {
		return MHApi.request('POST', 'team/customer', { data: user });
	}

	public async update(id: number, user: SmallBaseUser): Promise<any> {
		return MHApi.request('PUT', 'team/customer/' + id, { data: user });
	}
}
