import {FC, useState} from "react";
import {ShopHero} from "../sections/ShopHero";
import {SideFilter} from "../components/Filter/SideFilter";
import {CategoriesShop} from "../components/Categories/Categories";
import '../App.css'
import {IProduct} from "../api/Products/types";
import {Recommended} from "../sections/Recommended";
import {Search} from "../components/Filter/Search";
import {SortBy} from "../components/Filter/SortBy";

interface IProps {
    productId?: string;
    setProductId: (productId: string) => void;
}

export const ShopWithFilter: FC<IProps> = ({productId, setProductId}) => {
    const [categories, setCategories] = useState<Array<string> | null>(null);
    const [products, setProducts] = useState<IProduct | null>(null);
    const [activeCategory, setActiveCategory] = useState<string | null>('all');
    const [sort, setSort] = useState<string>("");
    const [filterByPrice, setFilterByPrice] = useState<number[]>([5, 1000]);
    const [searchFilter, setSearchFilter] = useState<string>("");
    const handleCategoryClick = (category: string) => {
        setActiveCategory(category === activeCategory ? null : category);
    };

    const handleChange = (event: Event, newValue: number | number[]) => {
        setFilterByPrice(newValue as number[]);
    };
    return (
        <div>
            <ShopHero/>
            <div className='filter'>
                <SideFilter activeCategory={activeCategory} categories={categories} setCategories={setCategories}
                            setProducts={setProducts} handleCategoryClick={handleCategoryClick}
                            handleChange={handleChange} filterByPrice={filterByPrice}/>

                <div style={{
                    marginRight: "5rem"
                }}>
                    <Search setSearchFilter={setSearchFilter}/>
                    <SortBy setSort={setSort}/>
                    <CategoriesShop activeCategory={activeCategory} categories={categories}
                                    setCategories={setCategories}
                                    products={products} setProducts={setProducts}
                                    handleCategoryClick={handleCategoryClick} filterByPrice={filterByPrice}
                                    setProductId={setProductId} sort={sort} searchFilter={searchFilter}/>
                </div>
            </div>
            <Recommended/>
        </div>
    )
}