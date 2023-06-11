import {FC} from "react";
import {IProduct} from "../api/Products/types";
import {
    ProductDetailsContainer,
    ProductImagesContainer,
    ProductImage,
    ProductImages,
    ProductDetails,
    ProductDetailsAvailability,
    Title,
    CardPrice,
    ProductDetailsSub,
    HeroSectionBtn
} from './sections.styled'
import {sizes} from './sections.consts'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

interface IProps {
    product: IProduct | null;
    setQuantity?: (quantity: number) => void;
    quantity?: number;
}

export const ProdDetails: FC<IProps> = ({product, setQuantity, quantity}) => {

    return (
        <ProductDetailsContainer>
            <ProductImagesContainer>
                <div>
                    <ProductImages/>
                    <ProductImages/>
                    <ProductImages/>
                    <ProductImages/>
                </div>
                <ProductImage src={product?.image} alt={product?.title}/>
            </ProductImagesContainer>
            <ProductDetails>
                <Title>{product?.title}</Title>
                <ProductDetailsAvailability>
                    <span>Availability :</span> {product?.rating?.count} <span>in stock</span>
                </ProductDetailsAvailability>
                <CardPrice>${product?.price}</CardPrice>
                <ProductDetailsSub>
                    <span>SKU</span>
                    <span>:AA0031</span>
                </ProductDetailsSub>
                <ProductDetailsSub>
                    <span>Category</span>
                    <span>{product?.category}</span>
                </ProductDetailsSub>
                <ProductDetailsSub>
                    <span>Tags</span>
                    <span>{product?.category}</span>
                </ProductDetailsSub>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '40%',
                    marginBottom: '1rem',
                }}>
                    <select style={{
                        outline: 'none',
                        fontSize: '1.5rem',
                        borderRadius: '5px',
                        padding: '.4rem',
                        fontWeight: 500,
                        color: '#000',
                        cursor: 'pointer',
                    }}>
                        {sizes.map((size, index) => (
                            <option key={index} value={size.size}>{size.size}</option>
                        ))}
                    </select>
                    <div style={{
                        display: 'flex',
                        gap: '1rem',
                    }}>
                    <span onClick={() => {
                        if (quantity && quantity > 1) {
                            setQuantity && setQuantity(quantity - 1)
                        }

                    }} style={{
                        outline: 'none',
                        fontSize: '1.5rem',
                        padding: '.4rem',
                        fontWeight: 500,
                        color: '#000',
                        cursor: 'pointer',
                    }}>-
                    </span>
                        <span style={{
                            fontSize: '1.5rem',
                            padding: '.4rem',
                            fontWeight: 500,
                            color: '#000',
                            cursor: 'pointer',
                        }}>{quantity}</span>

                        <span onClick={() => {
                            setQuantity && setQuantity(quantity ? quantity + 1 : 1)
                        }} style={{
                            fontSize: '1.5rem',
                            borderRadius: '5px',
                            padding: '.4rem',
                            fontWeight: 500,
                            color: '#000',
                            cursor: 'pointer',
                        }}>+
                    </span>
                    </div>
                </div>
                <HeroSectionBtn>Add to cart <ShoppingCartOutlinedIcon/>
                </HeroSectionBtn>
            </ProductDetails>
        </ProductDetailsContainer>
    )
}