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


interface IProps {
    title?: string;
    subtitle?: string;

}

export const ShopHero: FC<IProps> = ({title, subtitle}) => {
    return (
        <ShopHeroContainer>
            <ShopHeroWrapper>
                <ShopHeroText>

                    {
                        title && subtitle ?
                            <ShopHeroSubtitle>{`Home > Shop > ${title} > ${subtitle}`}</ShopHeroSubtitle>
                            :
                            <ShopHeroSubtitle>{`Home > Shop`}</ShopHeroSubtitle>
                    }
                    {
                        title ?
                            <ShopHeroTitle>{subtitle}</ShopHeroTitle>
                            :
                            <ShopHeroTitle>Shop</ShopHeroTitle>
                    }
                    {
                        window.location.pathname.includes('filter') ? '' :
                            window.location.pathname.includes('detail') ? ''
                                :
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