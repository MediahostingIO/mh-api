export interface Subuser {
    userId:   string;
    products: { [key: string]: Product };
}
export interface Product {
    permissions: string[];
}
