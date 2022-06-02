export type Notifications = Notification[];

export interface Notification {
    id: string;
    title: string;
    userId: string;
    content: string;
    type: NotificationType;
    duration: number;
    send: Date;
    productType: string;
    productId: string;
}

export type NotificationType = "success" | "error" | "warning" | "info";
