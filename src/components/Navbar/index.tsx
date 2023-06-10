import React, {FC, useState} from 'react'
import {
    NavbarSubContainer,
    NavbarContainer,
    NavbarCallCenter,
    NavbarCallCenterIcon,
    NavbarIconsContainer,
    NavbarIcons,
    NavbarLogo,
    NavbarMenu,
    NavbarMenuItem,
    NavbarSocmedIcon,
    NavbarSocmed, NavbarMenuIcon, NavbarMenuListMobile, NavbarMenuListItemMobile,
} from './navbar.styled'
import {iconsItems, menuItems, socialLinks} from './navbar.consts'
import {useNavigate} from "react-router-dom";
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import Logo from '../../assets/logo.png'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export const Navbar: FC = () => {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <NavbarContainer>
            <NavbarSubContainer>
                <NavbarCallCenter>
                    <NavbarCallCenterIcon>
                        <LocalPhoneOutlinedIcon/>
                    </NavbarCallCenterIcon>
                    <span>+022 319 821 967</span>
                </NavbarCallCenter>
                <NavbarLogo src={Logo} onClick={() => navigate('/')}/>
                <NavbarSocmed>
                    {socialLinks.map(({title, link}, index) => (
                        <NavbarSocmedIcon key={index} onClick={() => navigate(`${link}`)}>
                            {title}
                        </NavbarSocmedIcon>
                    ))}
                </NavbarSocmed>
            </NavbarSubContainer>
            <NavbarSubContainer>
                <NavbarMenu>
                    {menuItems.map(({title, link}, index) => (
                        <NavbarMenuItem key={index} onClick={() => navigate(`${link}`)}>
                            {title}
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
                <NavbarIconsContainer>
                    {iconsItems.map(({title, link, Icon}, index) => (
                        <NavbarIcons key={index} onClick={() => navigate(`${link}`)}>
                            <Icon/>
                        </NavbarIcons>
                    ))}
                </NavbarIconsContainer>
            </NavbarSubContainer>
            <NavbarMenuIcon onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <CloseIcon/> : <MenuIcon/>}
            </NavbarMenuIcon>
            <NavbarMenuListMobile isOpen={isOpen}>
                {menuItems.map(({title, link}, index) => (
                    <NavbarMenuListItemMobile key={index} onClick={() => navigate(`${link}`)}>
                        {title}
                    </NavbarMenuListItemMobile>
                ))}
            </NavbarMenuListMobile>
        </NavbarContainer>
    )
}