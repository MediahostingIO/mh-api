import { Product } from "./Product";

export interface Category {
	id: number;
	name: string;
	icon: string;
	description: string;
	sortId: number;
	productType: string;
	products?: Product[];
}
