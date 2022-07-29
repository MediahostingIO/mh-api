import { Category } from "./Category";

export interface Product {
	id?: number;
	type: string;
	available: boolean;
	name: string;
	itemType: ProductItemType;
	items?: (Item | SliderItem | ListItem)[];
	displayName: string;
	description: {}[];
	shortDescription: string;
	sortId: number;
	payOnOrder: boolean;
	purchasePrice: number;
	sellingPrice: number;
	show: boolean;
	moduleConfiguration: any;
	categoryId: number;
	category?: Category;
}

export enum ProductItemType {
	CUSTOM = 'custom',
	NORMAL = "normal",
}

export enum ItemKind {
	Item = "item",
	ListItem = "listItem",
	SliderItem = "sliderItem",
}

class DefaultItem {
	public name: string;
	public id: string;
	public description: string;
	public sortId: number;
	public type: 'string' | 'number';
	public kind: ItemKind;
	public upgradeable = true;
}

// tslint:disable-next-line:max-classes-per-file
export class Item extends DefaultItem {
	public price: number;
	public kind: ItemKind.Item;
}

// tslint:disable-next-line:max-classes-per-file
export class ListItem extends DefaultItem {
	public items: {
		name: string;
		price?: number;
		id: string;
		value?: string;
		sortId: number;
		placeholder: boolean;
		available: boolean;
	}[];
	public default: string;
	public kind = ItemKind.ListItem;
}

// tslint:disable-next-line:max-classes-per-file
export class SliderItem extends DefaultItem {
	public from: number;
	public description: string;
	public to: number;
	public steps = 1;
	public unitType: string;
	public pricePerUnit: number;
	public name: string;
	public default: number;
	public startPrice = 0;
	public kind = ItemKind.SliderItem;
}
