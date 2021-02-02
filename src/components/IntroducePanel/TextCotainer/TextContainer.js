import React from 'react';
import styled, { keyframes } from 'styled-components';
import { colors } from '../../../Colors';

const Wrapper = styled.div`
    width: 200px;
    height: 100px;
    position: absolute;
    top: 0;
    right: 100px;
    overflow: hidden;
`
const appearTextContainer = keyframes`
    100%{
        transform: translateX(-100%);
        opacity: 1;
    }
`
const Container = styled.div`
    width: 200px;
    height: 100px;
    position: absolute;
    top: 0;
    left: 100%;
    animation: ${appearTextContainer} 1.5s 0.5s forwards;
    opacity: 0;
`
const moveHeader = keyframes`
    to{
        transform: translateY(-10px);
    }
`
const HeaderText = styled.p`
    font-size: 2rem;
    font-family: 'Black Ops One', cursive;
    color: ${colors.primary};
    margin: 0;
    position: absolute;
    top: calc(50% - 13px);
    left: 36px;
    animation: ${moveHeader} 1s 2s forwards;
`
const moveSubheader = keyframes`
    40%{
        opacity: 0;
    }
    100% {
        opacity: 1;
        transform: translateY(10px);
    }
`
const SubheaderText = styled.p`
    font-size: 1.5rem;
    font-family: 'Black Ops One', cursive;
    color: ${colors.secondary};
    margin: 0;
    position: absolute;
    top: calc(50% - 10px);
    left: 35px;
    opacity: 0;
    animation: ${moveSubheader} 1s 2s forwards;
`

const TextContainer = () => (
    <Wrapper>
        <Container>
            <HeaderText>Adam Strzelec</HeaderText>
            <SubheaderText>Frontend developer</SubheaderText>
        </Container>
    </Wrapper>
)

export default TextContainer;