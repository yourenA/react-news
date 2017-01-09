/**
 * Created by Administrator on 2016/10/31.
 */
import { combineReducers } from "redux";
import { LOADING_NEWS, CHANGE_PAGE, CHANGFE_LOADING, CHANGFE_SORTS } from "../action/NewsActions";

function news(state ={data:[],sort:1}, action){
    switch(action.type){
        case LOADING_NEWS:
            console.log(state.sort+'&'+action.sort)
            if(state.sort == action.sort){
                return { data:state.data.concat([...action.data]),sort:action.sort } ;
            }else{
                state={data:[]};
                return { data:[...action.data] ,sort:action.sort } ;

            }

        default:
            return state;
    }
}

const rootReducer = combineReducers({ news });
export default rootReducer;