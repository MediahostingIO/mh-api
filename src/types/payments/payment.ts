import { AllProductConfigurations } from '../product_configurations';
import { User } from '../user';

export interface Payment {
    id: string;
    invoiceId: string;
    userId: string;
    isCreditPayment: boolean;
    total: number;
    user: User;
    products: {
        id: string;
        origin: { productId: string; configuration: AllProductConfigurations };
        configuration: AllProductConfigurations;
        type: string;
        productId: string;
        productName: string;
        price: number;
        productConfiguration: any;
    }[];
    invoice: Invoice;
}

export interface Invoice {
    invoiceId: string;
    data: MolliePayment;
    paymentStatus: string;
    created: Date;
}

export interface MolliePayment {
    resource: string;
    id: string;
    mode: string;
    createdAt: Date;
    amount: MolliePaymentAmount;
    description: string;
    method: null;
    metadata: MolliePaymentMetadata;
    status: string;
    isCancelable: boolean;
    expiresAt: Date;
    details: null;
    profileId: string;
    sequenceType: string;
    redirectUrl: string;
    webhookUrl: string;
    _links: Links;
}

export interface Links {
    self: MolliePaymentCheckout;
    checkout: MolliePaymentCheckout;
    dashboard: MolliePaymentCheckout;
    documentation: MolliePaymentCheckout;
}

export interface MolliePaymentCheckout {
    href: string;
    type: string;
}

export interface MolliePaymentAmount {
    value: string;
    currency: string;
}

export interface MolliePaymentMetadata {
    order_id: string;
}
