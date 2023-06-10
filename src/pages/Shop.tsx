import {FC} from "react";
import {ShopHero} from "../sections/ShopHero";
import {CategoriesShop} from "../sections/Categories";
import {Discount} from "../sections/Discount";
import {Recommended} from "../sections/Recommended";

export const Shop: FC = () => {
    return (
        <div>
            <ShopHero/>
            <CategoriesShop/>
            <Discount/>
            <Recommended/>
        </div>
    )
}