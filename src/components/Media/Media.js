import React from 'react';
import styled, { keyframes } from 'styled-components';
import MediaItem from './MediaItem/MediaItem';
import { sizes } from '../../ScreenSizes';

const drawMedia = keyframes`
    to{
        transform: translateX(0);
    }
`

const Wrapper = styled.div`
    @media(max-width: ${sizes.mobile}){
        display: none;
    }
    position: absolute;
    right: 27px;
    top: 100px;
    height: 65px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transform: translateX(50px);
    animation: ${drawMedia} 1s 3.5s forwards;
`

const Media = () => (
    <Wrapper>
        <MediaItem linkedin/>
        <MediaItem github/>
    </Wrapper>
)

export default Media;
