import { src, dest } from 'gulp';
import concatcss from 'gulp-concat-css';
import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import size from 'gulp-size';
import autoprefixer from 'gulp-autoprefixer';
import groupCssMediaQueries from 'gulp-group-css-media-queries'
import cleanCss from 'gulp-clean-css'
import replace from 'gulp-replace'
import config from '../../config.json';

const sass = gulpSass(dartSass)

export const concatLibsCSS = () =>
    src(config.cssSetting.libs)
    .pipe(concatcss('libs.css'))
    .pipe(sass(config.cssSetting.sassOpts))
    .pipe(dest(config.cssSetting.dist))

export const isDev = () => {
    let i = process.argv.indexOf("deploy");
    return i === -1;
}

export const compileSCSS = () => 
    src([config.cssSetting.src], { sourcemaps: isDev })
    .pipe(sass(config.cssSetting.sassOpts.errLogToConsole))
    .pipe(autoprefixer({
      overrideBrowserslist: config.autoprefixer,
      remove: false,
      cascade: false
    }))
    .pipe(groupCssMediaQueries())
    .pipe(cleanCss({
      format: config.cssSetting.sassOpts.outputStyle
    }))
    .pipe(replace('!important', ' !important'))
    .pipe(size({
      showFiles: true
    }))
    .pipe(dest(config.cssSetting.dist, { sourcemaps: isDev }))
