var $ = require('jQuery');

module.exports = {
    get: function(url){
        return new Promise(function(success,error){
            $.ajax({
                url:url,
                dataTypes:"json",
                success:success,
                error:error
            })
        })
    },
    post: function(url,data){
        return new Promise(function(success,error){
            $.ajax({
                url:url,
                type:"POST",
                data:data,
                success:success,
                error:error
            })
        })
    },
    delete: function(url,data){
        return new Promise(function(success,error){
            $.ajax({
                url:url,
                type:"DELETE",
                data:data,
                success:success,
                error:error
            })
        })
    },
    put: function(url,data){
        return new Promise(function(success,error){
            $.ajax({
                url:url,
                type:"PUT",
                data:data,
                success:success,
                error:error
            })
        })
    }
}