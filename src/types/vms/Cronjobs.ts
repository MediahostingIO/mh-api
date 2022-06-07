import {User} from "../User";
import { Vm } from "./Vm";

export interface Cronjob {
    id: string;
    kvmId: string;
    userId: string;
    type: CronJobType;
    active: boolean;
    time: string;
    options: any;
    kvm?: Vm;
    user?: User;
}

export enum CronJobType {
    Backup = 'backup',
    Restart = 'restart',
    Stop = 'stop',
    Start = 'start',
    PowerOff = 'poweroff',
}

export interface CronJobDTO {
    time: string;
    type: CronJobType;
    mode: 'snapshot' | 'suspend' | 'stop';
}
