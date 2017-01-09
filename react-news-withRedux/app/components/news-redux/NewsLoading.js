/**
 * Created by Administrator on 2016/10/26.
 */
var React=require('react');
var NewsLoading=React.createClass({
    /**
     * @function handleClick
     * 加载下一页新闻数据
     * @params {number} page   -当前的页数
     */
    handleClick:function (page) {
        page=page+1;
        this.props.changePage(page);
    },
    render:function () {
        var curPage=this.props.page;
        return(
            <div className="NewsLoading" onClick={this.handleClick.bind(this,curPage)}>
                <p>点击加载更多...</p>
            </div>
        );
    }
});

module.exports=NewsLoading;