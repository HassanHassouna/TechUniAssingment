import {FC} from "react";
import {
    CategorySectionCard,
    CategorySectionContainer,
    CategoryCardButton,
    CategoryCardTitle,
    CategoryTextWrapper,
    CategoryCardSubTitle
} from './sections.styled'
import {Categories} from './sections.consts'

export const CategoriesShop: FC = () => {
    return (
        <CategorySectionContainer>
            {Categories.map(({title, subtitle, button}, index) => (
                <CategorySectionCard key={index}>
                    <CategoryTextWrapper>
                        <CategoryCardTitle>{title}</CategoryCardTitle>
                        <CategoryCardSubTitle>{subtitle}</CategoryCardSubTitle>
                        <CategoryCardButton>
                            <img src={button} alt={button}/>
                        </CategoryCardButton>
                    </CategoryTextWrapper>
                </CategorySectionCard>
            ))}
        </CategorySectionContainer>
    )
}