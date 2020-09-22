import React from "react";
import './KontInfo.css'


const KontInfo = (props) => {
    return (
      <div className={`${props.adaptiveWidth}_info`}>
        г. Москва, ул. Генерала Белова, д. 26, офис 213 <br/>
        Тел.: +7(495)775-27-37, +7(495)775-27-37 e-mail: <br/>
        info@sovicon.ru
      </div>
    );
}

export default KontInfo;