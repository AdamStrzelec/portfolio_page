import { useState, useEffect } from 'react';
import { useQuery } from "graphql-hooks";

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

const Technologies = ({ render }) => {

    const [isLoading, setLoading] = useState(true);
    const [isError, setError] = useState(false);
    const [technologiesArray, setTechnologiesArray] = useState([]);

    const { loading, error, data } = useQuery(TECHNOLOGIES_QUERY);

    useEffect(()=>{
      setLoading(loading);
      if(error){
          setError(true);
      }
      if(!loading){
        setTechnologiesArray(data.allTechnologies);
      }
    })

    const renderProps = {
        isLoading,
        isError,
        technologiesArray
    }

    return render(renderProps)
}

export default Technologies;
