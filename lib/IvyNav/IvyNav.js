/**
 * Created by Marco on 31.05.2015.
 */
'use strict';

function IvyNav(eventBus) {

    eventBus.on('element.dblclick', function(event) {
        console.log('[IvyNav] navigate event: ' + event);
    });

}

IvyNav.$inject = [ 'eventBus' ];

module.exports = IvyNav;