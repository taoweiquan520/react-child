import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch, Link} from 'react-router-dom';
import Home from './router/Home';
import About from './router/About';
import './index.css';
const BASE_NAME = window.__POWERED_BY_QIANKUN__ ? "/react" : "";

function render() {
  ReactDOM.render(
    <React.StrictMode>
      <HashRouter basename={BASE_NAME}>
          <div>
            <Link to="/">Home</Link>
            |
            <Link to="/about">About</Link>
          </div>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/about" component={About}/>
          </Switch>
      </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('vue app bootstraped');
}

export async function mount(props) {
  console.log('props from main framework', props);

  render();
}

export async function unmount() {
  ReactDOM.unmountComponentAtNode(document.getElementById("root"));
}