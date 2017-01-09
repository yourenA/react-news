/**
 * Created by Administrator on 2016/10/31.
 */
//事件action
import $ from 'jquery'
export const LOADING_NEWS_SUCCESS = "LOADING_NEWS_SUCCESS";
export const LOADING_NEWS_REQUEST = "LOADING_NEWS_REQUEST";
export const CHANGE_PAGE = "CHANGE_PAGE";
export const CHANGFE_LOADING = "CHANGFE_LOADING";
export const CHANGFE_SORTS = "CHANGFE_SORTS";

//action创建函数

//异步action会被redux-thunk中间件拦截，传入dispatch，getState等参数后执行
export function loadingNews(sort, page) {

    return function (dispatch, getState) {
        dispatch({type: LOADING_NEWS_REQUEST, loading: true});
        $.ajax({
            url: 'http://api.dagoogle.cn/news/get-news?tableNum=' + sort + '&pagesize=10&page=' + page + '',
            type: 'GET',
            dataType: 'jsonp',
            success: function (data) {
                if (data.status == 200) {
                    dispatch({type: LOADING_NEWS_SUCCESS, data: data.data, newsSorts: sort,page:page, loading: false});
                }

            }.bind(this),
            error: function () {
                console.log('出错了');
            }.bind(this)
        });
    }
}
