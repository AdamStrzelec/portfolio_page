import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors } from '../../../colors/colors';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`
const TechnologyNameParagraph = styled.p`
    font-family: 'Black Ops One', cursive;
    font-size: 1.4rem;
    color: ${colors.tertiary};
    margin-left: 6px;
    margin-right: 6px;

`

const ProjectTechnologies = ({ technologies }) => (
    <Wrapper>
        {technologies.map(item => 
            <TechnologyNameParagraph key={item.name}>{item.name}</TechnologyNameParagraph>    
        )}
    </Wrapper>
)

ProjectTechnologies.propTypes = {
    technologies: PropTypes.array
}

export default ProjectTechnologies;