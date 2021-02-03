import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 300px;
    height: 100%;
    background-color: orange;
    position: absolute;
    top: 0;
    left: calc(50% - 150px);
    transition: all 0.5s ease-in-out ;
    /* transition: ; */
    opacity: 1;
    ${props => props.slidePosition===1 && 'transform: translateX(90%) scale(0.7); opacity: 0.8'};
    ${props => props.slidePosition===2 && 'transform: translateX(150%) scale(0.5); opacity: 0.6'};
    ${props => props.slidePosition>2 && 'transform: translateX(300%) scale(0.5); opacity: 0'};
    ${props => props.slidePosition===-1 && 'transform: translateX(-90%) scale(0.7); opacity: 0.8'};
    ${props => props.slidePosition===-2 && 'transform: translateX(-150%) scale(0.5); opacity: 0.6'};
    ${props => props.slidePosition<-2 && 'transform: translateX(-300%) scale(0.5); opacity: 0'};

`

const Slide = ({ imageUrl, technologyName, imageNumber, currentImageNumber, arrayLength, slidePosition }) => {

    const [currentPosition, setCurrentPosition] = useState('');

    useEffect(()=>{


    })

    return(
        <Wrapper slidePosition={slidePosition}>
            {console.log(slidePosition + " " + technologyName)}
            <p>{technologyName}</p>
            <p>{imageNumber}</p>
        </Wrapper>
    )
}

export default Slide;