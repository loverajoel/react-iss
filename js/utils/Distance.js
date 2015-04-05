var Cities = require('../constants/Cities');

module.exports = {
    // http://stackoverflow.com/questions/27928/how-do-i-calculate-distance-between-two-latitude-longitude-points
    calulateDistances: function(lat1,lon1,lat2,lon2) {
        var deg2rad = function(deg) {
        return deg * (Math.PI/180);
        };
        var R = 6371;
        var dLat = deg2rad(lat2-lat1);
        var dLon = deg2rad(lon2-lon1); 
        var a = 
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
            Math.sin(dLon/2) * Math.sin(dLon/2);

        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        var d = R * c;
        return d;
    },
    getDistances: function(data) {
        var self = this;
        return Cities.map(function(city) {
            return {name: city.CapitalName, distance: Math.round(self.calulateDistances(city.latitude, city.longitude, data.latitude, data.longitude) * 100) / 100};
        });
    }
};