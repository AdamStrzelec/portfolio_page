import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../../colors/colors';
import { sizes } from '../../../screenSizes/sizes';

const ContentWrapper = styled.div`
    @media(max-width: ${sizes.mobile}){
        padding: 40px 20px;
    }
    width: 100%;
    padding: 40px 40px;
    background-color: ${props => props.isDarkModeOpen ? '#636363' : '#F5F5F5'};
`
const Heading = styled.h1`
    font-family: 'Black Ops One', cursive;
    color: ${colors.secondary};
    margin: 15px 0;
    font-size: 2rem;

`

const SectionContent = ({ heading, children, isDarkModeOpen }) => (
    <ContentWrapper isDarkModeOpen={isDarkModeOpen}>
        {heading && <Heading>{heading}</Heading>}
        {children}
    </ContentWrapper>
)

SectionContent.propTypes = {
    heading: PropTypes.string,
    children: PropTypes.element.isRequired,
    isDarkModeOpen: PropTypes.bool
}

export default SectionContent;