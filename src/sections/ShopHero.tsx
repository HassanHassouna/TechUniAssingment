import {FC} from "react";
import {
    ShopHeroContainer,
    ShopHeroWrapper,
    ShopHeroImage,
    ShopHeroSubtitle,
    ShopHeroText,
    ShopHeroTitle
} from "./sections.styled";

export const ShopHero: FC = () => {
    return (
        <ShopHeroContainer>
            <ShopHeroWrapper>
                <ShopHeroText>
                    <ShopHeroSubtitle>{`Home > Shop`}</ShopHeroSubtitle>
                    <ShopHeroTitle>Shop</ShopHeroTitle>
                </ShopHeroText>
            </ShopHeroWrapper>
            <ShopHeroImage/>
        </ShopHeroContainer>
    )
}