import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { sizes } from '../screenSizes';

const Wrapper = styled.div`
    width: 100%;
    @media(min-width: ${sizes.tablet}){
        width: calc(100% - 45px);
    }
`

const MainTemplate = ({ children }) => (
    <Wrapper>
        {children}
    </Wrapper>
)

MainTemplate.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element)
}

export default MainTemplate;
