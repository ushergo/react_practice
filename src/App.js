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
import Map from './components/map';
import  ReactChildrenListToLi from './components/ReactChildrenListToLi';
import LifeCycleClock from "./components/LifeCycleClock";
import FlavorForm from "./components/FlavorForm";
import AjaxTest from "./components/AjaxTest";
import AjaxPromise from "./components/AjaxPromise";
import $ from 'jquery';

class App extends Component {

    //constructors的作用，Typically, in React constructors are only used for two purposes:
    //1. Initializing local state by assigning an object to this.state.
    //2. Binding event handler methods to an instance.
    constructor(props)
    {
        super(props);
        this.state={arrayDiv:''}

        /*
        **-Can't call setState on a component that is not yet mounted.
        **必须在对象创建之后使用mounted
        const arrayDivs=[<div key="1">aaa</div>,<div key="2">bbb</div>,<div key="3">ccc</div>];
        this.setState({arrayDiv:arrayDivs})
        */
    }

    //---------------------装载组件触发-----------------------
    // 只会在装载之前调用一次,render之前调用，可以在这儿修改state
    componentWillMount()
    {
        const arrayDivs=[<div key="1">aaa</div>,<div key="2">bbb</div>,<div key="3">ccc</div>];
        this.setState({arrayDiv:arrayDivs})
    }
    // 只会在装载完成之后调用一次，在 render 之后调用，从这里开始可以通过ReactDOM.findDOMNode(this) 获取到组件的 DOM 节点。
    // The componentDidMount() method runs after the component output has been rendered to the DOM.
    // mounted (inserted into the tree).
    componentDidMount()
    {

    }

    //---------------------更新组件触发-----------------------
    //这些方法不会在首次 render 组件的周期调用
    componentWillReceiveProps()
    {

    }
    shouldComponentUpdate()
    {

    }
    componentWillUpdate()
    {

    }
    componentDidUpdate()
    {

    }
    //---------------------卸载组件触发-----------------------
    //即将注销挂载 这些方法不会在首次 render 组件的周期调用
    componentWillUnmount()
    {

    }

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

                <Map></Map>

                <div> {this.state.arrayDiv} </div>

                <ReactChildrenListToLi>
                    <span>admin</span>
                    <span>info</span>
                </ReactChildrenListToLi>
                <br/>

                定时器:
                <LifeCycleClock></LifeCycleClock>
                <LifeCycleClock></LifeCycleClock>
                <LifeCycleClock></LifeCycleClock>
                <br/>

                表单：
                <FlavorForm></FlavorForm>
                <br/>

                AJAX：
                <AjaxTest source="https://api.github.com/users/octocat/gists" ></AjaxTest>
                <br/>

                AJAX Promise,直接在属性内请求获取json数据:
                <AjaxPromise promise={$.getJSON('https://api.github.com/search/repositories?q=javascript&sort=stars')}></AjaxPromise>

            </div>
        );
    }
}

export default App;
