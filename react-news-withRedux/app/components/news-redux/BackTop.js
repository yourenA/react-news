/**
 * Created by Administrator on 2016/10/27.
 */
var React=require('react');
var moveInterval=null;
var scrollTop;
var NewsLoading=React.createClass({
    getInitialState:function(){
        return{
            showScroll:false
        };
    },
    componentDidMount:function () {
        window.onscroll=function () {
            scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            if(scrollTop>600){
                this.setState({
                    showScroll:true
                });
            }else{
                this.setState({
                    showScroll:false
                });
            }
        }.bind(this);
    },
    handleScrollTopClick:function () {
        moveInterval = setInterval(function () {
            window.scroll(0,scrollTop/1.2);
            if(scrollTop == 0){
                clearInterval(moveInterval);
            }
        }.bind(this), 30);
    },
    render:function () {
        var scrollTopFlag='none';
        if(this.state.showScroll){
            scrollTopFlag='block';
        }
        return(
            <div className="BackTop" style={{display:scrollTopFlag}} onClick={this.handleScrollTopClick}>
            </div>
        );
    }
});

module.exports=NewsLoading;