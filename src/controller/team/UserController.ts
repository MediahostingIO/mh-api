import { MHApi } from "../../mh-api";
import { SmallBaseUser } from "../../types/User";
import { CustomerProduct } from "../../types/Product";

export default class UserController {
	public async getAll(): Promise<SmallBaseUser[]> {
		return MHApi.request('GET', 'team/users');
	}

	public async get(id: string): Promise<SmallBaseUser> {
		return MHApi.request('GET', 'team/users/' + id);
	}

	public async getCustomerProducts(id: string): Promise<CustomerProduct[]> {
		return MHApi.request('GET', 'team/users/' + id + '/customerproducts');
	}

	public async create(user: SmallBaseUser): Promise<any> {
		return MHApi.request('POST', 'team/users', { data: user });
	}

	public async update(id: string, user: SmallBaseUser): Promise<any> {
		return MHApi.request('PUT', 'team/users/' + id, { data: user });
	}
}
