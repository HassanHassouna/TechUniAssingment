import {FC, useEffect} from "react";
import {getAllCategories, getProductBySpecificCategory, getAllProducts} from "../api";
import {IProduct} from "../api/Products/types";
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


interface IProps {
    activeCategory: string | null;
    categories: Array<string> | null;
    setCategories: (categories: Array<string>) => void;
    products: IProduct | null;
    setProducts: (products: IProduct) => void;
    handleCategoryClick: (category: string) => void;
    filterByPrice?: number[];
}

export const CategoriesShop: FC<IProps> = ({
                                               activeCategory,
                                               categories,
                                               setCategories,
                                               products,
                                               setProducts,
                                               handleCategoryClick,
                                               filterByPrice
                                           }) => {
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


    return (
        <ShopProductsContainer>
            {
                window.location.pathname.includes('filter') ? '' :
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
            }

            <GridCardsContainer>
                {products ? (
                    Object.values(products)?.map((value, index) => {
                            const price = value.price;
                            if (filterByPrice) {
                                if (price >= filterByPrice[0] && price <= filterByPrice[1]) {
                                    return (
                                        <div style={{
                                            width: '400px',
                                        }}
                                             key={index}>
                                            <Card>
                                                <LikeButton/>
                                                <img style={{
                                                    width: '70%',
                                                    height: '100%',
                                                    objectFit: 'contain',
                                                    mixBlendMode: 'multiply',

                                                }} src={value.image} alt={value?.title}/>
                                            </Card>
                                            <CardTitle>{value?.title}</CardTitle>
                                            <CardCategory>{value.category}</CardCategory>
                                            <CardSubTitle>{value.description}</CardSubTitle>
                                            <CardPrice>${value.price}</CardPrice>
                                        </div>
                                    )
                                }
                            } else {
                                return (
                                    <div style={{
                                        width: '400px',
                                    }}
                                         key={index}>
                                        <Card>
                                            <LikeButton/>
                                            <img style={{
                                                width: '70%',
                                                height: '100%',
                                                objectFit: 'contain',
                                                mixBlendMode: 'multiply',

                                            }} src={value.image} alt={value?.title}/>
                                        </Card>
                                        <CardTitle>{value?.title}</CardTitle>
                                        <CardCategory>{value.category}</CardCategory>
                                        <CardSubTitle>{value.description}</CardSubTitle>
                                        <CardPrice>${value.price}</CardPrice>
                                    </div>
                                )
                            }
                        }
                    )
                ) : (
                    <p>Loading products...</p>
                )}


            </GridCardsContainer>
        </ShopProductsContainer>
    )
}