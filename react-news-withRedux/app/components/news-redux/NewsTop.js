/**
 * @author 戴家儒 2016/10/27.
 */
var React=require('react');
var NewsTop=React.createClass({
    render:function () {
        var title=this.props.title;
        return(
            <div className="top">
                {this.props.children}
                {title}
            </div>
        );
    }
});

module.exports=NewsTop;