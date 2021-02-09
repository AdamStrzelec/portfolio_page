import React from 'react';
import styled from 'styled-components';
import Paragraph from '../Paragraph/Paragraph';
import { sizes } from '../../screenSizes/sizes';
import { colors } from '../../colors';

const Wrapper = styled.div`
    @media(min-width: ${sizes.mobile}){
        margin-left: 30px;
    }
`

const StyledHeader = styled.h1`
    font-family: 'Black Ops One', cursive;
    font-size: 2.5rem;
    margin: 35px 0 0 0; 
    color: ${colors.tertiary};
`

const ContactSection = () => (
    <Wrapper>
        <StyledHeader>
            Telefon:
        </StyledHeader>
        <Paragraph fontSize={'2rem'}>
            694 312 878
        </Paragraph>
        <StyledHeader>E-mail:</StyledHeader>
        <Paragraph fontSize={'2rem'}>
            adamstrzelec96@gmail.com
        </Paragraph>
    </Wrapper>
)

export default ContactSection;