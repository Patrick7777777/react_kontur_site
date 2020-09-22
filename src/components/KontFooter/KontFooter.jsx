import React from "react";
import footer_background from "../image/footer_background.png";
import './KontFooter.css'


const KontFooter = (props) => {
    return (
      <div className={`${props.adaptiveWidth}_footer`}>
        <div>
          <img
            className={`${props.adaptiveWidth}_footer_background`}
            src={footer_background}
            alt = ''
          />
        </div>
      </div>
    );
};

export default KontFooter;