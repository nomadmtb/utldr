module.exports = function(grunt) {

  grunt.initConfig({

    cacheBust: {
      options: {
        assets: ['static/css/*.css', 'static/js/*.js', 'static/img/*.ico'],
        baseDir: './app/',
        separator: '.',
        deleteOriginals: true
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
