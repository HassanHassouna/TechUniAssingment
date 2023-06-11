import {IProduct} from "../api/Products/types";
import {FC} from "react";
import {Title, ProductDetailsContainer} from './sections.styled'

interface IProps {
    product: IProduct | null
}

export const ProdDesc: FC<IProps> = ({product}) => {


    return (
        <ProductDetailsContainer>
            <div style={{
                width: '50%'
            }}>
                <Title>{product?.title}</Title>
                <p>{product?.description}</p>
            </div>
            <div style={{
                width: '50%'
            }}>
                <Title>Fabric Detail</Title>
                <p>{product?.description}</p>
            </div>
        </ProductDetailsContainer>
    )
}