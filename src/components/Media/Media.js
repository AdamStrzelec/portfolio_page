import React from 'react';
import styled, { keyframes } from 'styled-components';
import MediaItem from './MediaItem/MediaItem';
import { sizes } from '../../screenSizes/sizes';

const Wrapper = styled.div`
    display: flex;

    @media(min-width: ${sizes.tablet}){

    }
    height: 65px;
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
