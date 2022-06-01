export type Notifications = Notification[];

export interface Notification {
    id: string;
    title: string;
    userId: string;
    content: string;
    type: string;
    duration: number;
    send: Date;
    productType: string;
    productId: string;
}
