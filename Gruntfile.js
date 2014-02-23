module.exports = function(grunt) {

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// Define grunt config

	grunt.initConfig({

		pkg                         : grunt.file.readJSON('package.json')

		,staticBaseUriCss           : '/static'


		////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		// Output destinations

		,buildPath                  : 'static/build'
		,tmpPath                    : '<%=buildPath%>/tmp'
		,destCss                    : '<%=buildPath%>'
		,fileName                   : 'styles'


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
			all: {
				options: {}
				,src                : '<%=sources.styles%>'
				,dest               : '<%=tmpPath%>/@import.less'
			}
		}

		,less: {
			options: {
				banner              : "@static-base: '<%=staticBaseUriCss%>';"
				,imports: {
					reference       : ['../../lib/reference/*.less']
				}
			},
			plain: {
				src                 : '<%=tmpPath%>/@import.less'
				,dest               : '<%=destCss%>/<%=fileName%>.css'
			},
			min: {
				options: {
					cleancss        : true
				}
				,src                : '<%=tmpPath%>/@import.less'
				,dest               : '<%=destCss%>/<%=fileName%>.min.css'
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

	grunt.registerTask('build-css', ['less_imports:all', 'less']);


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
