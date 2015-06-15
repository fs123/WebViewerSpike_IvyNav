/**
 * Created by Marco on 31.05.2015.
 */
'use strict';

var Viewer = require('../../node_modules/bpmn-js/lib/Viewer');

function IvyViewer(options) {

    var test = Viewer.call(this, options);

    console.log(test);
    console.log(Viewer);

    //Viewer.on('element.dblclick', function(event) {
    //    console.log('[IvyViewer] navigate event: ' + event);
    //});
}

module.exports = IvyViewer;

IvyViewer.prototype = Object.create(Viewer.prototype);

IvyViewer.prototype._ivyModules = [
    require('../IvyNav')
];

IvyViewer.prototype._modules = [].concat(
    IvyViewer.prototype._modules,
    IvyViewer.prototype._ivyModules
);