import React from 'react';
import styled from 'styled-components';
import MenuButton from './MenuButton/MenuButton';
import ChangeModePanel from './ChangeModePanel/ChangeModePanel';

const Wrapper = styled.div`
    position: fixed;
    right: 20px;
    top: 20px;
`
const ButtonWrapper = styled.div`
    border: 2px solid black;
    background-color: black;
    border-radius: 50%;
    position: absolute;
    top: 0;
    right: -2px;
`
const PanelWrapper = styled.div`
    position: absolute;
    top: 4px;
    right: 0;
`

const HamburgerMenu = () => {

    return(
        <Wrapper>
            <PanelWrapper>
                <ChangeModePanel/>
            </PanelWrapper>
            <ButtonWrapper>
                <MenuButton />
            </ButtonWrapper>
        </Wrapper>
    )
}

export default HamburgerMenu;