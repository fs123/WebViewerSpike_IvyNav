/**
 * Created by Marco on 06.05.2015.
 */

var app = require('../src/Application');

describe('Application Start', function() {
    it('starts the application', function() {
        expect(app.startApplication()).toContain('Application started');
    });
});