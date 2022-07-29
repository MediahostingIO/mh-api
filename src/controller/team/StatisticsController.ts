import { MHApi } from "../../mh-api";
import { TeamStatistics } from "../../types/team/Statistics";

export default class StatisticsController {
    public async getStatistics(): Promise<TeamStatistics> {
        return MHApi.request('GET', 'team/statistics');
    }
}
