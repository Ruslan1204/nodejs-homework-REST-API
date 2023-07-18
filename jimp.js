const jimp = require("jimp");

jimp.read("avatar.jpeg", (error, avatar) => {
  if (error) {
    throw error;
  }

  avatar
    .resize(250, 250) // resize
    .write("tmp/small_avatar.jpeg"); // save
});
