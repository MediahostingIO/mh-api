import { TicketPriority, TicketStatus } from "../TicketTypes";

export type TicketsResponse = BaseTicket[];
export type TicketResponse = Ticket;

export interface CreateTicketDTO {
    title: string;
    department: string;
    content: string;
    priority: TicketPriority;
    productType?: string;
    productId?: string;
}

export interface Ticket extends BaseTicket {
    messages: Message[];
    user: User;
}

export interface Message {
    messageId: string;
    ticketId: number;
    createdAt: Date;
    userId: string;
    isFromUser: boolean;
    message: string;
    quoteMessageId?: string;
    quoteMessage: Message
    user: User;
}

export interface Message {
    messageId: string;
    ticketId: number;
    createdAt: Date;
    userId: string;
    isFromUser: boolean;
    message: string;
    quoteMessageId?: string;
    quoteMessage: Message
    user: User;
}

export interface User {
    firstName: string;
    lastName: string;
    role: number;
}


export interface BaseTicket {
    ticketId: number;
    title: string;
    open: boolean;
    department: string;
    userId: string;
    priority: TicketPriority;
    status: TicketStatus;
    discordChannelId?: string;
    messageId?: string;
    productType: string;
    targetProduct: string;
    content: string;
    created: Date;
    lastMessage: Date;
}

export interface Department {
    id: number,
    name: string
}
