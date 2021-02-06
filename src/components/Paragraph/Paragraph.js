import React from 'react';
import styled from 'styled-components';
import { colors } from '../../colors';
import { connect } from 'react-redux';

const StyledParagraph = styled.p`
    color: ${props => props.isDarkModeOpen ? colors.primary : colors.background_secondary};
`

const Paragraph = ({ children, isDarkModeOpen }) => 
    <StyledParagraph isDarkModeOpen={isDarkModeOpen}>
        { children }
    </StyledParagraph>

const mapStateToProps = ({ isDarkModeOpen }) => ({
    isDarkModeOpen
})

export default connect(mapStateToProps)(Paragraph);