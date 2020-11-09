import React from "react";
import picture from "../image/picture____.png";
import './KontPicture.css'

const KontPicture = (props) => {
    return (
        <div className={`${props.adaptiveWidth}_picture`}>
            <div>
                <img className={`${props.adaptiveWidth}_picture`} src={picture} alt=""/>
            </div>
        </div>
    );
};

export default KontPicture;