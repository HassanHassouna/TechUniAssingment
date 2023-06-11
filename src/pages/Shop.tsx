import {FC, useState} from "react";
import {ShopHero} from "../sections/ShopHero";
import {CategoriesShop} from "../components/Categories/Categories";
import {Discount} from "../sections/Discount";
import {Recommended} from "../sections/Recommended";
import {IProduct} from "../api/Products/types";

interface IProps {
    setProductId: (productId: string) => void;
}

export const Shop: FC<IProps> = ({
                                     setProductId,
                                 }) => {
    const [categories, setCategories] = useState<Array<string> | null>(null);
    const [products, setProducts] = useState<IProduct | null>(null);
    const [activeCategory, setActiveCategory] = useState<string | null>('all');
    const handleCategoryClick = (category: string) => {
        setActiveCategory(category === activeCategory ? null : category);
    };

    return (
        <div>
            <ShopHero/>
            <CategoriesShop activeCategory={activeCategory} categories={categories} setCategories={setCategories}
                            products={products} setProducts={setProducts}
                            handleCategoryClick={handleCategoryClick} setProductId={setProductId}/>
            <Discount/>
            <Recommended/>
        </div>
    )
}