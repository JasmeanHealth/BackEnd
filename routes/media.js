const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({
  dest: __dirname + '/uploads/', // 이미지 업로드 경로
});

router.post('/', upload.single('userfile'), function (req, res) {
  console.log('testestset');
  res.send('Uploaded! : ' + req.file); // object를 리턴함
  console.log(req.file); // 콘솔(터미널)을 통해서 req.file Object 내용 확인 가능.
});

module.exports = router;
