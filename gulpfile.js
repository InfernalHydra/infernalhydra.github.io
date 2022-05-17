var gulp = require('gulp');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');

var dependencies = [
    "node_modules/@fortawesome/fontawesome-free/js/all.js",
    "node_modules/animejs/lib/anime.min.js"
];

var files = [
    "css/*.*",
    "js/*.*",
    "public/*.*"
]

function compileHandlebars() {
    let rawData =
        [
            {
                "name" : "Forward Tutoring",
                "description" : "A website that provides free online tutoring. Made improvements to the administrative tools and the backend.",
                "url" : "https://github.com/garrettgu10/forward-tutoring"
            },
            {
                "name" : "SnapPack",
                "description" : "A mobile application to help travelers pack using machine learning.  Won best use of Google Cloud Services at HackTX 2019",
                "url" : "https://github.com/InfernalHydra/SnapPack"
            },
            {
                "name" : "Survey",
                "description" : "A custom survey maker to help keep track of visitors, complete with health alerts and rudimentary contact tracing",
                "url" : "https://github.com/InfernalHydra/SnapPack"
            },
    ];

    let cards = [[], [], []];
    for(let i = 0; i < rawData.length; i++) {
        cards[i % cards.length].push(rawData[i]);
    }

    // console.log(cards);

    let templateData = {
        cards
    };

    let options = {
        ignorePartials : true,
        partials : {
            card :
            `
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">
                        {{card.name}}
                    </p>
                </header>
                <div class="card-content">
                    <div class="content">
                        {{card.description}}
                    </div>
                </div>
                <footer class="card-footer">
                    <a href="{{card.url}}" target="_blank" class="card-footer-item">Project Page</a>
                </footer>
            </div>
            `
        }
    }

    return gulp.src('index.handlebars')
               .pipe(handlebars(templateData, options))
               .pipe(rename('index.html'))
               .pipe(gulp.dest('docs'));
}

function copyDependencies() {
    return gulp.src(dependencies)
               .pipe(gulp.dest('docs/js/'))
}
function copyOtherFiles() {
    return gulp.src(files, {base: './'})
               .pipe(gulp.dest('docs'))
}

exports.default = gulp.parallel(compileHandlebars, copyDependencies, copyOtherFiles)