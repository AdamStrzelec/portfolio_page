import React from 'react';
import PropTypes from 'prop-types';
import SectionHeader from './SectionHeader/SectionHeader';
import SectionContent from './SectionContent/SectionContent';
import { connect } from 'react-redux';

const Section = ({ sectionId, header, heading, children, isDarkModeOpen }) => (
    <div id={sectionId}>
        <SectionHeader header={header} isDarkModeOpen={isDarkModeOpen}/>
        <SectionContent heading={heading} isDarkModeOpen={isDarkModeOpen} children={children}/>
    </div>
)

Section.propTypes = {
    sectionId: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    heading: PropTypes.string,
    children: PropTypes.element.isRequired,
    isDarkModeOpen: PropTypes.bool
}

const mapStateToProps = ({isDarkModeOpen}) => ({
    isDarkModeOpen
})

export default connect(mapStateToProps)(Section);