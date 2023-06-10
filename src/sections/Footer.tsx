import {FC} from "react";
import {
    FooterContainer,
    FooterContact,
    FooterContactText,
    FooterContactWrapper,
    FooterSocialsContainer,
    FooterSocialsWrapper,
    FooterWrapper,
    FooterLogo, FooterContactWrapperTitle
} from './sections.styled'
import {socialLinks} from '../components/Navbar/navbar.consts'
import Logo from '../assets/logo.png'
import {Link} from "react-router-dom";
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

export const Footer: FC = () => {

    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterContactWrapper>
                    <FooterLogo src={Logo}/>
                    <FooterContactText>
                        OurStudio is a digital agency UI / UX Design and Website Development located in Ohio, United
                        States of America
                    </FooterContactText>
                    <FooterContactText>
                        Copyright Tanah Air Studio
                    </FooterContactText>
                </FooterContactWrapper>
                <FooterSocialsWrapper>
                    <FooterSocialsContainer>
                        <FooterContactText>Our Social Media</FooterContactText>
                        {socialLinks.map(({name, link}, index) => (
                            <FooterContactText key={index}>
                                <Link style={{
                                    textDecoration: 'none',
                                    color: 'white'
                                }} target={'_blank'} to={link}>{name}</Link>
                            </FooterContactText>
                        ))}
                    </FooterSocialsContainer>
                    <FooterContact>
                        <FooterContactText>Contact</FooterContactText>
                        <FooterContactWrapperTitle>
                            <RoomOutlinedIcon/> 8819 Ohio St. South Gate,
                            California 90280
                        </FooterContactWrapperTitle>
                        <FooterContactWrapperTitle>
                            <EmailOutlinedIcon/> ourstudio@hello.com
                        </FooterContactWrapperTitle>
                        <FooterContactWrapperTitle>
                            <LocalPhoneOutlinedIcon/> +271 386-647-3637
                        </FooterContactWrapperTitle>
                    </FooterContact>
                </FooterSocialsWrapper>
            </FooterWrapper>
        </FooterContainer>
    )
}