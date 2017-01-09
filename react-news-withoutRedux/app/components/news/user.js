/**
 * Created by Administrator on 2016/9/22.
 */
var $ = require('jquery');
function User(name) {
    this.name = name;
    this.followers = 0;
    this.fetch=function () {
        return $.ajax({
            url: 'https://api.github.com/users/' + this.name,
            method: 'get',
            dataType: 'json',

        }).then(function(data){
            console.log(data)
            this.followers = data.followers;
        }.bind(this));
    };
}

module.exports = User;