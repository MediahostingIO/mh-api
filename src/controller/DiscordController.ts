import { DiscordInfoResponse } from '../types/discord';
import { MHApi } from '../mh-api';

export class DiscordController {
    public async unlink(): Promise<void> {
        return MHApi.request('GET', 'discord/unlink');
    }

    public async info(): Promise<DiscordInfoResponse> {
        return MHApi.request('GET', 'discord/info');
    }
}
