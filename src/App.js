import React, {useEffect, useState} from 'react';
import './App.css';
import KontHeader from './components/KonHeader/KontHeader';
import KontPicture from './components/KontPicture/KontPicture';
import KontLogo from './components/Logo/KontLogo';
import KontFooter from './components/KontFooter/KontFooter';
import KontInfo from './components/KontInfo/KontInfo';
import KontArticle from './components/KontArticle/KontArticle';
import KontMenu from './components/KontMenu/KontMenu';
import {BrowserRouter} from "react-router-dom";

function App() {
    const [windowWidth, setWindowWidth] = useState(0);
    const resizeWindow = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        resizeWindow();
        window.addEventListener("resize", resizeWindow);
        return () => window.removeEventListener("resize", resizeWindow);
    }, [windowWidth]);

    let adaptiveWidth = '';
    if (windowWidth>= 1300) {
        adaptiveWidth = 'big'
    } else if ((windowWidth < 1300) && (windowWidth >= 1100)) {
        adaptiveWidth = 'medium_1'
    } else if ((windowWidth < 1100) && (windowWidth >= 900)) {
        adaptiveWidth = 'medium_2'
    } else if ((windowWidth < 900) && (windowWidth>= 777)) {
        adaptiveWidth = 'medium_3'
    } else if ((windowWidth < 777) && (windowWidth >= 500)) {
        adaptiveWidth = 'medium_4'
    } else if (windowWidth < 500) {
        adaptiveWidth = 'small'
    }

    return (
        <BrowserRouter>
            <div className={adaptiveWidth}>
                <KontHeader adaptiveWidth={adaptiveWidth}/>
                <KontLogo adaptiveWidth={adaptiveWidth}/>
                <KontMenu adaptiveWidth={adaptiveWidth} windWidth={window.innerWidth}/>
                <KontPicture adaptiveWidth={adaptiveWidth} windWidth={window.innerWidth}/>
                <KontArticle adaptiveWidth={adaptiveWidth}/>
                <KontFooter adaptiveWidth={adaptiveWidth}/>
                <KontInfo adaptiveWidth={adaptiveWidth}/>
            </div>
        </BrowserRouter>
    );
}
export default App;

// КЛАССОВЫЙ КОМПОНЕНТ - НЕ УДАЛЯТЬ!!!!!!!
/*
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            height: window.innerHeight,
            width: window.innerWidth
        };
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
    }

    updateDimensions() {
        this.setState({
            height: window.innerHeight,
            width: window.innerWidth
        });
    }

    render() {

        console.log(this.state.width)
        let adaptiveWidth = '';

        if (this.state.width>=1300) {
            adaptiveWidth = 'big'}
        else if ((this.state.width<1300) && (this.state.width>=1100)) {
            adaptiveWidth = 'medium_1'}
        else if ((this.state.width<1100) && (this.state.width>=900)) {
            adaptiveWidth = 'medium_2'}
        else if ((this.state.width<900) && (this.state.width>=777)) {
            adaptiveWidth = 'medium_3'}
        else if ((this.state.width<777) && (this.state.width>=500)) {
            adaptiveWidth = 'medium_4'}
        else if (this.state.width<500) {
            adaptiveWidth = 'small'}

        console.log(adaptiveWidth);

        return (
            <BrowserRouter>
                <div className={adaptiveWidth}>
                    <KontHeader adaptiveWidth={adaptiveWidth}/>
                    <KontLogo adaptiveWidth={adaptiveWidth}/>
                    <KontMenu adaptiveWidth={adaptiveWidth} windWidth = {this.state.width}/>
                    <KontPicture adaptiveWidth={adaptiveWidth} windWidth = {this.state.width}/>
                    <KontArticle adaptiveWidth={adaptiveWidth}/>
                    <KontFooter adaptiveWidth={adaptiveWidth}/>
                    <KontInfo adaptiveWidth={adaptiveWidth}/>
                </div>
            </BrowserRouter>
        );
    };

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }
}


export default App;
*/
