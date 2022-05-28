export interface PublicStatistics {
    products: number;
    users: number;
    tickets: number;
}

export interface UserStatistics {
    credit: string;
    products: number
    tickets: number;
    monthlyPricing: string;
    openInvoices: number;
}
