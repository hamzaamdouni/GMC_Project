const multer = require("multer");

// Multer Configuration

const storage = multer.diskStorage({
  destination: (request, file, cb) => {
    cb(null, "./userfront/src/Assets/Images");
  },
  filename: (request, file, cb) => {
    const fileName = `${Date.now()}_${file.originalname}`;
    cb(null, fileName);
  },
});

const upload = multer({ storage: storage }).single("imageName");

module.exports = upload;
