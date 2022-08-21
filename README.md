# postcss-deep-dive

PostCSS takes CSS and turns it into a form of data that JavaScript can manipulate.

PostCSS plugins can behave like preprocessors: they can optimize and autoprefix code, they can add future syntax, they can perform linting, they can process variables and logic, they can provide complete grid systems, they can offer coding shortcuts… the list is long and varied.

**You can always apply PostCSS to the compiled CSS.** 在 loaders 中得在 sass-loader 之前。

## Exploring Plugins

The plugins you choose will completely define your experience with PostCSS.

### Types of plugins

#### Packs

PostCSS 是对现代 CSS 进行处理，plugin 被鼓励只提供单一功能。Packs 就是 plugins 的集合，不必每次都单独引入。

That saied, sometimes you want to incorporate a long list of functionality into a project.Packs bring together serveral modular plugins under a thematic umbrella, allowing them all to be installed and deployed at once.

## Using PostCSS for Cross Browser Compatibility

- Have vendor prefixers automatically added in: 引用 autoprefixer
- Add a series of fallbacks for IE 8,9,10: 单独引入 fallback plugin 现在看来是不需要的，因为 IE 整体都不需要再支持了。

## Using PostCSS for Minification and Optimization

Make your stylesheets more efficient and load faster.

- Combine mutiplt stylesheets into one via the `@import` rule, even if some of your stylesheets are coming from npm modules, **ensuring you need only a single `http` requests to load your site's CSS.**
- Combine matching media queries into one.

```shell
npm install postcss-import postcss-mqpacker cssnano --save-dev
```
