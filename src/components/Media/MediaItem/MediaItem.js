import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { colors } from '../../../colors';
import { connect } from 'react-redux';

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    color: ${props => props.isDarkModeOpen ? colors.primary : colors.background_secondary};
    font-size: 2.4rem;
    cursor: pointer;
    :hover{
        color: ${colors.secondary};
    }
`

const MediaItem = ({ linkedin, github, isDarkModeOpen }) =>(
    <>
        {linkedin &&
            <a href={'https://www.linkedin.com/in/adam-strzelec-356b01201'} rel="noreferrer" target='_blank'>
                <StyledFontAwesomeIcon icon={faLinkedin} isDarkModeOpen={isDarkModeOpen}/>
            </a>
        }
        {github &&
            <a href={'https://github.com/AdamStrzelec'} rel="noreferrer" target='_blank'>
                <StyledFontAwesomeIcon icon={faGithubSquare} isDarkModeOpen={isDarkModeOpen}/>
            </a>
        }
    </>
) 

const mapStateToProps = ({ isDarkModeOpen }) => ({
    isDarkModeOpen
})

export default connect(mapStateToProps)(MediaItem);
