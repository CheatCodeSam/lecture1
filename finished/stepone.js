const fs = require("fs");

function invertimage(filename) {
  var data = fs.readFileSync(filename);
  var magicnumber = data.slice(0, 2).toString();
  console.log("Value is " + magicnumber);
  if (magicnumber != "BM") {
    console.log("File format not supported");
    return 1;
  }
  var width = data.readUint16LE(18);
  var height = data.readUint16LE(22);
  var imageData = data.slice(52, data.length);
  console.log("Width is " + width);
  console.log("Height is " + height);
  imageData.forEach((byte, i) => {
    imageData.writeUInt8(~byte & (Math.pow(2, 8) - 1), i);
  });
  fs.writeFileSync(filename, data);
  return 0;
}

invertimage("image.bmp");
