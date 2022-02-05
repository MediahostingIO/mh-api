import { CustomerProduct } from '../product';

export interface ControlVmResponse extends Vm {
    success: boolean;
    response?: string;
}

export interface VmResponse extends Vm {
    status: string;
}

export interface VpsData {
    cpu: string;
    memory: number;
    maxMemory: number;
    netIn: number;
    netOut: number;
    uptime: number;
    diskUse: number;
    maxDisk: number;
    status: string;
    node: string;
    ipv4: string;
    ipv6: string;
}

export interface Disk {
    percent: number;
    used: number;
    available: number;
}

export interface OS {
    osid: string;
    type: string;
    name: string;
    filename: string;
    size: string;
    pygrub: string;
    drive: string;
    hvm: string;
    perf_ops: string;
    active: string;
    url: string;
    distro: string;
    Nvirt: string;
    distro_logo: string;
}


export interface Vm {
    id: string;
    vpsId: number;
    userId: string;
    price: number;
    diskCapacity: string;
    hostname: string;
    template: string;
    ram: number;
    cores: number;
    productName: string;
    ip: string;
    data?: VpsData;
    product: CustomerProduct;
}
