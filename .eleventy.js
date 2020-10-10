module.exports = function (eleventyConfig) {
  eleventyConfig.setTemplateFormats([
    'html',
    'njk',
    'md',
  ]);

  // eleventyConfig.addWatchTarget("./src/sass/");
  // eleventyConfig.addPassthroughCopy('static');

  return {
    dir: {
      input: 'src/content',
      includes: "../templates/includes",
      layouts: "../templates/layouts",
      data: "../data",
      output: '.cache/11ty',
    },
  };
};