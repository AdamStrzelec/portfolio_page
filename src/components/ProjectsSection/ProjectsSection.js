import React from 'react';
import { useQuery } from "graphql-hooks";
import ProjectsContainer from './ProjectsContainer/ProjectsContainer';

const PROJECTS_QUERY = `
{
    allProjects{
        projectname,
        projecturl{
            url
        },
        usedtechnologies{
            name
        }
        description,
        links{
            link,
            linkname,
            linktype
        }
    }
}
`;

const ProjectsSection = () => {

    const { loading, error, data } = useQuery(PROJECTS_QUERY);

    return(
        <>
        
        {(loading || error) ? null:
            <ProjectsContainer projects={data.allProjects}/>
        }
        </>
    )
}

export default ProjectsSection;