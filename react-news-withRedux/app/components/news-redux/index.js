/**
 * @author 戴家儒 2016/10/24.
 */
var React=require('react');
import { loadingNews,changeSorts } from "./action/NewsActions";
import { connect } from "react-redux";
var NewsTop=require('./NewsTop');
var NewsSorts=require('./NewsSorts');
var NewsList=require('./NewsList');
var NewsLoading=require('./NewsLoading');
var Loading=require('./Loading');
var BackTop=require('./BackTop');
/**
 * @class News
 * News组件，表示一整个新闻组件.
 */
var News=React.createClass({
    /**
     * @function componentDidMount
     * 组件挂载完成
     */
    componentDidMount:function () {
        const { news } = this.props;
        this.props.dispatch( loadingNews(news.newsSorts,news.page) );
    },

    /**
     * @function changeSorts
     * 改变显示新闻的类型
     * @param {number} sort     - 新闻类型.
     */
    changeSorts:function (sort) {
        this.props.dispatch( loadingNews(sort,1) );

    },

    /**
     * @function changePage
     * 改变新闻加载的页数
     * @param {number} page   - 新闻页数.
     */
    changePage:function (page) {
        const { news } = this.props;
        this.props.dispatch( loadingNews(news.newsSorts,page) );

    },

    /**
     * @function changeLoading
     * 更改Loading组件的显示与隐藏
     */
    changeLoading:function () {
        this.setState({
            loading:!this.state.loading
        });
    },

    render:function () {
        const { news } = this.props;
        return(
            <div>
                <NewsTop title='新闻列表2'/>
                <NewsSorts sort={news.newsSorts} changeSorts={this.changeSorts}/>
                <Loading loading={news.loading}/>
                <NewsList  sort={news.newsSorts} data={news.data} />
                <NewsLoading changeLoading={this.changeLoading} changePage={this.changePage} page={news.page}/>
                <BackTop />
            </div>
        );
    }
});
/**
 * @exports News
 */

function select(state){
    return{
        news : state.news
    }
}

export default connect(select)(News);