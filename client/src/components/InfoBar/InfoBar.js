import React from 'react'

import closeIcon from '../../Icons/closeIcon.png';
import onlineIcon from '../../Icons/onlineIcon.png';
import './InfoBar.css';

const InfoBar = () => {
    return (
        <div className="ingoBar">
            <div className="leftInnerContainer">
                <img className="onLineIcon" src={onlineIcon} alr="online image"/>
                <h3>roomName</h3>
            </div>

            <div className="RightInnerContainer">
                <a href="/"><img src={closeIcon} alt="close image"/></a>
            </div>
        </div>
    )
}

export default InfoBar;