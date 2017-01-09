/**
 * @author 戴家儒 2016/10/24.
 */
var React=require('react');
var $ = require('jquery');
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
     *@function
     * getInitialState 初始化状态
     * @return {object}
     * @property {number}  newsSorts              - 新闻类型.
     * @property {bool}    loading                - 是否显示加载组件.
     * @property {number}  page                   - 当前新闻加载的页数.
     * @property {array}   data                   - 通过ajax获取的新闻对象数组.
     * */
    getInitialState:function(){
        return{
            newsSorts:1,
            loading:true,
            page:1,
            data:[]
        };
    },
    /**
     * @function componentDidMount
     * 组件挂载完成
     */
    componentDidMount:function () {
        this.LoadingNews(1,1);
    },

    /**
     * @function changeSorts
     * 改变显示新闻的类型
     * @param {number} sort     - 新闻类型.
     */
    changeSorts:function (sort) {
        this.setState({
            loading:true,
            data:[],
            newsSorts:sort
        });
        this.LoadingNews(sort,1);
    },

    /**
     * @function changePage
     * 改变新闻加载的页数
     * @param {number} page   - 新闻页数.
     */
    changePage:function (page) {
        this.setState({
            page:page
        });

        this.LoadingNews(this.state.newsSorts,page);
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

    /**
     * @function LoadingNews
     * 根据新闻类型和页数加载不同新闻
     * @param {number} sort     - 新闻类型
     * @param {number} page     - 新闻页数
     */
    LoadingNews:function (sort,page) {
        $.ajax({
            url:'http://api.dagoogle.cn/news/get-news?tableNum='+sort+'&pagesize=10&page='+page+'',
            type:'GET',
            dataType:'jsonp',
            success:function (data) {
                console.log(data);
                if(data.status==200){
                    this.setState({
                        loading:false,
                        data:this.state.data.concat(data.data)
                    });
                }

            }.bind(this),
            error:function () {
                console.log('出错了');
            }.bind(this)
        });
    },
    render:function () {
        return(
            <div>
                <NewsTop title='新闻列表'/>
                <NewsSorts sort={this.state.newsSorts} changeSorts={this.changeSorts}/>
                <Loading loading={this.state.loading}/>
                <NewsList  sort={this.state.newsSorts} data={this.state.data} />
                <NewsLoading changeLoading={this.changeLoading} changePage={this.changePage} page={this.state.page}/>
                <BackTop />
            </div>
        );
    }
});
/**
 * @exports News
 */
module.exports=News;