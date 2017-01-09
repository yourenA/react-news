/**
 * Created by Administrator on 2016/9/22.
 */
var $ = require('jquery');
function parseUserJson(userJson) {
    return {
        loggedIn: true,
        fullName: userJson.firstName + ' ' + userJson.lastName
    };
}
function fetchCurrentUser(callback) {
    return $.ajax({
        type: 'GET',
        url: 'http://example.com/currentUser',
        success: function(userJson) {
                callback(parseUserJson(userJson));
        }
    });
}
module.exports = fetchCurrentUser;