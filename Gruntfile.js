module.exports = function(grunt) {
  'use strict';
  grunt.initConfig({

    sass: {
      dist: {
        options: {
          style: 'expanded',
          compass: true,
          sourcemap: true,
//          require: ['susy']
        },
        files: {
          'css/style.css': 'scss/style.scss'
        }
      }
    },

    autoprefixer: {
      options: {
        browsers: ['last 3 version', 'ie 8', 'ie 9', 'Opera 12.1']
      },
      my_styles: {
        src: 'css/style.css',
        dest: 'css/style.css'
      }
    },

    cssmin: {
      add_banner: {
        options: {
          banner: '/* Futura Template */'
        },
        files: {
          'css/style.min.css': [
            'css/style.css',
            'bower_components/animate.css/animate.css'
          ]
        }
      }
    },

    watch: {
      css: {
        files: 'scss/**/*.scss',
        tasks: ['styles'],
        options: {
          livereload: true
        }
      },
      scripts: {
        files: ['js/*.js'],
        tasks: ['scripts'],
        options: {
          spawn: false
        }
      }
    },

    concat: {
      main: {
        src: [
          'bower_components/jquery/dist/jquery.js',
          'bower_components/jquery.easing/js/jquery.easing.js',
          'bower_components/jquery-waypoints/waypoints.js',
          'bower_components/glidejs/dist/jquery.glide.js',
          'bower_components/isotope/dist/isotope.pkgd.js',
          'bower_components/modernizr/modernizr.js',
          'js/jquery.keeptherhythm.js',
          'js/develop.js'
        ],
        dest: 'js/app.js'
      }
    },

    uglify: {
      dist: {
        options: {
          baner: 'Futura Template by Roman Lyadnov | 2014'
        },
        files: {
          'js/app.min.js': ['js/app.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-newer');

  grunt.registerTask('styles', ['sass', 'autoprefixer', 'cssmin']);
  grunt.registerTask('scripts', ['concat', 'uglify']);
  grunt.registerTask('default', ['sass', 'autoprefixer', 'cssmin', 'concat', 'uglify', 'watch']);
};
