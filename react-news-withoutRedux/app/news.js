/**
 * Created by Administrator on 2016/10/26.
 */
var  React = require('react');
var  ReactDOM = require('react-dom');
var News=require('./components/news/index');
require('./../css/mobile.css');
require('./components/news/News.scss');
ReactDOM.render(
    <div>
        <News/>
    </div>
    ,
    document.getElementById('content')
);