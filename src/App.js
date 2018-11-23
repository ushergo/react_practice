import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Route,Link} from 'react-router-dom';

import Home from './components/Home';
import Product from './components/Product';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <div className="App">
          <BrowserRouter>
              <div>
                  <a href="/abc">Home</a>
                  <a href="/abc1">产品</a>
                  <a href="/abc2">我们</a>
                  <br/>
                  <Route path="/abc" component={Home}/>
                  <Route path="/abc1" component={Product}/>
                  <Route path="/abc2" component={About}/>
                  <div style={{width:200,height:200,border:'1px solid red',background:'green',margin:'10px auto'}}>111222333</div>
              </div>

          </BrowserRouter>
      </div>
    );
  }
}

export default App;
