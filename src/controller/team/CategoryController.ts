import { MHApi } from "../../mh-api";
import { Category } from "../../types/team/Category";

export default class CategoryController {
	public async getAll(): Promise<Category[]> {
		return MHApi.request('GET', 'team/category');
	}

	public async get(id: string): Promise<Category> {
		return MHApi.request('GET', 'team/category/' + id);
	}

	public async create(data: Category): Promise<Category> {
		return MHApi.request('POST', 'team/category', { data });
	}

	public async edit(id: string, data: Category): Promise<boolean> {
		return MHApi.request('PUT', 'team/category/' + id, { data });
	}

	public async delete(id: string): Promise<boolean> {
		return MHApi.request('DELETE', 'team/category/' + id);
	}
}
