// const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  // fomrats
  eleventyConfig.setTemplateFormats([
    'html',
    'njk',
    'md',
    "liquid",
    "11tydata.js"
  ]);

  // pass asset file file without touching it. They will be processed
  // by snowpack from the .cache directory
  eleventyConfig.addPassthroughCopy("src/**/*.(js|css|png|img|jpg|jpeg|ico)");

  // can use passtrhough with object as argument to specify the location
  // eleventyConfig.addPassthroughCopy({ "src/img": "img" });


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
      output: '.cache/11ty',
    },
    passthroughFileCopy: true,
    markdownTemplateEngine: "md",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};