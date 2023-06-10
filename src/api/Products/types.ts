export interface IProduct {
    id: number
    title: string
    price: number
    category: string
    description: string
    image: string
}


export type ProductCreated = Omit<IProduct, 'id'>;
export type ProductUpdated = Partial<IProduct>;