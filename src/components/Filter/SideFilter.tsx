import {FC, useEffect} from "react";
import {
    CategoryContainer,
    GridCardsContainer,
    SideFilterColor, SideFilterColorTitle,
    SideFilterContainer,
    SideFilterTitle
} from "../../sections/sections.styled";
import Slider from '@mui/material/Slider';
import {getAllCategories, getProductBySpecificCategory} from "../../api";
import {IProduct} from "../../api/Products/types";
import {Discount} from "../../sections/Discount";
import {Colors} from '../../sections/sections.consts'

interface IProps {
    activeCategory: string | null;
    categories: Array<string> | null;
    setCategories: (categories: Array<string>) => void;
    setProducts: (products: IProduct) => void;
    handleCategoryClick: (category: string) => void;
    handleChange: (event: Event, newValue: number | number[]) => void;
    filterByPrice: number[];
}

export const SideFilter: FC<IProps> = ({
                                           activeCategory,
                                           categories,
                                           setCategories,
                                           setProducts,
                                           handleCategoryClick,
                                           handleChange,
                                           filterByPrice
                                       }) => {

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categories = await getAllCategories();
                setCategories(categories);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };
        fetchCategories()
    }, []);


    return (
        <SideFilterContainer>
            <SideFilterTitle>
                <h3 style={{
                    margin: '0',
                    marginBottom: '1rem'
                }}>Price</h3>
                <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={filterByPrice}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    min={5}
                    max={1000}
                />
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '-2rem'
                }}>
                    <h6>Range</h6>
                    <h6>$5-$1000</h6>
                </div>
            </SideFilterTitle>
            <SideFilterColorTitle>
                <h3>Colors</h3>
                <GridCardsContainer>

                    {Colors.map((value, index) => {
                            return (
                                <SideFilterColor key={index} color={value.color}/>
                            )
                        }
                    )}
                </GridCardsContainer>
            </SideFilterColorTitle>
            <SideFilterTitle>
                <h3>Categories</h3>
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
                                <h6>{value}</h6>
                            </CategoryContainer>
                        )
                    })
                ) : (
                    <p>Loading categories...</p>
                )}
                <Discount padding={'0'}/>
            </SideFilterTitle>
        </SideFilterContainer>
    )
}