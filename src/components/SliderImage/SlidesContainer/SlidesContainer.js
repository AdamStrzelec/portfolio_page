import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Slide from '../Slide/Slide';
import { getRelativePositionOfIndex } from '../../../utils/getRelativePositionOfIndex';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: red;
    position: relative;
    overflow: hidden;

`

const SlidesContainer = ({ currentImageNumber, technologiesArray }) => {



    return(
        <Wrapper>

            {technologiesArray.map((item, index) =>
                <Slide
                    key={item.technologyName}
                    technologyName={item.technologyName}
                    imageNumber={index}
                    currentImageNumber={currentImageNumber}
                    arrayLength={technologiesArray.length}
                    slidePosition={getRelativePositionOfIndex(index, currentImageNumber, technologiesArray)}/>
            )}
        </Wrapper>
    )
}

export default SlidesContainer;