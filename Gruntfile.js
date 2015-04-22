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
					'public/css/all.css': [
						'public/less/all.less'
					]
				}
			}
		},
		uglify: {
			main: {
				files: {
					'public/js/build.js': [
						'node_modules/jquery/dist/jquery.js',
						'public/js/main.js'
					]
				}
			}
		},
		watch: {
			css: {
				files: ['public/less/**'],
				tasks: 'less'
			},
			js: {
				files: ['public/js/**'],
				tasks: 'uglify'
			}
		}
	});

	grunt.registerTask('default', ['less', 'uglify']);
};
