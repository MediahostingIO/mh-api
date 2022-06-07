import {User} from "../User";

export interface SshKey {
    id?: string;
    name?: string;
    publicKey?: string;
    userId?: string;
    user?: User;
    inUse?: boolean;
}
