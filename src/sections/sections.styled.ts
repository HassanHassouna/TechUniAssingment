import styled from 'styled-components';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


export const HeroSectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 3rem;
  position: relative;
  margin-bottom: 5rem;
  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const HeroSectionDesc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 0 2rem;
  width: 100%;
  color: #fff;
  line-height: 1.4;
  font-weight: 600;
  @media screen and (max-width: 768px) {
    align-items: center;
  }
`;

export const HeroSectionTitle = styled.h1`
  font-size: clamp(1.5rem, 6vw, 4rem);
  margin-bottom: 1rem;
  text-align: left;
  color: black;
  letter-spacing: 3px;
  text-transform: uppercase;
  @media screen and (max-width: 768px) {
    font-size: clamp(1.5rem, 6vw, 2.5rem);
    text-align: center;
  }
`;

export const HeroSectionSubtitle = styled.p`
  margin-bottom: 2rem;
  width: 100%;
  color: #9A9AB0;
  text-align: start;
  @media screen and (max-width: 768px) {
    font-size: clamp(1rem, 3vw, 2rem);
  }
`;

export const HeroSectionBtn = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.4rem;
  align-self: start;
  min-width: 120px;
  height: 56px;
  border: none;
  background: #F86338;
  color: #fff;
  transition: 0.2s ease-out;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background: rgba(248, 99, 56, 0.62);
    transition: 0.2s ease-out;
  }

  @media screen and (max-width: 768px) {
    align-self: center;
  }
`;

export const HeroSectionImg = styled.div`
  width: 504px;
  background: #E2E2EA;
  @media screen and (max-width: 768px) {
    width: 0;
  }
`
export const HeroSectionImgAb = styled.div`
  position: absolute;
  width: 504px;
  background: #E2E2EA;
  top: 0;
  bottom: 0;
  overflow: hidden;
  right: -5%;
  @media screen and (max-width: 1440px) {
    right: -25%;
  }
  @media screen and (max-width: 1024px) {
    width: 0;
  }

`

export const HeroSectionImgWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 619px;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    height: 100%;
    display: none
  }
`

export const CategorySectionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  justify-items: center;
  padding: 0 5rem;
  align-items: center;
  margin-bottom: 5rem;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0rem;
  }

`

export const CategorySectionCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background: #E2E2EA;
  border-radius: 10px;
  height: 560px;
  width: 400px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }

  @media screen and (max-width: 768px) {
    width: 80vw;
  }
`

export const CategoryTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 2rem;
  padding: 2rem;
  width: 90%;
`
export const CategoryCardTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 1rem;
  text-align: left;
  font-family: 'Merriweather', serif;
  width: 100%;
  color: black;
`

export const CategoryCardSubTitle = styled.h2`
  font-size: 16px;
  margin-bottom: 1rem;
  font-family: "DM Sans", sans-serif;
  text-align: start;
  color: #9A9AB0;
`

export const CategoryCardButton = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.4rem;
  align-self: start;
  width: 40px;
  height: 40px;
  border: none;
  background: #F86338;
  border-radius: 28px;
`

export const NewArrivalSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 3rem;
  position: relative;
  margin-bottom: 5rem;
  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`


export const NewArrivalTitles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
export const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 1rem;
  text-align: left;
  align-self: flex-start;
  color: black;
  font-family: 'Merriweather', serif;
  @media screen and (max-width: 768px) {
    font-size: clamp(1.5rem, 6vw, 2.5rem);
    text-align: center;
  }
`

export const NewArrivalSellAll = styled.button`
  display: flex;
  align-items: center;
  font-size: 24px;
  border: none;
  color: #F86338;
  background: transparent;
  transition: 0.2s ease-out;
  border-radius: 10px;
  cursor: pointer;
`

export const CardsSlider = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-behavior: smooth;
  padding: 0 1rem;
  margin-bottom: 5rem;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
  }
`
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #E2E2EA;
  border-radius: 10px;
  height: 296px;
  width: 296px;
  padding: 30px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  margin-right: 1rem;

  @media screen and (max-width: 768px) {
    width: 80vw;
    margin-right: 1rem;

  }
`

export const CardTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 1rem;
  text-align: center;
  font-family: 'Merriweather', serif;
  width: 100%;
  color: black;
`

export const CardSubTitle = styled.h2`
  font-size: 12px;
  margin-bottom: 1rem;
  font-family: "DM Sans", sans-serif;
  text-align: center;
  color: #9A9AB0;
`

export const CardCategory = styled.h2`
  font-size: 14px;
  margin-bottom: 1rem;
  font-family: "DM Sans", sans-serif;
  text-align: center;
  color: #9A9AB0;
`

export const CardPrice = styled.h2`
  font-size: 24px;
  font-family: "Merriweather", sans-serif;
  margin-bottom: 1rem;
  text-align: center;
  color: #F3692E;
`


export const LikeButton = styled(FavoriteBorderIcon)`
  height: 100%;
  align-self: end;
  padding: 0.3rem;
  background: white;
  border-radius: 28px;
  cursor: pointer;
  transition: 0.2s ease-out;
  color: #F86338;

  &:hover {
    transform: scale(1.1);
    transition: 0.2s ease-out;
  }
