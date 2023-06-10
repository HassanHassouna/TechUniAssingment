import {FC, useState} from "react";
import {ShopHero} from "../sections/ShopHero";
import {CategoriesShop} from "../sections/Categories";
import {Discount} from "../sections/Discount";
import {Recommended} from "../sections/Recommended";
import {IProduct} from "../api/Products/types";

export const Shop: FC = () => {
    const [categories, setCategories] = useState<Array<string> | null>(null);
    const [products, setProducts] = useState<IProduct | null>(null);
    const [activeCategory, setActiveCategory] = useState<string | null>('all');
    const [colors, setColors] = useState<Array<string> | null>(null);
    const handleCategoryClick = (category: string) => {
        setActiveCategory(category === activeCategory ? null : category);
    };
    
    return (
        <div>
            <ShopHero/>
            <CategoriesShop activeCategory={activeCategory} categories={categories} setCategories={setCategories}
                            products={products} setProducts={setProducts}
                            handleCategoryClick={handleCategoryClick}/>
            <Discount/>
            <Recommended/>
        </div>
    )
}