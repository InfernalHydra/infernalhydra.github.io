var gulp = require('gulp');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');

gulp.task('default', function() {
    var templateData = {
        portfolio: [
            {
                "name" : "Forward Tutoring",
                "description" : "A website that provides free online tutoring. Made numerous improvements to the administrative managing tools and the backend.",
                "url" : "https://github.com/garrettgu10/forward-tutoring"
            },
            {
              "name" : "SnapPack",
              "description" : "A mobile application to help travelers pack.  Won best use of Google Cloud Services at HackTX 2019",
              "url" : "https://github.com/InfernalHydra/SnapPack"
            },
            {
              "name" : "Survey",
              "description" : "A custom survey maker to help keep track of visitors, complete with health alerts and rudimentary contact tracing",
              "url" : "https://github.com/InfernalHydra/SnapPack"
            },
            {
              "name" : "Want to see more?",
              "description" : "Check out my Github below!",
              "url" : "https://github.com/InfernalHydra/"
            }
        ],
    };

    var options = {

    }

    return gulp.src('index.handlebars')
               .pipe(handlebars(templateData))
               .pipe(rename('index.html'))
});