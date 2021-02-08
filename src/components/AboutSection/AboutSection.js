import React from 'react';
import { useQuery } from "graphql-hooks";
import Paragraph from '../Paragraph/Paragraph';

const AboutSection = () => {

    const ABOUT_QUERY = `
    {
        allAbouts{
        aboutcontent{
          paragraph
        }
      }
    }
    `;

    const { loading, error, data } = useQuery(ABOUT_QUERY);

    return(
        <div>
            {(loading || error) ? null : 
                    data.allAbouts[0].aboutcontent.map((item, index) => (
                    <Paragraph key={index}>
                        {item.paragraph}
                    </Paragraph>
                )
            )}
        </div>
    )
}

export default AboutSection;