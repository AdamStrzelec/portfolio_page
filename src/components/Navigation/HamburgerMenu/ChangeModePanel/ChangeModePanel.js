import React, { useContext } from 'react';
import styled from 'styled-components';
import { NavContext } from '../../Navigation';
import { colors } from '../../../../colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div`
    width: 100px;
    height: 35px;
    position: absolute;
    top: -2px;
    right: 18px;
    overflow: hidden;
`

const ContentWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: black;
    border-radius: 16px;
    border: 2px solid ${colors.primary};
    transition: transform 0.5s ease-in-out;
    transform: ${props => props.isNavMenuOpen ? 'translateX(0)' : 'translateX(100%)'};
    visibility: ${props => props.isNavMenuOpen ? 'visible' : 'none'};
`

const Content = styled.div`
    width: 80px;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const ModeSwitcher = styled.div`
    width: 30px;
    height: 17px;
    border: 1px solid ${colors.primary};
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
    background-color: ${colors.primary};
    border-radius: 50%;
    transition: transform 0.3s ease-in-out;
    transform: ${props => props.isDarkModeOpen ? 'translateX(0)' : 'translateX(13px)'};
    color: white;
`
const Icon = styled(FontAwesomeIcon)`
    color: ${props => props.isDarkModeOpen ? '#566573' : 'white'};
    font-size: 1.7rem;
    transition: color 0.3s ease-in-out;
`

const ChangeModePanel = () => {

    const { isNavMenuOpen, isDarkModeOpen, changeDarkModeOpen } = useContext(NavContext);

    return(
        <Wrapper>
            <ContentWrapper isNavMenuOpen={isNavMenuOpen}>
                <Content>
                    <ModeSwitcher onClick={changeDarkModeOpen}>
                        <MenuSwitcherBall isDarkModeOpen={isDarkModeOpen}/>
                    </ModeSwitcher>
                    <Icon icon={faSun} isDarkModeOpen={isDarkModeOpen} />
                </Content>
            </ContentWrapper>
        </Wrapper>
    )
}

export default ChangeModePanel;