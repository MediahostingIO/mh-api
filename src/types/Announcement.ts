import { RoleType } from './User';

export interface Announcement {
  id: string;
  title: string;
  message: string;
  roles?: RoleType[];
  created: Date;
}

export interface AnnouncementDTO {
  title: string;
  message: string;
  roles?: RoleType[];
  sendMail: boolean;
}
