import React from "react";
import kontur_logo from "../image/kontur_logo.png";
import './KontLogo.css'


const KontLogo = (props) => {
    return (
      <div className={`${props.adaptiveWidth}_logo`}>
        <div>
          <img
            className={`${props.adaptiveWidth}_logo_image`}
            src={kontur_logo}
            alt=""
          />
        </div>
      </div>
    );
};

export default KontLogo;