import React from 'react';
import styled from 'styled-components';
import MediaItem from './MediaItem/MediaItem';
import { sizes } from '../../../ScreenSizes';

const Wrapper = styled.div`
    @media(max-width: ${sizes.mobile}){
        display: none;
    }
    position: absolute;
    right: 20px;
    top: 80px;
    height: 65px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Media = () => (
    <Wrapper>
        <MediaItem linkedin/>
        <MediaItem github/>
    </Wrapper>
)

export default Media;
