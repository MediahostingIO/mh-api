export interface VpsStatistics {
    maxmem?: number;
    maxdisk?: number;
    cpu?: number;
    netout?: number;
    diskwrite?: number;
    netin?: number;
    time: number;
    mem?: number;
    diskread?: number;
    disk?: number;
    maxcpu?: number;
}

export interface Data {
    status: number;
    net_in: number;
    net_out: number;
    used_cpu: string;
    used_ram: string;
    ram: string;
    used_disk: number;
    disk: string;
    used_inode: number;
    inode: number;
    used_bandwidth: number;
    bandwidth: number;
    virt: string;
    io_read: number;
    io_write: number;
    vpsid: string;
    vps_name: string;
    hostname: string;
    vps_ram_info: boolean;
    speed_cap: null;
    cores: string;
}

export interface PieData {
    server_bandwidth: ServerBandwidth;
    server_cpu: ServerCPU;
    usage: { [key: string]: ServerRam };
}

export interface ServerBandwidth {
    limit: number;
    used: number;
    usage: { [key: string]: number };
    in?: ServerBandwidth;
    out?: ServerBandwidth;
    free: number;
    limit_gb: number;
    used_gb: number;
    free_gb: number;
    percent: number;
    percent_free: number;
}

export interface ServerCPU {
    manu: string;
    cpumodel: string;
    limit: number;
    used: number;
    free: number;
    percent: number;
    percent_free: number;
}

export interface ServerRam {
    used_ram: number;
    ram: number;
}
