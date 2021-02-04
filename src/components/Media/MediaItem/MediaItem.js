import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { colors } from '../../../Colors';

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    color: ${colors.primary};
    font-size: 2.4rem;
    cursor: pointer;
    :hover{
        color: white;
    }
`

const MediaItem = ({ linkedin, github }) =>(
    <>
        {linkedin &&
            <a href={'https://www.linkedin.com/in/adam-strzelec-356b01201'} rel="noreferrer" target='_blank'>
                <StyledFontAwesomeIcon icon={faLinkedin}/>
            </a>
        }
        {github &&
            <a href={'https://github.com/AdamStrzelec'} rel="noreferrer" target='_blank'>
                <StyledFontAwesomeIcon icon={faGithubSquare} />
            </a>
        }
    </>
) 

export default MediaItem;
