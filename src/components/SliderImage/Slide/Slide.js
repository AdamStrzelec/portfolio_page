import React from 'react';
import { colors } from '../../../Colors';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 300px;
    height: 100%;
    position: absolute;
    top: 0;
    left: calc(50% - 150px);
    transition: all 0.5s ease-in-out;
    opacity: 1;
    ${props => props.slidePosition===1 && 'transform: translateX(88%) scale(0.6); opacity: 0.5'};
    ${props => props.slidePosition===2 && 'transform: translateX(150%) scale(0.4); opacity: 0.3'};
    ${props => props.slidePosition>2 && 'transition: all 0.1s ease-in-out; transform: translateX(300%) scale(0.5); opacity: 0'};
    ${props => props.slidePosition===-1 && 'transform: translateX(-88%) scale(0.6); opacity: 0.5'};
    ${props => props.slidePosition===-2 && 'transform: translateX(-150%) scale(0.4); opacity: 0.3'};
    ${props => props.slidePosition<-2 && 'transition: all 0.1s ease-in-out; transform: translateX(-300%) scale(0.5); opacity: 0'};
`
const Name = styled.p`
    color: ${colors.primary};
    margin: 0;
    font-family: 'Black Ops One', cursive;
    font-size: 2.5rem;
    text-align: center;
    transform: ${props => props.slidePosition!==0 ? 'translateY(50px); opacity: 0' : 'translateY(0); opacity: 1'};
    transition: all 0.5s ease-in-out;
`
const Image = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 85%;
    background-image: url(${props => props.imageUrl});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`

const Slide = ({ imageUrl, technologyName, slidePosition }) => {

    return(
        <Wrapper slidePosition={slidePosition}>
            <Name slidePosition={slidePosition}>{technologyName}</Name>
            <Image imageUrl={imageUrl}/>
        </Wrapper>
    )
}

export default Slide;