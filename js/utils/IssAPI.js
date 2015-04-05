var jQuery = require('jquery-browserify');

module.exports = {
    get: function (callback) {
        jQuery.ajax({
            url: 'http://api.open-notify.org/iss-now.json',
            dataType: 'jsonp',
            success: function(data){
                callback({
                    latitude: data.iss_position.latitude,
                    longitude: data.iss_position.longitude
                });
            }
        });
    }
};