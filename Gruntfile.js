module.exports = function(grunt) {

  grunt.initConfig({

    cacheBust: {
      options: {
        assets: ['static/css/*.css', 'static/js/*.js'],
        baseDir: 'app/'
      },

      taskName: {
        files: [{
          expand: true,
          cwd: 'app/templates',
          src: ['**/*.html']
        }]
      }
    }

  });

  grunt.loadNpmTasks('grunt-cache-bust');

}
