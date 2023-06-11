export interface IProduct {
    id: number
    title: string
    price: number
    category: string
    description: string
    image: string,
    rating: {
        rate: number,
        count: number
    }
}


export type ProductCreated = Omit<IProduct, 'id'>;
export type ProductUpdated = Partial<IProduct>;