import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../../colors/colors';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    font-family: 'Black Ops One', cursive;
    position: relative;
`
const HeaderWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 25px;
    background-color: ${props => props.isDarkModeOpen ? colors.background_secondary : '#AFAFAF'};;
`
const HeaderContent = styled.div`
    padding: 10px 35px;
    background-color: ${props => props.isDarkModeOpen ? colors.background_secondary : '#AFAFAF'};;
    position: absolute;
    left: 50%;
    top: 22px;
    transform: translateX(-50%);

    ::before{
        content: '';
        position: absolute;
        bottom: 2px;
        left: -26px;
        width: 30px;
        height: 60px;
        background-color: ${props => props.isDarkModeOpen ? colors.background_secondary : '#AFAFAF'};;
        transform: rotate(-45deg);
    }
    ::after{
        content: '';
        position: absolute;
        bottom: 2px;
        right: -26px;
        width: 30px;
        height: 60px;
        background-color: ${props => props.isDarkModeOpen ? colors.background_secondary : '#AFAFAF'};;
        transform: rotate(45deg);
    }
`
const HeaderLine = styled.div`
    width: 100%;
    height: 25px;
    background-color: ${props => props.isDarkModeOpen ? colors.background_secondary : '#AFAFAF'};;
`
const Header = styled.h1`
    font-size: 1.8rem;
    margin: 0;
    color: ${props => props.isDarkModeOpen ? colors.primary : colors.background_secondary};
`

const SectionHeader = ({header, isDarkModeOpen}) => (
    <Wrapper>
        <HeaderLine/>
        <HeaderWrapper isDarkModeOpen={isDarkModeOpen}>
            <HeaderContent isDarkModeOpen={isDarkModeOpen}>
                <Header isDarkModeOpen={isDarkModeOpen}>{header}</Header>
            </HeaderContent>
        </HeaderWrapper>

    </Wrapper>
)

SectionHeader.propTypes = {
    header: PropTypes.string.isRequired,
    isDarkModeOpen: PropTypes.bool
}

export default SectionHeader;