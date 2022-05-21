import { MHApi } from "../mh-api";
import {Department} from "../types/ticket/ticket";

export class DepartmentController {
    public getAllDepartments(): Promise<Department[]> {
        return MHApi.request('GET', 'departments');
    }
}
