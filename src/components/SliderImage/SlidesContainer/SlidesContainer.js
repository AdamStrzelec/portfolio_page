import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Slide from '../Slide/Slide';
import Button from '../SetImageButton/SetImageButton';
import { getRelativePositionOfIndex } from '../../../utils/getRelativePositionOfIndex';

const Wrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    height: 45vh;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 100px;
    overflow: hidden;
`
const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
`

const SlidesContainer = ({ technologiesArray }) => {

    const [currentImageNumber, setCurrentImageNumber] = useState(0);
    const [isImageNumberDrawn, setImageNumberDrawn] = useState(false);

    useEffect(()=>{
        if(!isImageNumberDrawn && technologiesArray.length>0){
            setCurrentImageNumber(Math.floor(Math.random() * technologiesArray.length));
            setImageNumberDrawn(true);
        }
        const nextPhotoIntervalId = setInterval(()=>{   
            handleChangeNextPhoto();
        }, 4000);

        return () => {
            clearInterval(nextPhotoIntervalId);
        }
    })

    const handleChangeNextPhoto = () => {
        if(currentImageNumber+1 >= technologiesArray.length){
            setCurrentImageNumber(0);
        }
        else{
        setCurrentImageNumber(currentImageNumber+1);
        }
    }

    const handleChangePrevPhoto = () => {
      if(currentImageNumber-1 < 0){
        setCurrentImageNumber(technologiesArray.length-1);
      }
      else{
        setCurrentImageNumber(currentImageNumber-1);
      }
    }

    return(
        <Wrapper>
            {isImageNumberDrawn && technologiesArray.map((item, index) =>
                <Slide
                    key={item.technologyName}
                    technologyName={item.technologyName}
                    imageUrl={item.technologyImage.url}
                    slidePosition={getRelativePositionOfIndex(index, currentImageNumber, technologiesArray)}/>
            )}
            <ButtonsWrapper>
                <Button onClick={handleChangePrevPhoto} prev/>
                <Button onClick={handleChangeNextPhoto} />
            </ButtonsWrapper>
        </Wrapper>
    )
}

export default SlidesContainer;