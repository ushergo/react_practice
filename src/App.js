import React, {Component} from 'react';
import './App.css';

import {BrowserRouter, Route} from 'react-router-dom';

import Home from './components/Home';
import Product from './components/Product';
import About from './components/About';
import LikeButton from './components/LikeButton'
import LoveButton from './components/LoveButton'
import RefsInput from "./components/RefsInput";
import CompositeAvatorComponent from "./components/CompositeAvatorComponent";


class App extends Component {

    render() {
        var div_css = {
            width: 200,
            height: 200,
            border: '1px solid red',
            background: 'green',
            margin: '10px auto'
        }

        return (
            <div className="App">
                <BrowserRouter>
                    <div className="nav">
                        <a href="/abc">Home</a>
                        <a href="/abc1">产品</a>
                        <a href="/abc2">我们</a>
                        <br/>
                        <Route path="/abc" component={Home}/>
                        <Route path="/abc1" component={Product}/>
                        <Route path="/abc2" component={About}/>
                        <div style={div_css}>111222333
                        </div>
                    </div>

                </BrowserRouter>

                <LikeButton initialCount="10"></LikeButton>

                <LoveButton times="2030"></LoveButton>

                <RefsInput></RefsInput>

                <CompositeAvatorComponent></CompositeAvatorComponent>

            </div>
        );
    }
}

export default App;
