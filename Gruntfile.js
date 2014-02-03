module.exports = function(grunt) {

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// Define grunt config

	grunt.initConfig({

		pkg                         : grunt.file.readJSON('package.json')

		,staticBaseUriCss         : ''


		////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		// Output destinations

		,buildPath                  : 'build'
		,tmpPath                    : '<%=buildPath%>/tmp'
		,destCss                    : '<%=buildPath%>'


		////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		// Define source file patterns

		,sources: {
			styles: [
				 'lib/*.{less,css}'
				,'*.less'
			]
		}


		////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		// Configure Grunt plugins

		,less_imports: {
			base: {
				options: {}
				,src                : '<%=sources.styles%>'
				,dest               : '<%=tmpPath%>/@import.less'
			}
		}

		,less: {
			base: {
				options: {
					 banner         : "@static-base: '<%=staticBaseUriCss%>';"
					,imports: {
						reference   : ['../../lib/reference/*.less']
					}
				}
				,src                : '<%=tmpPath%>/@import.less'
				,dest               : '<%=destCss%>/styles.css'
			}
		}

		,watch: {
			base: {
				 files              : ['<%=sources.styles%>', 'lib/reference.less']
				,tasks              : ['build-css']
			}
			,gruntfile: {
				 files              : ['Gruntfile.js']
				,tasks              : 'default'
			}
		}
	});


	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// Define build tasks                            // use actual task name (first part before colon)!

	grunt.registerTask('build-css',         ['less_imports:base', 'less:base']);


	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// Define the build pipes

	var task = [
		 'build-css'
		,'watch'
	];

	grunt.registerTask('default', task);


	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// Load grunt plugins

	grunt.loadNpmTasks('grunt-less-imports');
	grunt.loadNpmTasks('assemble-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

};
