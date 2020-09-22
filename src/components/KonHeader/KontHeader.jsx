import React from "react";
import header_background from "../image/header_background.png";
import './KontHeader.css'


const KontHeader = (props) => {
    return (
      <div className={`${props.adaptiveWidth}_header`}>
          <div>
              <img className={`${props.adaptiveWidth}_header`}
                  src={header_background}
                  alt=""
              />
          </div>
      </div>
    );
};

export default KontHeader;