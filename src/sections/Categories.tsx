import {FC, useEffect, useState, useCallback} from "react";
import {getAllCategories, getProductBySpecificCategory, getAllProducts} from "../api";
import {
    ShopProductsContainer,
    ShopProductsCategories,
    CategoryContainer,
    Card,
    LikeButton,
    CardPrice,
    CardTitle,
    CardCategory,
    CardSubTitle,
    GridCardsContainer
} from './sections.styled'
import {IProduct} from "../api/Products/types";

export const CategoriesShop: FC = () => {
    const [categories, setCategories] = useState<Array<string> | null>(null);
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categories = await getAllCategories();
                const products = await getAllProducts();
                setCategories(categories);
                setProducts(products);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };
        fetchCategories()
    }, []);
    const [products, setProducts] = useState<IProduct | null>(null);
    const [activeCategory, setActiveCategory] = useState<string | null>('all');
    const handleCategoryClick = (category: string) => {
        setActiveCategory(category === activeCategory ? null : category);
    };
    return (
        <ShopProductsContainer>
            <ShopProductsCategories>
                <CategoryContainer onClick={
                    async () => {
                        handleCategoryClick('all')
                        const products = await getAllProducts()
                        setProducts(products);
                    }
                }
                                   className={activeCategory === 'all' ? 'active' : ''}
                >
                    <h3>All</h3>
                </CategoryContainer>
                {categories ? (
                    categories.map((value, index) => {
                        return (
                            <CategoryContainer onClick={
                                async () => {
                                    handleCategoryClick(value)
                                    const products = await getProductBySpecificCategory(value);
                                    setProducts(products);
                                }
                            } key={index}
                                               className={activeCategory === value ? 'active' : ''}
                            >
                                <h3>{value}</h3>
                            </CategoryContainer>
                        )
                    })
                ) : (
                    <p>Loading categories...</p>
                )}
            </ShopProductsCategories>
            <GridCardsContainer>
                {products ? (
                    Object.values(products)?.map((value, index) => {
                            return (
                                <div key={index}>
                                    <Card>
                                        <LikeButton/>
                                        <img style={{
                                            width: '70%',
                                            height: '100%',
                                            objectFit: 'contain',
                                            mixBlendMode: 'multiply',

                                        }} src={value.image} alt={value.name}/>
                                    </Card>
                                    <CardTitle>{value.name}</CardTitle>
                                    <CardCategory>{value.category}</CardCategory>
                                    <CardSubTitle>{value.description}</CardSubTitle>
                                    <CardPrice>${value.price}</CardPrice>
                                </div>
                            )
                        }
                    )
                ) : (
                    <p>Loading products...</p>
                )}
            </GridCardsContainer>
        </ShopProductsContainer>
    )
}