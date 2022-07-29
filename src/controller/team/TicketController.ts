import { CreateTicketDTO, Department, TicketResponse, TicketsResponse } from "../../types/ticket/Ticket";
import { MHApi } from "../../mh-api";

export default class TicketController {
    public async getAllTickets(): Promise<TicketsResponse> {
        return MHApi.request('GET', 'team/tickets');
    }

    public async getTicket(id: string): Promise<TicketResponse> {
        return MHApi.request('GET', 'team/tickets/' + id);
    }

    public getAllDepartments(): Promise<Department[]> {
        return MHApi.request('GET', 'team/tickets/departments');
    }

    public async closeTicket(id: string): Promise<boolean> {
        return MHApi.request('PUT', 'team/tickets/' + id + '/close');
    }

    public async createTicket(data: CreateTicketDTO): Promise<TicketResponse> {
        return MHApi.request('POST', 'team/tickets', {data});
    }

    public async sendMessage(id: string, message: string, quoteMessageId?: string): Promise<TicketResponse> {
        return MHApi.request('POST', 'team/tickets/' + id, {data: {message, quoteMessageId}});
    }
}
