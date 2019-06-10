import React from 'react';
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import store from './reducer'
import { Provider } from 'react-redux'
import App from './App'
import MovieFocus from './components/MovieFocus';
import ListCompany from './components/ListCompany';
import Header from './components/Header';


const Root = () =>{
    return(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/movie/:id" component={MovieFocus}/>
            <Route path="/company/:cid" component={ListCompany}/>
        </Switch>
    </BrowserRouter>
    )
}
ReactDOM.render(<Provider store={store}><Root /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
