/**
 * Created by Marco on 06.05.2015.
 */

'use strict';

var circle = require('./modules/circle.js');

exports.startApplication = function() {
    return 'Application started... The area of a circle of radius 4 is ' + circle.area(4);
}

/**
 * Method Invocation Pattern
 */
var myPerson = {
    name: null,
    setName: function (name) {
        this.name = name;
    },
    getName: function () {
        return this.name;
    }
};

/**
 * Function Invocation Pattern
 */

/**
 * Constructor Invocation Pattern
 */
// the constructor
var Person = function (string) {
    this.name = string;
};

// add a function
Person.prototype.getName = function () {
    return this.name;
};

/**
 * Apply Invocation Pattern
 */

/**
 * Library
 * Source: http://checkman.io/blog/creating-a-javascript-library/
 */
function Library() {

}
