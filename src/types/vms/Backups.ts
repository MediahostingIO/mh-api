import { Vm } from "./Vm";

export interface KvmBackup {
    id: string,
    filename: string,
    kvm: Vm,
    created: Date,
    status: BackupStatus,
}

export enum BackupStatus {
    RUNNING = 'running',
    FINISHED = 'finished',
}
