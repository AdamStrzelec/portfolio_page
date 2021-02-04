import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { colors } from '../../../Colors';

const Button = styled.button`
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    color: ${colors.primary};
    opacity: 0.7;
    transition: opacity 0.2s ease-in-out;

    :hover{
        opacity: 1;
    }
`

const SetImageButton = ({ prev, ...props }) => 
        <Button onClick={props.onClick}>
            {prev ? 
                <FontAwesomeIcon icon={faCaretLeft} size={'4x'}/>
                :
                <FontAwesomeIcon icon={faCaretRight} size={'4x'}/>
            }
        </Button>

export default SetImageButton;