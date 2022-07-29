export interface IpRange {
	id: number;
	from: string;
	to: string;
	subnet: string;
	gateway: string;
	type: 'ipv4' | 'ipv6';
	ips: Ip[];
}

export interface NetworkDTO {
	from: string;
	to: string;
	subnet: string;
	gateway: string;
	type: 'ipv4' | 'ipv6';
}

export interface Ip {
	ip: string;
	type: 'ipv4' | 'ipv6';
	assigned?: 'automatic' | 'manual' | undefined;
	vmId?: string;
	rangeId: number;
	range: IpRange;
}

export interface AssignIpDTO {
	kvmId: string;
	ips: string[];
	reboot?: boolean;
}
