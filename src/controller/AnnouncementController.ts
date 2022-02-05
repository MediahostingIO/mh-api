import { MHApi } from '../mh-api';
import { Announcement } from '../types/Announcement';

export class AnnouncementController {
  public async getAll(): Promise<Announcement[]> {
    return MHApi.request('GET', 'announcements');
  }
}
