import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { colors } from '../../../colors';

const Button = styled.button`
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    color: ${colors.primary};
    :hover{
        color: white;
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