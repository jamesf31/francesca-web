const fs = require("fs");
const path = require("path");

function getImages(folder) {

  return fs.readdirSync(folder)
    .filter(file =>
      /\.(jpg|jpeg|png|webp)$/i.test(file)
    )
    .sort()
    .map(file =>
      "/" + path.join(folder, file)
        .replace(/\\/g, "/")
    );

}

module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("projects");
  eleventyConfig.addPassthroughCopy("writing");

  eleventyConfig.addCollection("projects", function(collectionApi) {
    return collectionApi.getFilteredByGlob("projects/**/index.md");
  });

  eleventyConfig.addFilter("coverImage", function(inputPath) {

    const dir = path.dirname(inputPath);

    return "/" + path.join(dir, "cover.jpg")
      .replace(/\\/g, "/");

  });

  eleventyConfig.addFilter("previewImages", function(inputPath) {

    const dir = path.dirname(inputPath);

    return getImages(
        path.join(dir, "preview")
    );

    });

  eleventyConfig.addFilter("fullImages", function(inputPath) {

    const dir = path.dirname(inputPath);

    return getImages(
        path.join(dir, "full")
    );

    });

    return {
      pathPrefix: "/Ambert/"
    };

};