// const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  // fomrats
  eleventyConfig.setTemplateFormats([
    'html',
    'njk',
    'md',
  ]);
  

  // this is apparently slow, its better to use a dedicated folder.
  eleventyConfig.addPassthroughCopy("src/content/**/*.(js|css|png|img|jpg|jpeg|ico)");

  // Layouts
  eleventyConfig.addLayoutAlias('base', 'base.njk')
  eleventyConfig.addLayoutAlias('blog', 'base.njk')
  eleventyConfig.addLayoutAlias('post', 'post.njk')

  // plugins
  // eleventyConfig.addPlugin(syntaxHighlight);

  //base
  return {
    dir: {
      input: 'src/content',
      includes: "../templates/includes",
      layouts: "../templates/layouts",
      data: "../data",
      output: '_11ty',
    },
    passthroughFileCopy: true,
    markdownTemplateEngine: "md",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};