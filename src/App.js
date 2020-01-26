import React from 'react';
import './App.css';
import KontHeader from './components/KontHeader';
import KontPicture from './components/KontPicture';
import KontLogo from './components/KontLogo';
import KontFooter from './components/KontFooter';
import KontInfo from './components/KontInfo';
import KontArticle from './components/KontArticle';
import KontMenu from './components/KontMenu';
import {BrowserRouter} from "react-router-dom";

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
        //console.log(this.state.height);
        //console.log(this.state.width)
    }



    render() {

            let ttt = 0;
        if (this.state.width < 700) {
            ttt = "QQQ"
        } else {
            ttt = "ZZZ"
        }

        return (
            <BrowserRouter>
                <div className='KontWrapper'>

                    <KontHeader/>
                    <KontLogo/>
                    <KontMenu xxx = {this.state.width}/>






                    <KontPicture/>
                    <KontArticle/>
                    <KontFooter/>
                    <KontInfo/>
                    <div className={ttt}>
                        qsldkvjqlskdjcqlkedjlvqkejclkqej
                    </div>
                </div>
            </BrowserRouter>
        );
    };

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }
}

export default App;
