/**
 * Created by Marco on 25.05.2015.
 */



exports.area = function(r) {
    return PI * r * r;
};

exports.circumference = function(r) {
    return 2 * PI * r;
};

var Circle = function() {
    var PI = Math.PI;
};

Circle.prototype = {
    area: function(r) {
        return this.PI * r * r;
    },
    circumference: function(r) {
        return 2 * this.PI * r;
    }
}

module.exports = Circle;