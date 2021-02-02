import React from 'react';
import styled, { keyframes } from 'styled-components';
import TextContainer from './TextCotainer/TextContainer';
import ImageContainer from './ImageContainer/ImageCotainer';

const Wrapper = styled.div`
    position: absolute;
    top: 70px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #3D3D3D;
    color: white;
    border-radius: 50px;
    overflow: hidden;
`
const resize = keyframes`
    from {
        width: 100px;
    }
    to{
        width: 280px;
    }
`
const Content = styled.div`
    width: 100px;
    height: 100px;
    animation: ${resize} 1.5s 0.5s forwards;
    position: relative;
`

const IntroducePanel = () => (
    <Wrapper>
        <Content>
            <ImageContainer />
            <TextContainer />
        </Content>
    </Wrapper>
)

export default IntroducePanel