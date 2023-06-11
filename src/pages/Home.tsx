import {FC} from "react";
import {Hero} from "../sections/Hero";
import {CategoriesShop} from "../components/Categories/CategoriesShop";
import {NewArrival} from "../sections/NewArrival";
import {Discount} from "../sections/Discount";
import {BestSeller} from "../sections/BestSeller";
import {Testimonials} from "../sections/Testimonials";

interface IProps {
    setProductId: (productId: string) => void;
}

export const Home: FC<IProps> = ({setProductId}) => {
    return (
        <div>
            <Hero/>
            <CategoriesShop setProductId={setProductId}/>
            <NewArrival/>
            <Discount/>
            <BestSeller title='Best Seller'/>
            <Testimonials/>
        </div>
    )
}