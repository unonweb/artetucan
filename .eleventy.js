/*module.exports = {
  pathPrefix: "/artetucan/",
  dir: {
    input: ".",
    includes: "includes",
    output: "/var/www/artetucan/"
  },
  passthroughFileCopy: true,
  markdownTemplateEngine: "njk"
}
*/
module.exports = function(eleventyConfig) {

  eleventyConfig.setDataDeepMerge(true);

  // copy to output directory:
  eleventyConfig.addPassthroughCopy("code");
  //eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("img");

  // markdown-it
  let markdownIt = require("/home/frida/npm-global/lib/node_modules/markdown-it");
  let options = {
    html: true,
    breaks: true,
    linkify: true
  };
  let markdownLib = markdownIt(options);
  eleventyConfig.setLibrary("md", markdownLib);

  return {
    //pathPrefix: "/artetucan/",
    dir: {
      input: ".",
      includes: "includes",
      output: "/var/www/artetucan/"
    },
    passthroughFileCopy: true,
    markdownTemplateEngine: "njk"
  }
};

