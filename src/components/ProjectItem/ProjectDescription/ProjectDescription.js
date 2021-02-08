import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Paragraph from '../../Paragraph/Paragraph';

const Wrapper = styled.div`
    margin: 0 15px;
`;

const ProjectDescription = ({ description }) => (
    <Wrapper>
        <Paragraph fontSize={'1.3rem'}>
            {description}
        </Paragraph>
    </Wrapper>
)

ProjectDescription.propTypes = {
    description: PropTypes.string
}

export default ProjectDescription;