/**
 * Created by Administrator on 2016/10/31.
 */
import { combineReducers } from "redux";
import { LOADING_NEWS_SUCCESS,LOADING_NEWS_REQUEST, CHANGE_PAGE, CHANGFE_LOADING, CHANGFE_SORTS } from "../action/NewsActions";

function news(state ={data:[],lading:true,newsSorts:1,page:1}, action){
    switch(action.type){
        case LOADING_NEWS_REQUEST:
            return Object.assign({},state,{loading:action.loading});
        case LOADING_NEWS_SUCCESS:
            console.log(state.newsSorts+'&'+action.newsSorts)
            if(state.newsSorts == action.newsSorts){
                return  Object.assign({},state,{ data:state.data.concat([...action.data]),newsSorts:action.newsSorts ,loading:action.loading,page:action.page}) ;
            }else{
                state={data:[]};
                return Object.assign({},state, { data:[...action.data] ,newsSorts:action.newsSorts,loading:action.loading ,page:action.page}) ;

            }
        default:
            return state;
    }
}

const rootReducer = combineReducers({ news });
export default rootReducer;