/**
 * Created by Administrator on 2016/10/26.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {IndexRoute, Router, Route, browserHistory} from 'react-router';
import News from './components/news-redux/index';
import NewsArticle from './components/news-redux/NewsZhengwen';
import './../css/mobile.css';
import './components/news-redux/News.scss'
import { Provider } from 'react-redux';
import configureStore from './components/news-redux/store/configureStore';

const store = configureStore(window.__REDUX_STATE__,window.devToolsExtension && window.devToolsExtension());
ReactDOM.render(
    <Provider store = { store }>
        <Router history={browserHistory}>
            <Route path="/" component={News} />
            <Route path="/article/:articleId" component={NewsArticle}/>
        </Router>

    </Provider>
    ,
    document.getElementById('content')
);