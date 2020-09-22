import React from "react";
import {Route, Switch} from "react-router-dom";
import {PageHome} from './pages/PageHome';
import {PageServices} from "./pages/PageServices";
import {PageProjects} from "./pages/PageProjects";
import {PageToPartners} from './pages/PageToPartners';
import {PageAbout} from "./pages/PageAbout";
import './KontArticle.css'

const KontArticle = (props) => {

    return (
        <div className={`${props.adaptiveWidth}_article`}>
            <Switch>
                <Route exact path={"/"} component={PageHome}/>
                <Route path={"/main"} component={PageHome}/>
                <Route path={"/services"} component={PageServices}/>
                <Route path={"/projects"} component={PageProjects}/>
                <Route path={"/to_partners"} component={PageToPartners}/>
                <Route path={"/contact"} component={PageAbout}/>
            </Switch>
        </div>
    );
};

export default KontArticle;