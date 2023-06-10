import {FC} from "react";
import {Recomnded4U} from './sections.consts'
import {
    Card,
    CardPrice,
    CardsSlider,
    CardTitle, GridCardsContainer,
    SectionContainer,
    Title
} from "./sections.styled";

export const Recommended: FC = () => {
    return (
        <SectionContainer>
            <Title>Recommended for you</Title>
            <GridCardsContainer>
                {Recomnded4U.map(({title, price}, index) => (
                    <div key={index}>
                        <Card/>
                        <CardTitle>{title}</CardTitle>
                        <CardPrice>{price}</CardPrice>
                    </div>
                ))}
            </GridCardsContainer>
        </SectionContainer>
    )
}