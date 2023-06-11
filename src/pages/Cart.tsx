import {ShopHero} from "../sections/ShopHero";
import {CartDetails} from "../sections/CartDetails";
import {BestSeller} from "../sections/BestSeller";

export const Cart = () => {
    return (
        <div>
            <ShopHero subtitle='Shopping Bag'/>
            <CartDetails/>
            <BestSeller title={'Related Items'}/>
            
        </div>
    )
}