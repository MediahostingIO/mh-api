import { Payment } from "../../types/payments/Payment";
import { MHApi } from "../../mh-api";
import { AddCreditsDTO, AddCreditsResponse } from "../../types/payments/AddCredits";
import { CreatePaymentDTO, CreatePaymentResponse } from "../../types/payments/CreatePayment";

export default class PaymentController {
    public async getInvoices(userId: number): Promise<Payment[]> {
        return MHApi.request('GET', 'team/payments/' + userId + '/invoices');
    }

    public async getInvoice(id: string): Promise<Payment> {
        return MHApi.request('GET', 'payments/' + id);
    }

    public async getInvoiceHtml(id: string): Promise<string> {
        return MHApi.request('GET', 'payments/' + id + '/mail');
    }

    public async addCredits(data: AddCreditsDTO): Promise<AddCreditsResponse> {
        return MHApi.request('POST', 'credits', {data});
    }

    public async createPayment(data: CreatePaymentDTO): Promise<CreatePaymentResponse> {
        return MHApi.request('POST', 'payments', {data});
    }

}

