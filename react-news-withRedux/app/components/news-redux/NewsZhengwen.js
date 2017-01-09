/**
 * Created by Administrator on 2016/10/26.
 */

var React=require('react');
var Mask=require('./Mask');
var NewsTop=require('./NewsTop');
var BackTop=require('./BackTop');

var NewsZhengwen=React.createClass({
    getInitialState:function(){
        return{
            showMask:false,
            imgUrl:'',
            picPos:''
        };
    },
    handleMaskClick:function () {
        this.setState({
            showMask:!this.state.showMask,
        });
    },
    componentDidMount:function () {
        var params=this.GetQueryString('news_id');
        var content=sessionStorage.getItem(params);
        var title=sessionStorage.getItem(params+'_title');
        this.refs.content.innerHTML='<p class="title">'+title+'</p>'+content;

        document.getElementById('zhengwen').addEventListener('click',function (e) {
            var source = e.target || e.srcElement;
            /**
            * 事件委托，如果点击的是图片则执行下面操作
             * */
            if(source.nodeName.toLocaleLowerCase() =='img'){
                console.log(source.src);
                this.setState({
                    showMask:!this.state.showMask,
                    imgUrl:source.src
                });
                /**
                 * @static winProportion 获得屏幕高度与宽度的比
                 * @static winProportion 获得图片高度与宽度的比
                 * */
                var winProportion=window.innerHeight/window.innerWidth;
                var picProportion=source.offsetHeight/source.offsetWidth;
                /**
                 * 根据两个高宽比改变图片的位置*/
                if (winProportion>picProportion){
                    this.setState({
                        picPos:'hengxiang'
                    });
                }else{
                    this.setState({
                        picPos:'shuxiang'
                    });
                }
            }
        }.bind(this));

    },
    /**
     * @function GetQueryString
     * 改变显示新闻的类型
     * @param {string} name     - 需要在URL上查找的参数.
     * @return {string}  - 在地址栏上获得的值
     */
    GetQueryString:function (name)
    {
        var reg = new RegExp('(^|&)'+ name +'=([^&]*)(&|$)');
        var r = window.location.search.substr(1).match(reg);
        if(r!=null){
            return  unescape(r[2]);
        }
    },
    handleBack:function () {
        history.back();
    },
    render:function () {
        return(
            <div>
                <NewsTop title="新闻正文">
                    <span className="left" onClick={this.handleBack}></span>
                </NewsTop>
                <div id="zhengwen" className="content" ref="content">

                </div>
                <Mask picPos={this.state.picPos} handleMaskClick={this.handleMaskClick} showMask={this.state.showMask} imgUrl={this.state.imgUrl} >

                </Mask>
                <BackTop/>
            </div>

        );
    }
});

module.exports=NewsZhengwen;