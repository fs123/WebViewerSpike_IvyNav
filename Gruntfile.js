/**
 * Created by Marco on 05.05.2015.
 */
'use strict';

module.exports = function (grunt) {

    //grunt.loadNpmTasks('grunt-contrib-copy');
    //grunt.loadNpmTasks('grunt-contrib-watch');
    //grunt.loadNpmTasks('grunt-karma');

    // the above (uncommented) tasks can be put together if load-grunt-tasks is installed:
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        config: {
            dist: 'C:/Users/Marco/development/htdocs/<%= pkg.name %>'
        },

        clean: ['./output/'],

        browserify: {
            options: {
                watch: false,
                browserifyOptions: {
                    debug:true // include source maps.
                },
                transform: [ 'brfs' ]
            },
            dev: {
                expand: true,
                src: ['./lib/**/*.js', './demo/**/*.js'],
                dest: './output/',
                options: {
                    keepAlive: false
                }
            },
            package: {
                expand: true,
                src: ['./lib/**/*.js', './demo/**/*.js'],
                dest: './output/',
                options: {
                    keepAlive: false
                }
            }
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
            demo: {
                files: [
                    // includes files within path
                    {expand: true, src: ['resources/**/*'], dest: 'output/'},
                    {expand: true, src: ['demo/**/*', '!**/*.js'], dest: 'output/'}
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

    grunt.registerTask('build', ['clean', 'browserify:package', 'copy:demo']);
};