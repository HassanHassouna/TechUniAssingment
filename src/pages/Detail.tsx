import {FC, useEffect, useState} from "react";
import {ShopHero} from "../sections/ShopHero";
import {getProductById} from "../api/Products";
import {IProduct} from "../api/Products/types";

interface IProps {
    title?: string;
    subtitle?: string;
    productId: string;
}

export const Detail: FC<IProps> = ({title, subtitle, productId}) => {
    const [product, setProduct] = useState<IProduct | null>(null);
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const product = await getProductById(productId);
                setProduct(product);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        }
        fetchProduct();

    }, [productId]);


    return (
        <div>
            <ShopHero title={product?.category} subtitle={product?.title}/>
        </div>
    )
}