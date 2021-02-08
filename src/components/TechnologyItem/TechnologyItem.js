import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors } from '../../colors';

const Wrapper = styled.div`
    width: 250px;
    display: inline-block;
`
const ImageWrapper = styled.div`
    width: 100%;
    height: 200px;
    padding-top: 40px;
    text-align: center;
`
const StyledImage = styled.img`
    width: auto;
    height: 100%;
`
const Name = styled.h1`
    text-align: center;
    font-family: 'Black Ops One', cursive;
    font-size: 1.8rem;
    color: ${colors.tertiary};
`

const TechnologyItem = ({ technology }) => (
    <Wrapper>
        <ImageWrapper>
            <StyledImage src={technology.technologyImage.url} alt='project technology image' />
        </ImageWrapper>
        <Name>
            {technology.technologyName}
        </Name>
    </Wrapper>
)

TechnologyItem.propTypes = {
    technology: PropTypes.object
}

export default TechnologyItem;