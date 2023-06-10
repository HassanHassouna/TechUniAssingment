import {FC} from "react";
import {BestSellerData} from './sections.consts'
import {
    CardCategory,
    Title,
    CardPrice,
    CardSubTitle,
    Card,
    CardTitle,
    LikeButton,
    BestSellerSectionContainer,
    CardsSlider
} from "./sections.styled";

export const BestSeller: FC = () => {
    return (
        <BestSellerSectionContainer>
            <Title>Best Seller</Title>
            <CardsSlider>
                {BestSellerData.map(({title, subtitle, price, category}, index) => (
                    <div key={index}>
                        <Card>
                            <LikeButton/>
                        </Card>
                        <CardCategory>{category}</CardCategory>
                        <CardTitle>{title}</CardTitle>
                        <CardSubTitle>{subtitle}</CardSubTitle>
                        <CardPrice>{price}</CardPrice>
                    </div>
                ))}
            </CardsSlider>
        </BestSellerSectionContainer>
    )
}