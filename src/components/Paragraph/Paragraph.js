import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../colors/colors';
import { connect } from 'react-redux';

const StyledParagraph = styled.p`
    color: ${props => props.isDarkModeOpen ? colors.primary : colors.background_secondary};
    font-size: ${props => props.fontSize ? props.fontSize : '1.6rem'};
`

const Paragraph = ({ children, isDarkModeOpen, fontSize }) => 
    <StyledParagraph isDarkModeOpen={isDarkModeOpen} fontSize={fontSize}>
        { children }
    </StyledParagraph>

const mapStateToProps = ({ isDarkModeOpen }) => ({
    isDarkModeOpen
})

Paragraph.propTypes = {
    children: PropTypes.string,
    fontSize: PropTypes.string
}

export default connect(mapStateToProps)(Paragraph);