module.exports = function(grunt) {

	// -----------------------------------------------------------
	//
	// Getting Started:
	//
	// (1) NPM Install the required dependencies in the
	//     package.json dir to ./node_modules (npm install)
	//
	// (2) Install bower globally (npm install -g bower)
	//
	// (3) Install bootstrap (bower install bootstrap)
	//
	// (4) Run 'grunt' in the command line
	//
	// Note: js/libs should be symlinking to specific files
	//       in node_module directories
	//
	// -----------------------------------------------------------

	// Load NPM Tasks
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		less: {
			main: {
				files: {
					'css/all.css': [
						'less/all.less'
					]
				}
			}
		},
		uglify: {
			main: {
				files: {
					'js/build.js': [
						'js/libs/jquery.js',
						'js/main.js'
					]
				}
			}
		},
		watch: {
			css: {
				files: ['less/**'],
				tasks: 'less'
			},
			js: {
				files: ['js/**'],
				tasks: 'uglify'
			}
		}
	});

	grunt.registerTask('default', ['less', 'uglify']);
};
