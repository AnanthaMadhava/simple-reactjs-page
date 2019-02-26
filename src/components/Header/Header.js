import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import { Link } from 'react-router-dom';

import { HeaderLogo } from '../uri/icons';
import SideDrawer from './SideDrawer';

class Header extends Component {

    state = {
        drawerOpen: false,
        headerShow: false
    }

    toggleDrawer = (value) => {
        this.setState({
            drawerOpen: value 
        })
    }

    render() {
        return (
            <AppBar
                position = "fixed"
                style = {{
                    backgroundColor: '#1C4366',
                    boxShadow: 'none',
                    padding: '10px 0',
                    borderBottom: '2px solid #00285e'
                }}
            >
                <ToolBar style={{display: 'flex'}}>
                    <div style = {{flexGrow: 1}} >
                        <div className="header_logo">
                            <HeaderLogo 
                                link={false}
                                width='70px'
                                height='70px'
                            />
                        </div>
                    </div>
                    <IconButton
                        area-label="Menu"
                        color="inherit"
                        onClick={() => this.toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <SideDrawer 
                        open = {this.state.drawerOpen}
                        onClose = {(value) => this.toggleDrawer(value)}
                    />
                </ToolBar>
            </AppBar>
        );
    }
}

export default Header;