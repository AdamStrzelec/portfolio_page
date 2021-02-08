import React from 'react';
import styled, { keyframes } from 'styled-components';
import TextContainer from './TextCotainer/TextContainer';
import ImageContainer from './ImageContainer/ImageCotainer';

const movePanel = keyframes`
    to{
        transform: translateX(-50%) translateY(70px);
    }
`

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%) translateY(calc(50vh - 50px));
    background-color: #3D3D3D;
    color: white;
    border-radius: 50px;
    overflow: hidden;
    animation: ${movePanel} 1s 3.5s forwards;
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