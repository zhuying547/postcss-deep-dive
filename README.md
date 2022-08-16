# postcss-deep-dive

PostCSS takes CSS and turns it into a form of data that JavaScript can manipulate.

PostCSS plugins can behave like preprocessors: they can optimize and autoprefix code, they can add future syntax, they can perform linting, they can process variables and logic, they can provide complete grid systems, they can offer coding shortcuts… the list is long and varied.

**You can always apply PostCSS to the compiled CSS.**

### Types of plugins

#### Packs

PostCSS provides modular CSS processing.As such, individual plugins are encouraged to only cover a small defined set of functionality.

That saied, sometimes you want to incorporate a long list of functionality into a project.Packs bring together serveral modular plugins under a thematic umbrella, allowing them all to be installed and deployed at once.

