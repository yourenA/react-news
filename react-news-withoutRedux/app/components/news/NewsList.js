/**
 * Created by Administrator on 2016/10/26.
 */
var React=require('react');
var NewsItem=require('./NewsItem');
var NewsList=React.createClass({
    render:function () {
        var sort=this.props.sort;
        var data=this.props.data;
        var datas='';
        if(data.length){
            datas=data.map(function (item,index) {
                return(
                    <NewsItem sort={sort} item={item} key={index} />
                );
            });
        }

        return(
            <ul className="NewsList">
                { datas }
            </ul>
        );
    }
});

module.exports=NewsList;