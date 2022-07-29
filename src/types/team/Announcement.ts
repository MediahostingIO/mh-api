import { RoleType } from "../User";

export interface Announcement {
  id: string;
  title: string;
  message: string;
  roles?: RoleType[];
  created: Date;
}
