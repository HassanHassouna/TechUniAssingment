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
                    <span>Shop</span>
                    <img src={Vector} alt="vector"/>
                </HeroSectionBtn>
            </HeroSectionDesc>
            <HeroSectionImgWrapper>
                <HeroSectionImg/>
                {/*<HeroSectionImgAb/>*/}
            </HeroSectionImgWrapper>
        </HeroSectionContainer>
    )
}