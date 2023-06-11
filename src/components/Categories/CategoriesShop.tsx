import {
    CategorySectionCard,
    CategorySectionContainer,
    CategoryCardButton,
    CategoryCardTitle,
    CategoryTextWrapper,
    CategoryCardSubTitle
} from '../../sections/sections.styled'
import {getProductByLimit} from "../../api";
import {FC, useEffect, useState} from "react";
import {Link} from 'react-router-dom'
import Next from '../../assets/next.png'

interface IProps {
    setProductId: (productId: string) => void;
}

export const CategoriesShop: FC<IProps> = ({setProductId}) => {
    const [products, setProducts] = useState<any>([])
    useEffect(() => {
        const fetchProducts = async () => {
            const products = await getProductByLimit(6)
            setProducts(products)
        }
        fetchProducts()
    }, [])

    return (
        <CategorySectionContainer>
            {
                products.map((product: any, index: number) => (
                    <CategorySectionCard key={index}>
                        <CategoryTextWrapper>
                            <CategoryCardTitle>{product.title}</CategoryCardTitle>
                            <CategoryCardSubTitle>{product.description}</CategoryCardSubTitle>
                            <Link to={`/detail/${product.id}`}>
                                <CategoryCardButton onClick={() => {
                                    setProductId(product.id)
                                }}>
                                    <img src={Next} alt={product.title}/>
                                </CategoryCardButton>
                            </Link>
                        </CategoryTextWrapper>
                    </CategorySectionCard>
                ))
            }
        </CategorySectionContainer>
    )
}

