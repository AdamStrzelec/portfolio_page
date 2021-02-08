import React from 'react';
import { useQuery } from 'graphql-hooks';
import TechnologiesContainer from './TechnologiesContainer/TechnologiesContainer';

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

const TechnologiesSection = () => {

    const { loading, error, data } = useQuery(TECHNOLOGIES_QUERY);

    return(
        <>
        {
            (!loading && !error) &&
            <TechnologiesContainer technologies={data.allTechnologies} />
        } 
        </>
    )
}

export default TechnologiesSection;