module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    cssmin: {
      combine: {
        files: {
          'html/css/main.css': ['html/css/style.css', 'html/css/style2.css']
        }
      }
    }

  });

  // // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['cssmin']);

};
