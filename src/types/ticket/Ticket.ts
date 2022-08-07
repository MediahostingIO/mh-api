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

export interface CreateTicketTeamDTO {
    title: string;
    department: string;
    content: string;
    priority: TicketPriority;
    productType?: string;
    productId?: string;
    userId: number;
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
    id: number;
    name: string;
    sortId: number;
}

export enum TicketPriority {
    LOW = 'LOW',
    MEDIUM = 'MEDIUM',
    HIGH = 'HIGH',
    CRITICAL = 'CRITICAL',
}

export enum TicketStatus {
    WAITING_FOR_CUSTOMER = 'WAITING_FOR_CUSTOMER',
    WAITING_FOR_SUPPORT = 'WAITING_FOR_SUPPORT',
    IN_PROGRESS = 'IN_PROGRESS',
    CLOSED = 'CLOSED',
}
