import React, { useContext } from 'react';
import styled from 'styled-components';
import { NavContext } from '../../Navigation';
import { colors } from '../../../../colors';

const Button = styled.button`
    width: 36px;
    height: 35px;
    position: relative;
    cursor: pointer;
    border-radius: 50%;
    outline: none;
    background-color: black;
    border: 2px solid ${colors.primary};
`
const MenuCloseLine = styled.span`
    position: absolute;
    top: ${props => props.number * 7 + 'px'};
    left: 7px;
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
    const { isNavMenuOpen, changeMenuVisibility } = useContext(NavContext);
    return(
        <Button onClick={changeMenuVisibility}>
            <MenuCloseLine number={1} isNavMenuOpen={isNavMenuOpen}/>
            <MenuCloseLine number={2} isNavMenuOpen={isNavMenuOpen}/>
            <MenuCloseLine number={3} isNavMenuOpen={isNavMenuOpen}/>

            <MenuOpenLineOne isNavMenuOpen={isNavMenuOpen}/>
            <MenuOpenLineTwo isNavMenuOpen={isNavMenuOpen}/>
        </Button>
    )
}

export default MenuButton;