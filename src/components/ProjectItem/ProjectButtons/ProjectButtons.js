import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '../../Button/Button';

const Link = styled.a`
    margin: 0 5px;
    color: red;
`

const ProjectButtons = ({ buttonsInfo }) => (
    <div>
        {buttonsInfo.map(item => 
            <Link key={item.link} href={item.link} target='_blank'>
                <Button buttonType={item.linktype}>
                    {item.linkname}
                </Button>
            </Link>    
        )}
    </div>
)

ProjectButtons.propTypes = {
    buttonsInfo: PropTypes.arrayOf(PropTypes.object)
}

export default ProjectButtons;