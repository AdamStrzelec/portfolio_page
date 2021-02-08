import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import TechnologyItem from '../../TechnologyItem/TechnologyItem';

const Wrapper = styled.div`
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
`

const TechnologiesContainer = ({ technologies }) => (
    <Wrapper>
        {technologies.map(item => 
            <TechnologyItem key={item.technologyName} technology={item}/>    
        )}
    </Wrapper>
)

TechnologiesContainer.propTypes = {
    technologies: PropTypes.arrayOf(PropTypes.object)
}

export default TechnologiesContainer;