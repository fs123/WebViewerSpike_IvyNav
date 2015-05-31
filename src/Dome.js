/**
 * Created by Marco on 03.05.2015.
 */

dome = (function() {

    function Dome (els) {
        for(var i = 0; i < els.length; i++) {
            this[i] = els[i];
        }
        this.length = els.length;
    }

    Dome.prototype.map = function(callback) {
        var results = [], i = 0;
        for( ; i < this.length; i++) {
            results.push(callback.call(this, this[i], i));
        }
        return results;
    };

    Dome.prototype.forEach = function(callback) {
        this.map(callback);
        return this;
    };

    Dome.prototype.mapOne = function(callback) {
        var m = this.map(callback);
        return m.length > 1 ? m : m[0];
    };

    Dome.prototype.text = function(text) {
        if(typeof text !== "undefined") {
            return this.forEach(function(el) {
                el.innerText = text;
            });
        } else {
            return this.mapOne(function(el) {
                return el.innerText;
            });
        }
    };

    Dome.prototype.html = function(html) {
        if(typeof html !== "undefined") {
            return this.forEach(function(el) {
                el.innerText = html;
            });
        } else {
            return this.mapOne(function(el) {
                return el.innerText;
            });
        }
    };

    dome = {
        get: function(selector) {
            var els;
            if(typeof selector === "string") {
                // string, select nodes by query string
                els = document.querySelectorAll(selector);
            } else if (selector.length) {
                // array, adopt it directly
                els = selector;
            } else {
                // single element, put it into an arry
                els = [selector];
            }
            return new Do;   me(els);
        }
    };

    return dome;
}());