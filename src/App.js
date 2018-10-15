import React, {Component} from 'react';
import './App.css';
import {Provider} from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ProblemsList from "./components/problemslist";
import ReduxMenu from "./components/reduxMenu.js";
import Blog from "./components/Blog.js";
import {store} from './store/store.js';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div className="App">
                        <Switch>
                            <Route exact path='/' component={ReduxMenu}/>
                            <Route path='/problemlist' component={ProblemsList}/>
                            <Route path='/blog' component={Blog}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
