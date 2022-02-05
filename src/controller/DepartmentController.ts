import { MHApi } from "../mh-api";

export class DepartmentController {
    public getAllDepartments(): Promise<{ name: string }[]> {
        return MHApi.request('GET', 'departments');
    }
}
