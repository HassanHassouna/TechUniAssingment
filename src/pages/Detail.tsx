import {FC, useEffect, useState} from "react";
import {ShopHero} from "../sections/ShopHero";
import {getProductById} from "../api/Products";
import {IProduct} from "../api/Products/types";
import {ProdDetails} from "../sections/ProdDetails";
import {ProdDesc} from "../sections/ProdDesc";
import {Testimonials} from "../sections/Testimonials";
import {BestSeller} from "../sections/BestSeller";

interface IProps {
    productId: string;
    setQuantity?: (quantity: number) => void;
    quantity?: number;
}

export const Detail: FC<IProps> = ({productId, setQuantity, quantity}) => {
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
            <ProdDetails quantity={quantity} setQuantity={setQuantity} product={product}/>
            <ProdDesc product={product}/>
            <h1>What Our Customer Says</h1>
            <Testimonials/>
            <BestSeller title={'Related Items'}/>
        </div>
    )
}