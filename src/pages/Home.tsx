import {FC} from "react";
import {Hero} from "../sections/Hero";
import {CategoriesShop} from "../sections/CategoriesShop";
import {NewArrival} from "../sections/NewArrival";
import {Discount} from "../sections/Discount";
import {BestSeller} from "../sections/BestSeller";
import {Testimonials} from "../sections/Testimonials";

export const Home: FC = () => {
    return (
        <div>
            <Hero/>
            <CategoriesShop/>
            <NewArrival/>
            <Discount/>
            <BestSeller/>
            <Testimonials/>
        </div>
    )
}