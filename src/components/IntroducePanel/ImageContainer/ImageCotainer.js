import React from 'react';
import styled from 'styled-components';
import myImage from '../../../assets/images/profilowe.PNG';

const Wrapper = styled.div`
    width: 88px;
    height: 88px;
    background-color: black;
    border-radius: 50%;
    position: absolute;
    top: 6px;
    right: 6px;
    background-image: url(${myImage});
    background-size: cover;
`

const ImageContainer = () => <Wrapper />
export default ImageContainer;