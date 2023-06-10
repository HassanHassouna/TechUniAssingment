import {FC} from "react";
import {
    CardCategory,
    Title,
    CardPrice,
    CardsSlider,
    CardSubTitle,
    Card,
    CardTitle,
    NewArrivalSectionContainer,
    NewArrivalSellAll,
    NewArrivalTitles,
    LikeButton
} from './sections.styled'
import {NewArrivals} from './sections.consts'

export const NewArrival: FC = () => {
    return (
        <NewArrivalSectionContainer>
            <NewArrivalTitles>
                <Title>New Arrival</Title>
                <NewArrivalSellAll>Sell All</NewArrivalSellAll>
            </NewArrivalTitles>
            <CardsSlider>
                {NewArrivals.map(({title, subtitle, price, category}, index) => (
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
        </NewArrivalSectionContainer>
    )
}