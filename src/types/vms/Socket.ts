export interface KvmCallbacks {
    onLiveData: (data: LiveKvmData) => void;
    onKvmData: (data: KvmData) => void;
    onKvmStatistics: (data: KvmConnectStatistics) => void;
}

interface KvmConnectStatistics {
    stats: any;
    dailyStats: any;
    monthlyStats: any;
}

interface KvmData {
    status: string;
    ipv4?: string[];
    ipv6?: string[];
}

interface LiveKvmData {
    memory: {
        memory: number,
        maxMemory: number,
    },
    network: {
        in: number,
        out: number,
    },
    cpu: number,
}
