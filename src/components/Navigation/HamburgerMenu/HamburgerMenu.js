import React from 'react';
import styled from 'styled-components';
import MenuButton from './MenuButton/MenuButton';
import { sizes } from '../../../screenSizes/sizes';

const Wrapper = styled.div`
    position: fixed;
    right: 10px;
    top: 10px;
    @media(min-width: ${sizes.tablet}){
        top: 7px;
        right: 3px;
    }

`
const ButtonWrapper = styled.div`
        border: 2px solid black;
        background-color: black;
        border-radius: 7px;
    @media(min-width: ${sizes.tablet}){
        border: none;
        background-color: transparent;
    }
    position: absolute;
    top: 0;
    right: 0px;
`

const HamburgerMenu = () => {

    return(
        <Wrapper>
            <ButtonWrapper>
                <MenuButton />
            </ButtonWrapper>
        </Wrapper>
    )
}

export default HamburgerMenu;