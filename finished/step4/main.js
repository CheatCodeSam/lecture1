const Jimp = require("jimp");
Jimp.read("./image.bmp").then((image) => {
  image.invert().write("image.bmp");
  console.log("done!");
});
console.log("foo");
