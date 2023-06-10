import {FC} from "react";
import {
    ShopHeroContainer,
    ShopHeroWrapper,
    ShopHeroImage,
    ShopHeroSubtitle,
    ShopHeroText,
    ShopHeroTitle, HeroSectionBtn
} from "./sections.styled";
import {Link} from 'react-router-dom'
import Vector from "../assets/vector.png";

export const ShopHero: FC = () => {
    return (
        <ShopHeroContainer>
            <ShopHeroWrapper>
                <ShopHeroText>
                    <ShopHeroSubtitle>{`Home > Shop`}</ShopHeroSubtitle>
                    <ShopHeroTitle>Shop</ShopHeroTitle>
                    {
                        window.location.pathname.includes('filter') ? '' :
                            <HeroSectionBtn>
                                <Link style={{
                                    textDecoration: 'none',
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-around',
                                    width: '100%'
                                }} to="/shop/filter">
                                    <span>Shop with filters</span>
                                    <img src={Vector} alt="vector"/>
                                </Link>
                            </HeroSectionBtn>
                    }
                </ShopHeroText>
            </ShopHeroWrapper>
            <ShopHeroImage/>
        </ShopHeroContainer>
    )
}