import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors } from '../../colors/colors';

const StyledButton = styled.button`
    font-family: 'Black Ops One', cursive;
    color: ${colors.background_primary};
    ${props => props.buttonType==='git' && 'background-color: '+ colors.tertiary};
    ${props => props.buttonType==='page' && 'background-color: '+ colors.secondary};
    font-size: 1.2rem;
    border-radius: 5px;
    border: none;
    outline: none;
    box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
`
const Button = ({ children, buttonType }) => 
    <StyledButton buttonType={buttonType}>{children}</StyledButton>


Button.propTypes = {
    children: PropTypes.string.isRequired,
    buttonType: PropTypes.string
}

export default Button;