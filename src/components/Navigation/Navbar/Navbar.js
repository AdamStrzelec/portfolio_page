import React, { useContext } from 'react';
import styled from 'styled-components';
import { NavContext } from '../Navigation';
import Navlist from './NavList/NavList';
import { colors } from '../../../colors/colors';
import { sizes } from '../../../screenSizes/sizes';
import ChangeModePanel from '../ChangeModePanel/ChangeModePanel';

const Wrapper = styled.div`
    width: 200px;
    position: fixed;
    top: 0;
    right: 0;
    transform: translateX(100%);
    @media(min-width: ${sizes.tablet}){
        right: 45px;
    }
`
const NavBackground = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${props => props.isDarkModeOpen ? colors.background_primary : colors.primary};
    ${props => props.isNavMenuOpen ? 'transform: translateX(-100%)' : 'transform: translateX(0)'};
    transition: transform 0.3s ease-in-out;
    position: relative;
`
const ChangeModePanelWrapper = styled.div`
    @media(min-width: ${sizes.tablet}){
        display: none;
    }
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
`

const Navbar = () => {

    const { isNavMenuOpen, isDarkModeOpen, changeMenuVisibility } = useContext(NavContext);

    return(
        <Wrapper>
            <NavBackground isDarkModeOpen={isDarkModeOpen} isNavMenuOpen={isNavMenuOpen}>
                <ChangeModePanelWrapper>
                    <ChangeModePanel />
                </ChangeModePanelWrapper>
            </NavBackground>
            <Navlist isDarkModeOpen={isDarkModeOpen} isNavMenuOpen={isNavMenuOpen} changeMenuVisibility={changeMenuVisibility}/>
        </Wrapper>
    )
}

export default Navbar;