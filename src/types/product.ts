import { User } from './user';

export type Categories = Category[];

export interface CustomerProduct {
    productId: string;
    lastInvoice: Date;
    canceled: null;
    created: Date;
    productStatus: ProductStatus;
    orderId: string;
    userId: string;
    billingCycle: number;
    user: User;
}

export interface Category {
    id: string;
    name: string;
    description: string;
    sortId: number;
    products: Product[];
}

export interface Product {
    id: string;
    type: string;
    categoryId: string;
    name: string;
    description: string;
    shortDescription: string;
    sortId: number;
    purchasePrice: number;
    sellingPrice: number;
    show: boolean;
    moduleConfiguration: any;
}

export enum ProductStatus {
    active = "active",
    inactive = "inactive",
    inProgress = "inProgress",
    failed = "failed",
}
