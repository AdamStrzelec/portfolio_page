import React from 'react';
import styled from 'styled-components';
import home_background from '../../assets/images/home_background.jpg'
import IntroducePanel from '../IntroducePanel/IntroducePanel';
import SliderImage from '../SliderImage/SliderImage';
import Media from '../Media/Media';

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${home_background});
    background-size: cover;
    background-position: center;
    position: relative;
    overflow: hidden;
`
const Content = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
`

const HomeSection = ({ sectionId }) => (
    <Wrapper id={sectionId}>
        <Content>
            <IntroducePanel />
            <SliderImage />
            <Media />
        </Content>
    </Wrapper>
)

export default HomeSection;