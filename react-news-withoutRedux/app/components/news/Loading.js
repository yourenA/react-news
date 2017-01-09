/**
 * Created by Administrator on 2016/10/26.
 */
var React=require('react');
var NewsLoading=React.createClass({
    render:function () {
        var flag='';
        if(this.props.loading){
            flag='block';
        }else{
            flag='none';
        }
        return(
            <div className="loading" style={{display:flag}} >
            </div>
        );
    }
});

module.exports=NewsLoading;