import React from 'react';
import { Link } from 'react-router-dom';

//import arohalogo from '../../Resources/images/logo/aroha.png';

export const HeaderLogo = (props) => {

    const template = <div
            className="img_cover"
            style={{
                width: props.width,
                height: props.height,
                // background: `url(${arohalogo}) no-r`epeat
            }}
        >
        LOGO
        </div>

    if(props.link) {
        return(
            <h1>{template}</h1>
        )
    } else {
        return <h1>LOGO</h1>
    }
};