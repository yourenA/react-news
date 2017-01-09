/**
 * Created by Administrator on 2016/10/26.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware,compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import News from './components/news-redux/index';
import rootReducer from "./components/news-redux/reducer/NewsReducer";
require('./../css/mobile.css');
require('./components/news-redux/News.scss');
const enhancer = compose(
    //DevTools.instrument()
);
//创建携带所传入中间件的store
var loggerMiddleware = createLogger();
var createStoreWithMiddleware = applyMiddleware(thunkMiddleware, loggerMiddleware)(createStore);
var store = createStoreWithMiddleware(rootReducer,enhancer);
var unsubscribe = store.subscribe( () => console.log(store.getState()) );

ReactDOM.render(
    <Provider store = { store }>
        <div>
            <News/>
        </div>

    </Provider>
    ,
    document.getElementById('content')
);