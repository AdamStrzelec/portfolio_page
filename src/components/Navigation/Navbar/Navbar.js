import React, { useContext } from 'react';
import styled from 'styled-components';
import { NavContext } from '../Navigation';
import Navlist from './NavList/NavList';
import { colors } from '../../../Colors';

const Wrapper = styled.div`
    width: 200px;
    position: fixed;
    top: 0;
    left: 0;
    transform: translateX(-100%);
`
const NavBackground = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${props => props.isDarkModeOpen ? colors.background_primary : colors.primary};

    ${props => props.isNavMenuOpen ? 'transform: translateX(100%)' : 'transform: translateX(0)'};
    transition: transform 0.3s ease-in-out;
`

const Navbar = () => {

    const { isNavMenuOpen, isDarkModeOpen } = useContext(NavContext);

    return(
        <Wrapper>
            <NavBackground isDarkModeOpen={isDarkModeOpen} isNavMenuOpen={isNavMenuOpen}/>
            <Navlist isDarkModeOpen={isDarkModeOpen} isNavMenuOpen={isNavMenuOpen}/>
        </Wrapper>
    )
}

export default Navbar;