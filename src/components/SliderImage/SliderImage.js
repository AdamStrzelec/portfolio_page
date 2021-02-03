import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useQuery } from "graphql-hooks";
import SlidesContainer from './SlidesContainer/SlidesContainer';

const TECHNOLOGIES_QUERY = `
{
    allTechnologies{
      technologyName,
      technologyImage{
        url
      }
    }
  }
`;

const Wrapper = styled.div`
    width: 100%;
    height: 50%;
    background-color: gray;
    position: absolute;
    left: 0;
    bottom: 100px;
`

const SliderImage = () => {

    const [technologiesArray, setTechnologiesArray] = useState([]);
    const [currentImageNumber, setCurrentImageNumber] = useState(0);
    const [isImageNumberDrawn, setImageNumberDrawn] = useState(false);

    const { loading, error, data } = useQuery(TECHNOLOGIES_QUERY);

    useEffect(()=>{
      if(!loading && !error){
        setTechnologiesArray(data.allTechnologies);
      }
      if(!isImageNumberDrawn && technologiesArray.length>0){
        setCurrentImageNumber(Math.floor(Math.random() * technologiesArray.length));
        setImageNumberDrawn(true);
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
          <button onClick={handleChangePrevPhoto}>prev</button>
          <button onClick={handleChangeNextPhoto}>next</button>
          {
            isImageNumberDrawn && 
            <SlidesContainer currentImageNumber={currentImageNumber} technologiesArray={technologiesArray}/>
          }
          
        </Wrapper> 
    )
}


export default SliderImage;