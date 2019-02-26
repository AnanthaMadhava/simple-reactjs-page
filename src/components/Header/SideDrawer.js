import React from 'react';
import {scroller} from 'react-scroll';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';  
import { Link } from 'react-router-dom';

const SideDrawer = (props) => {

    const scrollToElement = () => {
        scroller.scrollTo({
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: -150
        });
        props.onClose(false)
    }

    return (
        <Drawer
            anchor = "right"
            open = {props.open}
            onClose = {() => props.onClose(false)}
        >
            <List component="nav">
                <ListItem button>
                    <Link exact to="/Learner" className="sideNav" onClick={() => scrollToElement()} >AddList</Link>
                </ListItem>
                <ListItem button>
                    <Link to="/details" className="sideNav" onClick={() => scrollToElement()} >Details</Link>
                </ListItem>
            </List>
        </Drawer>
    );
};

export default SideDrawer;