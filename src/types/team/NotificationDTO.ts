export interface NotificationDTO {
    title: string;
    content: string;
    type: string;
    duration: number;
    productType?: string;
    productId?: string;
}

export interface Notification {
    title: string;
    message: string;
    type: string;
    duration: number;
}
