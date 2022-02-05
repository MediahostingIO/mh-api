import {User} from "../user";

export interface SshKey {
    id?: string;
    name?: string;
    publicKey?: string;
    userId?: string;
    user?: User;
}
