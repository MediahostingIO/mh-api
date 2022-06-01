export interface Mail {
	id: number;
	subject: string;
	contentHTML: string;
	contentTEXT: string;
	tag: MailTags;
	created: Date;
	userId: string;
}

export interface MailResponse {
	data: Mail[],
	count: number,
}

export interface MailOptions {
	page?: number,
	take?: number,
	keyword?: string
}

export enum MailTags {
	NONE = 'none',
	NEWSLETTER = 'newsletter',
	INVOICE = 'invoice',
	ORDER = 'order',
	PRODUCT = 'product',
}
