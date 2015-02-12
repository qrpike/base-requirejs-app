


module.exports = function (grunt) {

	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	// Define the configuration for all the tasks
	grunt.initConfig({
		// Project settings
		config: {
			app: 'app',
			buildDir: 'building'
		},
		less: {
			development: {
				options: {
					compress: false,
					yuicompress: false,
					optimization: 2
				},
				files: {
					// target.css file: source.less file
					"<%=config.app%>/style/css/site.css": "<%=config.app%>/style/site.less"
				}
			},
			production: {
				options: {
					compress: true,
					yuicompress: true,
					optimization: 2
				},
				files: {
					// target.css file: source.less file
					"<%=config.buildDir%>/style/css/site.css": "<%=config.app%>/style/site.less"
				}
			}
		},
		"bower-install-simple": {
			options: {
				color: true,
				directory: "<%=config.app%>/packages"
			},
			dev: {
				options: {
					production: false
				}
			}
		},
		copy: {
			app: {
				expand: true,
				cwd: 'app/',
				src: '**',
				dest: '<%=config.buildDir%>',
			},
		},
		rename: {
			builddone: {
				src: 'building',
				dest: 'build'
			}
		},
		clean: {
			building: ['building'],
			build: ['build']
		},
		// Watches files for changes and runs tasks based on the changed files
		watch: {
			options: {
				livereload: 35728
			},
			app: {
				tasks: ['newer:less:development'],
				files: [
					'<%=config.app%>/*.html',
					'<%=config.app%>/**/*.js',
					'<%=config.app%>/**/*.less',
					'<%=config.app%>/**/*.html',
					'<%=config.app%>/**/*.css',
					'!<%=config.app%>/packages/**'
				],
				options: {
					nospawn: true,
					livereload: 35728
				}
			}
		},
		// The actual grunt server settings
		connect: {
			app: {
				options: {
					port: 7701,
					useAvailablePort: true,
					livereload: 35728,
					hostname: 'localhost',
					open: true,
					base: [
						'<%=config.app%>/'
					]
				},
			}
		},
		requirejs: {
			options: {
				waitSeconds : 0,
				baseUrl: "app/js",
				generateSourceMaps : false,
				preserveLicenseComments : false,
				// inlineText : true,
				optimize: "uglify2",
				findNestedDependencies : true,
				optimizeAllPluginResources: true,
			},
			index: {
				options: {
					out: '<%=config.buildDir%>/js/index.js',
					mainConfigFile: ["app/js/require-config.js", "app/js/index.js"],
					name: "index",
				}
			}
		}
	});

	grunt.registerTask('serve', function (target) {
		grunt.task.run([
			'bower-install-simple',
			'less:development',
			'connect:app',
			'watch:app',
		]);
	});

	grunt.registerTask('default', ['watch']);
	grunt.registerTask('build', [
		'clean:building',
		'bower-install-simple',
		'copy',
		'less:production',
		'requirejs',
		'clean:build',
		'rename'
	]);
	
	grunt.registerTask("bower", [ "bower-install-simple" ]);

};


