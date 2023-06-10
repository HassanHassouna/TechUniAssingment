import {FC} from "react";
import {
    HeroSectionContainer,
    HeroSectionBtn,
    HeroSectionImg,
    HeroSectionDesc,
    HeroSectionImgWrapper,
    HeroSectionSubtitle,
    HeroSectionTitle,
    HeroSectionImgAb
} from "./sections.styled";
import {Link} from "react-router-dom"
import Vector from '../assets/vector.png'

export const Hero: FC = () => {
    return (
        <HeroSectionContainer>
            <HeroSectionDesc>
                <HeroSectionTitle>Sort out Your
                    Spring Look</HeroSectionTitle>
                <HeroSectionSubtitle>We will help to develop every smallest thing into a big one for your
                    company.</HeroSectionSubtitle>
                <HeroSectionBtn>
                    <Link style={{
                        textDecoration: 'none',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        width: '100%'
                    }} to="/shop">
                        <span>Shop</span>
                        <img src={Vector} alt="vector"/>
                    </Link>
                </HeroSectionBtn>
            </HeroSectionDesc>
            <HeroSectionImgWrapper>
                <HeroSectionImg/>
                <HeroSectionImgAb/>
            </HeroSectionImgWrapper>
        </HeroSectionContainer>
    )
}