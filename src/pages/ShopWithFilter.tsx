import {FC, useState} from "react";
import {ShopHero} from "../sections/ShopHero";
import {SideFilter} from "../sections/SideFilter";
import {CategoriesShop} from "../sections/Categories";
import '../App.css'
import {IProduct} from "../api/Products/types";
import {Recommended} from "../sections/Recommended";

export const ShopWithFilter: FC = () => {
    const [categories, setCategories] = useState<Array<string> | null>(null);
    const [products, setProducts] = useState<IProduct | null>(null);
    const [activeCategory, setActiveCategory] = useState<string | null>('all');
    const [filterByPrice, setFilterByPrice] = useState<number[]>([20, 200]);
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

                <CategoriesShop activeCategory={activeCategory} categories={categories} setCategories={setCategories}
                                products={products} setProducts={setProducts}
                                handleCategoryClick={handleCategoryClick} filterByPrice={filterByPrice}/>
            </div>
            <Recommended/>
        </div>
    )
}