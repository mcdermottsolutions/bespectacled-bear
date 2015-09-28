module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // set package.json
    pkg: grunt.file.readJSON('package.json'),

    // sass
    sass: {
      dist: {
        options: {                       // Target options
          style: 'expanded'
        },
        files: [{
          expand: true,
          cwd: 'src/scss',
          src: '*.scss',
          dest: 'dist/css',
          ext: '.css'
        }]
      }
    },

    // cssmin (combines all css files into a single css file)
    cssmin: {
      combine: {
        files: {
          'dist/css/style.min.css': 'dist/css/*.css',
        }
      }
    },

    // babel
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

    // uglify (minifies all js)
    uglify: {
      dynamic_mappings: {
        // Grunt will search for "**/*.js" under "lib/" when the "uglify" task
        // runs and build the appropriate src-dest file mappings then, so you
        // don't need to update the Gruntfile when files are added or removed.
        files: [
          {
            expand: true,     // Enable dynamic expansion.
            cwd: 'dist/js',      // Src matches are relative to this path.
            src: ['**/*.js'], // Actual pattern(s) to match.
            dest: 'dist/js',   // Destination path prefix.
            ext: '.min.js',   // Dest filepaths will have this extension.
            extDot: 'first'   // Extensions in filenames begin after the first dot
          },
        ],
      },
    },

    clean: {
      build: {
        src: ['dist']
      }
    },

    copy: {
      main: {
        expand: true,
        cwd: 'src/',
        src: ['*','img/*'],
        dest: 'dist/',
        filter: 'isFile',
      },
    },


  });

  // // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['clean','sass','cssmin','babel','uglify','copy']);

};
