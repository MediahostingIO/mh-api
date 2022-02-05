export type Notifications = Notification[];

export interface Notification {
    id: string;
    title: string;
    userId: string;
    content: string;
    seen: boolean;
    send: Date;
    productType: string;
    productId: string;
}
