import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors } from '../../../colors/colors';


const Wrapper = styled.div`
    height: 25px;
    display: inline-block;
    overflow: hidden;
`
const StyledName = styled.h1`
    font-family: 'Black Ops One', cursive;
    color: ${colors.primary};
    margin: 0;
    padding: 3px 40px 3px 10px;
    font-size: 1.7rem;
    width: 100%;
    position: relative;
    top: -28px;
`
const NameWrapper = styled.div`
    width: calc(100% - 33px);
    height: 25px;
    background-color: ${colors.background_secondary};
    position: relative;
    ::after{
        content: '';
        position: absolute;
        bottom: 1px;
        right: -17px;
        width: 20px;
        height: 40px;
        background-color: ${colors.background_secondary};
        transform: rotate(45deg);
    }

`

const ProjectItemName = ({ name }) => (
    <Wrapper>
        <NameWrapper />
        <StyledName>{name}</StyledName>        
    </Wrapper>
)

ProjectItemName.propTypes = {
    name: PropTypes.string.isRequired
}

export default ProjectItemName;