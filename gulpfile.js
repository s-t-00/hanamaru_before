"use strict";

/* require module
--------------------------------------------------------*/
const { watch, src, dest, series, parallel } = require("gulp");
const del = require("delete");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const mqpacker = require("css-mqpacker");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const nunjucksRender = require("gulp-nunjucks-render");
const prettify = require("gulp-prettify");

/* setting config
--------------------------------------------------------*/
const path = {
    src: __dirname + "/src/",
    dest: __dirname + "/dest/"
};

/* functions
--------------------------------------------------------*/
function htmlCompile() {
    return src([path.src + "html/**", "!" + path.src + "html/_layouts/**"])
        .pipe(plumber(notify.onError("Error: <%= error.message %>")))
        .pipe(
            nunjucksRender({
                path: [path.src + "html/_layouts/"]
            })
        )
        .pipe(
            prettify({
                wrap_attributes_indent_size: 2,
                indent_char: "  ",
                eol: "\n",
                indent_level: 0,
                indent_with_tabs: false,
                preserve_newlines: false,
                max_preserve_newlines: 2,
                jslint_happy: false,
                space_after_anon_function: true,
                brace_style: "collapse",
                keep_array_indentation: false,
                keep_function_indentation: false,
                space_before_conditional: true,
                break_chained_methods: false,
                eval_code: false,
                unescape_strings: false,
                wrap_line_length: 0,
                wrap_attributes: "auto",
                wrap_attributes_indent_size: 14,
                end_with_newline: false
            })
        )
        .pipe(dest(path.dest + "./"));
}

function jsComplile() {
    return src(path.src + "js/*.js", { sourcemaps: true })
        .pipe(plumber(notify.onError("Error: <%= error.message %>")))
        .pipe(concat("common.js"))
        .pipe(uglify())
        .pipe(dest(path.dest + "./js/", { sourcemaps: "./sourcemaps" }));
}

function jsComplileVendor() {
    return src(path.src + "js-vendor/*.js", { sourcemaps: true })
        .pipe(plumber(notify.onError("Error: <%= error.message %>")))
        .pipe(concat("vendor.js"))
        .pipe(uglify())
        .pipe(dest(path.dest + "./js/", { sourcemaps: "./sourcemaps" }));
}

function sassComplile() {
    return src(path.src + "sass/**/*.scss", { sourcemaps: true })
        .pipe(plumber(notify.onError("Error: <%= error.message %>")))
        .pipe(sass({ outputStyle: "expanded" }))
//        .pipe(sass({ outputStyle: "compressed" }))
        .pipe(postcss([autoprefixer(), mqpacker()]))
        .pipe(dest(path.dest + "./css/", { sourcemaps: "./sourcemaps" }));
}

function browsersync(done) {
    browserSync.init({
        port: 10099,
        notify: false,
        open: "local",
        server: {
            baseDir: path.dest
            //index: "index.html"
        },
        ghostMode: {
            clicks: false,
            forms: true,
            scroll: false
        }
        //reloadOnRestart: true
    });
    done();
}

function browsersyncReload(done) {
    browserSync.reload({ stream: true });
    done();
}

function cleanMapFiles() {
    return del([path.src + "**/sourcemaps/"]);
}

function wathes(done) {
    watch([path.src + "html/**"], htmlCompile);
    watch([path.src + "js/**"], jsComplile);
    watch([path.src + "js-vendor/**"], jsComplileVendor);
    watch([path.src + "sass/**"], sassComplile);
    watch(
        [path.src + "html/_layouts/", path.dest + "*", path.dest + "**"],
        browsersyncReload
    );
    done();
}

/* setting exports
--------------------------------------------------------*/
exports.compile = sassComplile;
exports.default = series(
    cleanMapFiles,
    parallel(
        htmlCompile,
        jsComplile,
        jsComplileVendor,
        sassComplile
    ),
    parallel(wathes, browsersync)
);
