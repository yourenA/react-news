/**
 * @author 戴家儒 2016/10/27.
 */
var React=require('react');
var sorts=[{key:1,value:'头条'},{key:2,value:'娱乐'},{key:3,value:'军事'},{key:4,value:'汽车'},{key:5,value:'财经'},{key:6,value:'笑话'}, {key:7,value:'体育'},{key:8,value:'科技'}];
var NewsSorts=React.createClass({
    handleSortsClick:function (sort) {
        this.props.changeSorts(sort);
    },
    render:function () {
        var activeStyle='';
        /**
         * @function
         * 遍历每一个新闻类型里的每一项
         * @return  每一项的DOM节点
         */
        var sortsList=sorts.map(function (item,index) {
            if(this.props.sort==item.key){
                activeStyle='red';
            }else{
                activeStyle='';
            }
            return(
                <li key={index} style={{color:activeStyle}} onClick={this.handleSortsClick.bind(this,item.key)}>
                    {item.value}
                </li>
            );
        }.bind(this));
        return(
            <div className="NewsSorts" >
                <ul>
                    {sortsList}
                </ul>
            </div>
        );
    }
});

module.exports=NewsSorts;