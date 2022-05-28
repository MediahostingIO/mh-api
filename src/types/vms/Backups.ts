import {VmResponse} from "./Vm";

export interface KvmBackup {
    id: string,
    filename: string,
    kvm: VmResponse,
    created: Date,
    status: BackupStatus,
}

export enum BackupStatus {
    RUNNING = 'running',
    FINISHED = 'finished',
}
