module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    cssmin: {
      combine: {
        files: {
          'dist/css/style.min.css': 'src/css/*.css',
        }
      }
    },

    "babel": {
        "options": {
            "sourceMap": true,
            "experimental": true
        },
        dist: {
            files: [{
                "expand": true,
                "cwd": "src/js/",
                "src": ["**/*.es6"],
                "dest": "dist/js",
                "ext": ".js"
            }]
        }
    },

  });

  // // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-babel');

  // Default task(s).
  grunt.registerTask('default', ['cssmin','babel']);

};
