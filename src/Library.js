/**
 * Created by Marco on 06.05.2015.
 */

(function(window){
    'use strict';
    function define_library() {
        var Library = {};
        var name = 'ivyBPMN1';
        Library.sayHello = function() {
            console.log('Hello from the ' + name + ' library!');
        }
    }
    if(typeof(Library) === 'undefined') {
        window.Library = define_library();
    } else {
        console.log('Library already defined.');
    }

}(window));
