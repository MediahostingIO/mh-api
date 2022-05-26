export interface Mail {
    id: number;
    subject: string;
    created: Date;
    userId: string;
}

export interface MailResponse {
    data: Mail[],
    count: number,
}
