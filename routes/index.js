const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploadedFiles/');
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}__${file.originalname}`);
  },
});
const uploadWithOriginalFilename = multer({ storage: storage });

router.post(
  '/uploadMp3',
  uploadWithOriginalFilename.array('attachments'),
  function (req, res) {
    res.render('confirmation', { file: null, files: req.files });
  }
);

module.exports = router;
