import React from 'react';
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


const SliderImage = () => {

    const { loading, error, data } = useQuery(TECHNOLOGIES_QUERY);

    return(
        <div>
          {
            (!loading && !error) &&
            <SlidesContainer currentImageNumber={0} technologiesArray={data.allTechnologies}/> 
          } 
        </div> 
    )
}


export default SliderImage;