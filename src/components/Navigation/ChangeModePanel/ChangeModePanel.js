import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavContext } from '../Navigation';
import { colors } from '../../../colors/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div`
    width: 80px;
    height: 45px;
    overflow: hidden;
    ${props => props.isVertical && 'transform: rotate(-90deg) translateY(-18px)'};
    
`

const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const ModeSwitcher = styled.div`
    width: 30px;
    height: 17px;
    border: 1px solid ${props => props.isDarkModeOpen ? colors.primary : colors.background_secondary};
    transition: border 0.3s ease-in-out;
    border-radius: 8px;
    cursor: pointer;
    position: relative;
`
const MenuSwitcherBall = styled.div`
    position: absolute;
    top: 1px;
    left: 1px;
    width: 13px;
    height: 13px;
    background-color: ${props => props.isDarkModeOpen ? colors.primary : colors.background_secondary};
    border-radius: 50%;
    transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
    transform: ${props => props.isDarkModeOpen ? 'translateX(0)' : 'translateX(13px)'};
    color: white;
`
const Icon = styled(FontAwesomeIcon)`
    color: ${props => props.isDarkModeOpen ? colors.primary : colors.background_secondary};
    font-size: 1.7rem;
    transition: color 0.3s ease-in-out;
`

const ChangeModePanel = ({ isVertical }) => {

    const { isDarkModeOpen, changeDarkModeOpen } = useContext(NavContext);

    return(
        <Wrapper isVertical={isVertical}>
            <Content>
                <ModeSwitcher onClick={changeDarkModeOpen} isDarkModeOpen={isDarkModeOpen}>
                    <MenuSwitcherBall isDarkModeOpen={isDarkModeOpen}/>
                </ModeSwitcher>
                <Icon icon={faSun} isDarkModeOpen={isDarkModeOpen} />
            </Content>
        </Wrapper>
    )
}

ChangeModePanel.propTypes = {
    isVertical: PropTypes.bool
}

export default ChangeModePanel;