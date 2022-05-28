import { MHApi } from "../mh-api";
import { PublicStatistics, UserStatistics } from "../types/Statistics";

export class StatisticsController {
    public async getPublicStatistics(): Promise<PublicStatistics> {
        return MHApi.request('GET', 'statistics');
    }

    public async getUserStatistics(): Promise<UserStatistics> {
        return MHApi.request('GET', 'statistics/me');
    }
}
