import { CreatePaymentDTO, CreatePaymentResponse } from '../types/payments/CreatePayment';
import { MHApi } from '../mh-api';
import { AddCreditsDTO, AddCreditsResponse } from '../types/payments/AddCredits';
import { Payment } from '../types/payments/Payment';

export class PaymentController {
    public async getInvoices(): Promise<Payment[]> {
        return MHApi.request('GET', 'payments');
    }

    public async getInvoice(id: string): Promise<Payment> {
        return MHApi.request('GET', 'payments/' + id);
    }

    public async getInvoiceHtml(id: string): Promise<string> {
        return MHApi.request('GET', 'payments/' + id + '/mail');
    }

    public exportAllInvoices(): void {
        window.location.replace(`https://restapi.mediahosting.io/api/payments/export?token=${localStorage.getItem('authToken')}`);
    }

    public exportInvoice(id: string): void {
        window.location.replace(`https://restapi.mediahosting.io/api/payments/${id}/export?token=${localStorage.getItem('authToken')}`);
    }

    public exportInvoiceUrl(id: string): string {
        return `https://restapi.mediahosting.io/api/payments/${id}/export?token=${localStorage.getItem('authToken')}`;
    }

    public async addCredits(data: AddCreditsDTO): Promise<AddCreditsResponse> {
        return MHApi.request('POST', 'credits', {data});
    }

    public async createPayment(data: CreatePaymentDTO): Promise<CreatePaymentResponse> {
        return MHApi.request('POST', 'payments', {data});
    }


}

