import React from "react";
import s from './KontMenu.module.css'
import {KontNavbar} from "./KontNavbar/KontNavbar";
import {KontNavbarButtonShow} from "./KontNavbar/KontNavbarButtonShow";

class KontMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {show: false};
    };
    toggle = () => {
        const res = this.state.show;
        this.setState({show: !res});
    };
    render() {
        if (this.props.windWidth  <= 777)
        {
            return (
                <div className={s.KontMenu}>
                    <div className={`${s.KontMenu} ${s.line_menu}`}>
                    </div>
                    <button className={s.button} onClick={this.toggle}> </button>
                    {
                        this.state.show ? (<KontNavbarButtonShow tog={this.toggle} />) : null
                    }
                </div>
            );
        }
        else {
            return (
                <div className={s.KontMenu}>
                    <div className={`${s.KontMenu} ${s.line_menu}`}>
                    </div>
                    <div className={`${s.KontMenu} ${s.KontNavbar}`}>
                        <KontNavbar />
                    </div>
                </div>
            );
        }
    };
}

export default KontMenu;