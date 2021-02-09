import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors } from '../../colors';
import { sizes } from '../../screenSizes/sizes';
import ProjectItemName from './ProjectItemName/ProjectItemName';
import ProjectTechnologies from './ProjectTechnologies/ProjectTechnologies';
import ProjectDescription from './ProjectDescription/ProjectDescription';
import ProjectButtons from './ProjectButtons/ProjectButtons';

const Wrapper = styled.div`
    border: 8px solid ${colors.background_secondary};
    margin: 10px 0;
    width: 100%;
    max-width: 600px;
    min-height: 220px;
    display: flex;
    position: relative;
    @media(max-width: ${sizes.mobile}){
        flex-direction: column;
        max-width: 400px;
    }
    @media(min-width: ${sizes.desctop}){
        margin: 10px 20px;
    }
`
const NameWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
`
const ImageWrapper = styled.div`
    width: 50%;
    background-image: url(${props => props.imageUrl});
    display: inline-block;
    background-size: cover;
    background-position: center;
    @media(max-width: ${sizes.mobile}){
        width: 100%;
        height: 200px;
    }
`

const InfoWrapper = styled.div`
    width: 50%;
    height: 100%;
    min-height: 220px;
    display: grid;
    grid-template-rows: 40px 1fr 40px;
    @media(max-width: ${sizes.mobile}){
        width: 100%;
    }
`

const ProjectItem = ({ project }) => (
    <Wrapper>
        <ImageWrapper imageUrl={project.projecturl.url} />
        <InfoWrapper>
            <ProjectTechnologies technologies={project.usedtechnologies}/>
            <ProjectDescription description={project.description} />
            <ProjectButtons buttonsInfo={project.links}/>
        </InfoWrapper>
        <NameWrapper>
            <ProjectItemName name={project.projectname} />
        </NameWrapper>
    </Wrapper>
)

ProjectItem.propTypes = {
    project: PropTypes.object
}

export default ProjectItem;