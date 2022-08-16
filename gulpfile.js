const { src, dest } = require("gulp")
const postcss = require("gulp-postcss")
const autoprefixer = require("autoprefixer")

exports.default = function () {
  var plugins = [autoprefixer]
  return src("src/*.css").pipe(postcss(plugins)).pipe(dest("dest"))
}
