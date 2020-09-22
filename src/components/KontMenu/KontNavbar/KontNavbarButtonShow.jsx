import React from "react";
import s from './KontNavbarButtonShow.module.css'
import {NavLink} from "react-router-dom";

export const KontNavbarButtonShow = (props) => {
    return (
        <div>
            <div className={s.KontNavbar}>
                <div className={s.KontReference}>
                    <NavLink to="/main" activeClassName={s.active} onClick={props.tog}>ГЛАВНАЯ</NavLink>
                </div>
                <div className={s.KontReference}>
                    <NavLink to="/services" activeClassName={s.active} onClick={props.tog}>РЕШЕНИЯ</NavLink>
                </div>
                <div className={s.KontReference}>
                    <NavLink to="/projects" activeClassName={s.active} onClick={props.tog}>ПРОЕКТЫ</NavLink>
                </div>
                <div className={s.KontReference}>
                    <NavLink to="/to_partners" activeClassName={s.active} onClick={props.tog}>ПАРТНЕРЫ</NavLink>
                </div>
                <div className={s.KontReference}>
                    <NavLink to="/contact" activeClassName={s.active} onClick={props.tog}>О КОМПАНИИ</NavLink>
                </div>
            </div>
        </div>
    );
};