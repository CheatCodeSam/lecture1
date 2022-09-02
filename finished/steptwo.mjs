const fs = require("fs");

const invertimage = (filename) => {
  const data = readFileSync(filename);
  const magicnumber = data.slice(0, 2).toString();
  console.log("Value is " + magicnumber);
  if (magicnumber !== "BM") {
    console.log("File format not supported");
    return 1;
  }
  const width = data.readUint32LE(18);
  const height = data.readUint32LE(22);
  const imageData = data.slice(52, data.length);
  console.log("Width is " + width);
  console.log("Height is " + height);
  imageData.forEach((byte, i) => {
    imageData.writeUInt8(~byte & (Math.pow(2, 8) - 1), i);
  });
  writeFileSync(filename, data);
  return 0;
};

invertimage("image.bmp");
