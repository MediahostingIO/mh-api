import { MHApi } from "../mh-api";

export class DepartmentController {
    public getAllDepartments(): Promise<{id: number, name: string }[]> {
        return MHApi.request('GET', 'departments');
    }
}
