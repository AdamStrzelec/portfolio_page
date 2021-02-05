import React, { useState, useEffect, useRef } from 'react';
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';
import Navbar from './Navbar/Navbar';
import { connect } from 'react-redux';

const navState = {
    isNavMenuOpen: false,
    changeMenuVisibility: () => {},
    isDarkModeOpen: true,
    changeDarkModeOpen: () => {}
}

export const NavContext = React.createContext(navState);

const Navigation = ({ handleDarkModeOpenAction }) => {
    const [isNavMenuOpen, setNavMenuOpen] = useState(false);
    const [isDarkModeOpen, setDarkModeOpen] = useState(true);

    const navRef = useRef(null);

    useEffect(()=>{

        handleDarkModeOpenAction(isDarkModeOpen);
        window.addEventListener('click', detectClickOutside);

        return () => {
          window.removeEventListener('click', detectClickOutside);
        };
    })
    
    const detectClickOutside = (e) => {
        if(!navRef.current || navRef.current.contains(e.target)){
            return;
        }
        setNavMenuOpen(false);
    }

    const changeMenuVisibility = () => {
        setNavMenuOpen(!isNavMenuOpen);
    }

    const changeDarkModeOpen = () => {
        setDarkModeOpen(!isDarkModeOpen);
    }

    return(
        <NavContext.Provider value={{
            isNavMenuOpen,
            changeMenuVisibility,
            isDarkModeOpen,
            changeDarkModeOpen
        }}>
            <div ref={navRef}>
                <HamburgerMenu/>
                <Navbar/>
            </div>
        </NavContext.Provider>
    )
}

const mapDispatchToProps = (dispatch) => ({
    handleDarkModeOpenAction: (isDarkModeOpen) => {
    dispatch({
        type: 'HANDLE_DARK_MODE',
        payload: {
            isDarkModeOpen: isDarkModeOpen
        }
    })}
})

export default connect(null, mapDispatchToProps)(Navigation);