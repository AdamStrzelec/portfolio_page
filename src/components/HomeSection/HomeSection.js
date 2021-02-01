import React from 'react';
import styled from 'styled-components';
import home_background from '../../assets/images/home_background.jpg'

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${home_background});
    background-size: cover;
    position: relative;
`
const Content = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
`

const HomeSection = () => (
    <Wrapper>
        <Content>

        </Content>
    </Wrapper>
)

export default HomeSection;