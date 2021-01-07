import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Link } from 'react-router-dom';

const Header = () => {
    const onClickLogo = () => {
        window.scrollTo({
            top: 0,
            left: 0
        });
    }

    return (
        <AppBar className="header">
            <Link
                onClick={onClickLogo}
                className="logo"
                to="/"
            >
                Diamonds
            </Link>
        </AppBar>    
    );
};

export default Header;