import { User } from "../User";

export interface Vlan {
	id: number;
	vnet: string;
	vlanAware: boolean;
	userId: string;
	user?: User;
}
