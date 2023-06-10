export interface ICart {
    id: number
    userId: number
    date: string
    products: Array<object>
}

export type CartCreated = Omit<ICart, 'id'>;
export type CartUpdated = Partial<ICart>