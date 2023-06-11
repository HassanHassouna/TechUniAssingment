import {FC} from "react";
import {
    DiscountBox,
    DiscountBoxButton,
    DiscountBoxSubTitle,
    DiscountBoxTitle,
    DiscountSectionContainer
} from './sections.styled'


interface IProps {
    padding?: string;
}

export const Discount: FC<IProps> = ({padding}) => {
    return (
        <DiscountSectionContainer property={padding}>
            <DiscountBox>
                <DiscountBoxSubTitle>March Discount</DiscountBoxSubTitle>
                <DiscountBoxTitle>Up to 70% Off</DiscountBoxTitle>
                <DiscountBoxButton>Got it</DiscountBoxButton>
            </DiscountBox>
        </DiscountSectionContainer>
    )
}