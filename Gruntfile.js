/**
 * Created by Marco on 05.05.2015.
 */

module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        config: {
            dist: 'C:/Users/Marco/development/htdocs/<%= pkg.name %>'
        },
        copy: {
            main: {
                files: [
                    // demo files
                    {expand: true, src: ['demo/*'], dest: '<%= config.dist %>'},
                    // bower dependencies
                    {expand: true, src: ['bower_components/**'], dest: '<%= config.dist %>'},
                    // example BPMN file
                    {expand: true, src: ['resources/*'], dest: '<%= config.dist %>'}
                ]
            },
            gugus: {
                src: 'demo/*',
                dest: 'dest/'
            }
        },
        watch: {
            main: {
                files: ['demo/*'],
                tasks: ['copy:gugus']
            }
        },
        karma: {
            single: {
                singleRun: true,
                autoWatch: false,
                configFile: 'test/karma.conf.js'
            },
            unit: {
                configFile: 'test/karma.conf.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-karma');
};