`

export const DiscountSectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${props => props.property ? props.property : '0 5rem'};
  position: relative;
  margin-bottom: 5rem;
  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`

export const DiscountBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #F86338;
  width: 1232px;
  height: 496px;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`

export const DiscountBoxTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 1rem;
  text-align: center;
  font-family: 'Merriweather', serif;
  width: 100%;
  color: white;
  @media screen and (max-width: 768px) {
    font-size: clamp(1.5rem, 6vw, 2.5rem);
  }
`

export const DiscountBoxSubTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 1rem;
  font-family: "DM Sans", sans-serif;
  text-align: center;
  color: white;
  @media screen and (max-width: 768px) {
    font-size: clamp(1rem, 6vw, 1.5rem);
  }
`

export const DiscountBoxButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  border: none;
  color: #F86338;
  background: white;
  transition: 0.2s ease-out;
  border-radius: 10px;
  cursor: pointer;
  padding: 1rem 2rem;
  margin-top: 1rem;
`

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 5rem;
  position: relative;
  margin-bottom: 5rem;
  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`


export const TestimonialSectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5rem;
  position: relative;
  margin-bottom: 5rem;
  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`


export const TestimonialCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #FFEFEB;
  height: 312px;
  width: 816px;
  transition: all 0.2s ease-in-out;
  margin-right: 1rem;

  @media screen and (max-width: 768px) {
    width: 80vw;
  }

`

export const TestimonialCardPhoto = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #E2E2EA;
  object-fit: contain;
  top: 3rem;
  position: relative;
`


export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #F86338;
  height: 476px;
  width: 100%;
  margin-top: 5rem;
`

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 5rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0 1rem;
  }
`

export const FooterLogo = styled.img`
  object-fit: contain;
  margin-right: 1rem;
  filter: invert(100%);
`


export const FooterSocialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const FooterSocialsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const FooterContact = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const FooterContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 30%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const FooterContactText = styled.p`
  color: white;
  transition: 0.2s ease-out;
  text-align: left;
  width: 100%;

`

export const FooterContactWrapperTitle = styled.div`
  display: flex;
  color: white;
  align-items: center;
  width: 100%;
`


export const ShopHeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 5rem;
  @media screen and (max-width: 768px) {
    height: 100%;
  }
`

export const ShopHeroWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 5rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`


export const ShopHeroText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const ShopHeroTitle = styled.h1`
  font-size: clamp(2rem, 6vw, 3rem);
  margin-bottom: 1rem;
  text-align: start;
  width: 100%;
  @media screen and (max-width: 768px) {
    font-size: clamp(1.5rem, 6vw, 2rem);
  }
`

export const ShopHeroSubtitle = styled.p`
  font-size: clamp(1rem, 6vw, 1.5rem);
  margin-bottom: 1rem;
  font-family: 'Montserrat', sans-serif;
  width: 100%;
  text-align: start;
  @media screen and (max-width: 768px) {
    font-size: clamp(0.8rem, 6vw, 1rem);
  }
`

export const ShopHeroImage = styled.div`
  width: 100%;
  height: 400px;
  background: #E2E2EA;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`


export const ShopProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0 5rem;
  margin-bottom: 5rem;
  @media screen and (max-width: 768px) {
    height: 100%;
  }
`

export const ShopProductsCategories = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #9A9AB0;
  width: 100%;
  @media screen and (max-width: 768px) {
    width: 90vw;
  }
`


export const GridCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`


export const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.2s ease-out;

  &.active {
    color: #F86338;
    transition: 0.2s ease-out;
  }

  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;


export const SideFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  width: 20%;
  padding: 0 5rem;
  margin-bottom: 5rem;
  @media screen and (max-width: 768px) {
    height: 100%;
  }
`


export const SideFilterTitle = styled.h1`
  display: flex;
  flex-direction: column;
  text-align: start;
  width: 100%;
  height: fit-content;
  margin: 0;
`

export const SideFilterColorTitle = styled.h1`
  display: flex;
  flex-direction: column;
  text-align: start;
  width: 60%;
  height: fit-content;
  margin: 0;

`


export const SideFilterColor = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${props => props.color};
  cursor: pointer;

`

export const ProductDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin: 0 5rem;
  margin-bottom: 5rem;
  @media screen and (max-width: 768px) {
    height: 100%;
  }
`

export const ProductImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  position: relative;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const ProductImage = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  object-fit: contain;
  margin-bottom: 1rem;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const ProductImages = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #E2E2EA;
  width: 100px;
  height: 100px;
  margin-bottom: 1rem;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 50%;
  padding: 0 5rem;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const ProductDetailsAvailability = styled.h4`
  font-size: clamp(0.8rem, 6vw, 1rem);
  margin-bottom: 1rem;
  font-family: 'Montserrat', sans-serif;
  width: 100%;
  text-align: start;
  @media screen and (max-width: 768px) {
    font-size: clamp(0.8rem, 6vw, 1rem);
  }
`

export const ProductDetailsSub = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  margin-bottom: 1rem;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`