import { AllProductConfigurations } from '../ProductConfigurations';

export interface CreatePaymentResponse {
    success: boolean;
    paymentUrl?: string;
}

export interface CreatePaymentDTO {
    paymentMethod: PaymentMethod;
    products: AllProductConfigurations[];
}

export enum PaymentMethod {
    applepay = "applepay",
    bancontact = "bancontact",
    banktransfer = "banktransfer",
    belfius = "belfius",
    creditcard = "creditcard",
    directdebit = "directdebit",
    eps = "eps",
    giftcard = "giftcard",
    giropay = "giropay",
    ideal = "ideal",
    kbc = "kbc",
    klarnapaylater = "klarnapaylater",
    klarnasliceit = "klarnasliceit",
    paypal = "paypal",
    paysafecard = "paysafecard",
    przelewy24 = "przelewy24",
    sofort = "sofort"
}
