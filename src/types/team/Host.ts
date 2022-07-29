import { CustomerProduct } from "../Product";

export interface Host {
	id: string;
	name: string;
	displayName: string;
	statusId: string;
	status: 'AVAILABLE' | 'UNAVAILABLE';
	location: string;
	full: boolean;
	customerProducts: CustomerProduct[];
}
