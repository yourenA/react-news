/**
 * Created by Administrator on 2016/10/26.
 */
var React=require('react');
var Mask=React.createClass({
    handleMsakClick:function () {

        this.props.handleMaskClick();

    },
    render:function () {
        var shuxiangStyle={};
        var showMask=this.props.showMask;
        var imgUrl=this.props.imgUrl;
        var MaskFlag='';
        if(showMask){
            MaskFlag='block';
        }else{
            MaskFlag='none';
        }

        var picPos=this.props.picPos;
        if(picPos=='shuxiang'){
            shuxiangStyle={
                top: '0',
                height: '100%',
                width: 'auto',
                left: '50%',
                transform: 'translate(-50%,0)'

            };
        }
        return(
            <div ref='' onClick={this.handleMsakClick} className="Mask" style={{display:MaskFlag}}>
                <img ref='maskUrl' src={imgUrl} alt="" style={shuxiangStyle}/>
            </div>
        );
    }
});

module.exports=Mask;