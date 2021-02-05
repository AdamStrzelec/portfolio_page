import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../../colors';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    margin-top: 35px;
`
const List = styled.ul`
    list-style: none;
    padding: 0;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
`
const ListItem = styled.li`
    margin: 0;
    text-align: center;
    margin-top: 50px;
    font-family: 'Black Ops One', cursive;
    font-size: 1.8rem;
    ${props => props.isNavMenuOpen ? 'transform: translateX(100%)' : 'transform: translateX(0)'};
    transition-property: transform;
    transition-duration: 0.5s;
    transition-timing-function: cubic-bezier(.46,1.55,.97,.97);
    
    ${props => props.isNavMenuOpen && 'transition-delay: 0.'+props.number+'s'};
`
const StyledAnchorLink = styled(AnchorLink)`
    color: ${props => props.isDarkModeOpen ? colors.primary : colors.background_primary};
    text-decoration: none;
    transition: color 0.3s ease-in-out;
    :visited{
        color: ${props => props.isDarkModeOpen ? colors.primary : colors.background_primary};   
    }
    :hover{
        color: ${colors.tertiary};
    }
`

const Navlist = ({isNavMenuOpen, isDarkModeOpen}) => (
    <Wrapper>
        <List>
            <ListItem isNavMenuOpen={isNavMenuOpen} number={0}><StyledAnchorLink href='#home'  isDarkModeOpen={isDarkModeOpen}>HOME</StyledAnchorLink></ListItem>
            <ListItem isDarkModeOpen={isDarkModeOpen} isNavMenuOpen={isNavMenuOpen} number={1}><StyledAnchorLink href='#about' isDarkModeOpen={isDarkModeOpen}>O MNIE</StyledAnchorLink></ListItem>
            <ListItem isDarkModeOpen={isDarkModeOpen} isNavMenuOpen={isNavMenuOpen} number={2}><StyledAnchorLink href='#projects' isDarkModeOpen={isDarkModeOpen}>PROJEKTY</StyledAnchorLink></ListItem>
            <ListItem isDarkModeOpen={isDarkModeOpen} isNavMenuOpen={isNavMenuOpen} number={3}><StyledAnchorLink href='#technologies' isDarkModeOpen={isDarkModeOpen}>TECHNOLOGIE</StyledAnchorLink></ListItem>
            <ListItem isDarkModeOpen={isDarkModeOpen} isNavMenuOpen={isNavMenuOpen} number={4}><StyledAnchorLink href='#contact' isDarkModeOpen={isDarkModeOpen}>KONTAKT</StyledAnchorLink></ListItem>
        </List>
    </Wrapper>
)

export default Navlist;