import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ProjectItem from '../../ProjectItem/ProjectItem';

const Wrapper = styled.div`
    text-align: center;
`
const ProjectWrapper = styled.div`
    display: inline-block;
`

const ProjectsContainer = ({ projects }) => (
    <Wrapper>
        {projects.map((item, index) =>
            <ProjectWrapper key={index}>
                <ProjectItem project={item}/>
            </ProjectWrapper>       
        )}
    </Wrapper>
)

ProjectsContainer.propTypes = {
    projects: PropTypes.array
}

export default ProjectsContainer;