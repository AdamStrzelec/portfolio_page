import React, { useContext } from 'react';
import styled from 'styled-components';
import { NavContext } from '../../Navigation';
import { colors } from '../../../../colors';
import { sizes } from '../../../../screenSizes';

const Button = styled.button`
    width: 36px;
    height: 35px;
    position: relative;
    cursor: pointer;
    outline: none;
    border: none;
    background-color: transparent;
    border-radius: 5px;
    background-color: black;
    border: 2px solid ${colors.primary};
    @media(min-width: ${sizes.tablet}){

        border: none;
        background-color: transparent;
    }
`
const MenuCloseLine = styled.span`
    position: absolute;
    top: ${props => props.number * 7 + 'px'};
    left: 7px;
    @media(min-width: ${sizes.tablet}){
        background-color: ${props => props.isDarkModeOpen ? colors.primary : colors.background_secondary};
    }
    width: 19px;
    height: 3px;
    background-color: ${colors.primary};
    border-radius: 3px;
    ${props => props.isNavMenuOpen ? 'transform: scaleX(0)' : 'transform: scaleX(1)'};
    transform-origin: left;
    transition-property: transform;
    transition-duration: ${props => '0.'+props.number+'s'};
    transition-timing-function: ease-in-out;
    ${props => !props.isNavMenuOpen && 'transition-delay: 0.3s'};
`
const MenuOpenLine = styled.span`
    position: absolute;
    @media(min-width: ${sizes.tablet}){
        background-color: ${props => props.isDarkModeOpen ? colors.primary : colors.background_secondary};
    }
    transition-property: transform;
    width: 24px;
    height: 3px;
    background-color: ${colors.primary};
    border-radius: 3px;
`
const MenuOpenLineOne = styled(MenuOpenLine)`
    top: 22px;
    left: 1px;
    transform: rotate(45deg);
    ${props =>
        !props.isNavMenuOpen ? 'transform: rotate(45deg) scaleX(0);' : 'transform: rotate(45deg) scaleX(1);' 
    }
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
    transform-origin: right;
    ${props => props.isNavMenuOpen && 'transition-delay: 0.1s'};
`
const MenuOpenLineTwo = styled(MenuOpenLine)`
    top: 5px;
    left: 1px;
    transform: rotate(-45deg);
    ${props =>
        !props.isNavMenuOpen ? 'transform: rotate(-45deg) scaleX(0);' : 'transform: rotate(-45deg) scaleX(1);' 
    }
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
    transform-origin: right;
    ${props => props.isNavMenuOpen && 'transition-delay: 0.2s'};
`

const MenuButton = () => {
    const { isNavMenuOpen, changeMenuVisibility, isDarkModeOpen } = useContext(NavContext);
    return(
        <Button onClick={changeMenuVisibility}>
            <MenuCloseLine number={1} isNavMenuOpen={isNavMenuOpen} isDarkModeOpen={isDarkModeOpen}/>
            <MenuCloseLine number={2} isNavMenuOpen={isNavMenuOpen} isDarkModeOpen={isDarkModeOpen}/>
            <MenuCloseLine number={3} isNavMenuOpen={isNavMenuOpen} isDarkModeOpen={isDarkModeOpen}/>

            <MenuOpenLineOne isNavMenuOpen={isNavMenuOpen} isDarkModeOpen={isDarkModeOpen}/>
            <MenuOpenLineTwo isNavMenuOpen={isNavMenuOpen} isDarkModeOpen={isDarkModeOpen}/>
        </Button>
    )
}

export default MenuButton;