import {FC} from "react";
import {
    DiscountBox,
    DiscountBoxButton,
    DiscountBoxSubTitle,
    DiscountBoxTitle,
    DiscountSectionContainer
} from './sections.styled'

export const Discount: FC = () => {
    return (
        <DiscountSectionContainer>
            <DiscountBox>
                <DiscountBoxSubTitle>March Discount</DiscountBoxSubTitle>
                <DiscountBoxTitle>Up to 70% Off</DiscountBoxTitle>
                <DiscountBoxButton>Got it</DiscountBoxButton>
            </DiscountBox>
        </DiscountSectionContainer>
    )
}