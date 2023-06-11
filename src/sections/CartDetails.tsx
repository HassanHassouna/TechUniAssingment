import React, {FC, useEffect, useState} from 'react'
import {
    CartDetailContainer,
    CartDetailCoupon,
    CartDetailImg,
    CartDetailPrice,
    CartDetailQuantity,
    CartDetailSub,
    CartDetailTitle,
    CartDetailTitlesContainer,
    CartDetailTotal,
    CartDetailName,
    HeroSectionBtn
} from './sections.styled'
import {getAllCarts, getProductById, ICart} from '../api'
import {SearchBar, SearchInput} from "../components/Filter/filter.styled";
import {Checkout} from "./Checkout";

export const CartDetails: FC = () => {
    const [carts, setCarts] = useState<ICart | null>(null)
    const [productsInCart, setProducts] = useState<any[]>([])
    useEffect(() => {
        const fetchCarts = async () => {
            const carts = await getAllCarts()
            const firstCart = Object.values(carts || {})[0]?.products
            const products = await Promise.all(
                firstCart?.map(async (cart: any) => {
                        const product = await getProductById(cart.productId)
                        return {
                            ...cart,
                            product
                        }
                    }
                ) || []
            )
            setCarts(carts)
            setProducts(products)
        }
        fetchCarts()
    }, [])

    console.log(productsInCart)
    return (

        <CartDetailContainer>
            <h1 style={{
                textAlign: 'left',
            }}>Cart</h1>
            <CartDetailTitlesContainer>
                <CartDetailTitle>Product Name</CartDetailTitle>
                <CartDetailTitle>Price</CartDetailTitle>
                <CartDetailTitle>Quantity</CartDetailTitle>
                <CartDetailTitle>Total</CartDetailTitle>
            </CartDetailTitlesContainer>
            {
                productsInCart.map((product) => {
                        return (
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                            }} key={product.id}>
                                <CartDetailImg src={product.product?.image}/>
                                <CartDetailName>{product.product?.title}</CartDetailName>
                                <CartDetailPrice>{product.product?.price}</CartDetailPrice>
                                <CartDetailQuantity>{product.quantity}</CartDetailQuantity>
                                <CartDetailSub>{product.product?.price * product.quantity}</CartDetailSub>
                            </div>
                        )
                    }
                )
            }
            <div style={{
                display: 'flex',
            }}>

                <CartDetailCoupon>
                    <h1>Have a coupon?</h1>
                    <SearchBar>
                        <SearchInput type="text" placeholder="Input your email here"/>
                    </SearchBar>
                    <HeroSectionBtn>Apply Coupon</HeroSectionBtn>
                </CartDetailCoupon>
                <CartDetailTotal>
                    <h1>Total</h1>
                    <h1>{productsInCart.reduce((acc, product) => acc + product.product?.price * product.quantity, 0)}</h1>
                </CartDetailTotal>
            </div>
            <Checkout/>
        </CartDetailContainer>
    )

}