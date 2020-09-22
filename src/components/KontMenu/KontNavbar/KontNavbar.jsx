import React from "react";
import s from './KontNavbar.module.css'
import {NavLink} from "react-router-dom";

export const KontNavbar = (props) => {
    return (
        <div>
            <div className={s.KontNavbar}>
                <div className={s.KontReference}>
                    <NavLink to="/main" activeClassName={s.active}>ГЛАВНАЯ</NavLink>
                </div>
                <div className={s.KontReference}>
                    <NavLink to="/services" activeClassName={s.active}>РЕШЕНИЯ</NavLink>
                </div>
                <div className={s.KontReference}>
                    <NavLink to="/projects" activeClassName={s.active}>ПРОЕКТЫ</NavLink>
                </div>
                <div className={s.KontReference}>
                    <NavLink to="/to_partners" activeClassName={s.active}>ПАРТНЕРЫ</NavLink>
                </div>
                <div className={s.KontReference}>
                    <NavLink to="/contact" activeClassName={s.active}>О КОМПАНИИ</NavLink>
                </div>
            </div>
        </div>
    );
};
