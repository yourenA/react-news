/**
 * Created by Administrator on 2016/10/26.
 */
var React=require('react');
var NewsItem=React.createClass({
    handleAClick:function(news_id,content,title){
        sessionStorage.setItem(news_id, content);
        sessionStorage.setItem(news_id+'_title', title);
        console.log('title',title)
    },
    render:function () {

        var  sort=this.props.sort;
        var item=this.props.item;
        var title=item.title;
        var top_image=item.top_image;
        var source=item.source;
        var content=item.content;
        var news_id=item.news_id;
        var edit_time=item.edit_time;
        var timestamp =edit_time;
        var d = new Date(timestamp * 1000);    //根据时间戳生成的时间对象
        var date = (d.getFullYear()) + '-' +
            (d.getMonth() + 1) + '-' +
            (d.getDate()>10?d.getDate():'0'+d.getDate()) + ' ' +
            (d.getHours()>10?d.getHours():'0'+d.getHours()) + ':' +
            (d.getMinutes()>10?d.getMinutes():'0'+d.getMinutes()) + ':' +
            (d.getSeconds()>10?d.getSeconds():'0'+d.getSeconds());
        /**
         * @description  根据获得的新闻类型sort不同来显示不同的DOM结构
         * */
        if (sort==2){
            if(item.text_image0 != ''&& item.text_image1 != '') {
                return (
                    <li className="item">
                        <div className="item_left2">
                            <p className="title"><a
                                onClick={this.handleAClick.bind(this, news_id, content, title)}>{title}</a></p>
                        </div>
                        <div className="item_bottom_pic">
                            <img className="three_pic" src={top_image} alt=""/>
                            <img className="three_pic" src={item.text_image0} alt=""/>
                            <img className="three_pic" src={item.text_image1} alt=""/>
                        </div>
                        <p className="item_bottom"><span className="source">{source}</span><span
                            className="edit_time">{date}</span></p>
                    </li>
                );
            }else{
                return(
                    <li className="item">
                        <div className="item_left">
                            <p className="title"><a  onClick={this.handleAClick.bind(this,news_id,content,title)}>{title}</a></p>
                            <p className="item_bottom"><span className="source">{source}</span><span className="edit_time">{date}</span></p>
                        </div>
                        <div className="item_right">
                            <img className="top_image" src={top_image} alt=""/>
                        </div>
                    </li>
                );
            }

        }else if (sort==6){
            return (
                <li className="item">
                    <div className="item_left2">
                        <p className="title">{title}</p>
                    </div>
                    <div className="joke">
                        {item.digest}
                    </div>
                    <p className="item_bottom"><span className="source">{source}</span></p>
                </li>
            );
        }else{
            return(
                <li className="item">
                    <div className="item_left">
                        <p className="title"><a  onClick={this.handleAClick.bind(this,news_id,content,title)}>{title}</a></p>
                        <p className="item_bottom"><span className="source">{source}</span><span className="edit_time">{date}</span></p>
                    </div>
                    <div className="item_right">
                        <img className="top_image" src={top_image} alt=""/>
                    </div>
                </li>
            );
        }

    }
});

module.exports=NewsItem;