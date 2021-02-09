import React, { useContext } from 'react';
import styled from 'styled-components';
import { NavContext } from '../Navigation';
import { sizes } from '../../../screenSizes/sizes';
import { colors } from '../../../colors';
import ChangeModePanel from '../ChangeModePanel/ChangeModePanel';
import Media from '../../Media/Media';

const Wrapper = styled.div`
    @media(min-width: ${sizes.tablet}){
        display: block;
    }
    display: none;
    width: 45px;
    height: 100vh;
    background-color: ${props => props.isDarkModeOpen ? colors.background_tertiary : '#D0D3D4'};
    transition: background-color 0.3s ease-in-out;
    position: fixed;
    right: 0;
    top: 0;
`

const ChangeModePanelWrapper = styled.div`
    position: absolute;
    top: 100px;
    left: 0;
`

const MediaWrapper = styled.div`
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
`

const RightPanel = () => {
    const { isDarkModeOpen } = useContext(NavContext);
    return(
        <Wrapper isDarkModeOpen={isDarkModeOpen}>
            <ChangeModePanelWrapper>
                <ChangeModePanel isVertical/>
            </ChangeModePanelWrapper>
            <MediaWrapper>
                <Media />
            </MediaWrapper>
        </Wrapper>
    )

}

export default RightPanel;