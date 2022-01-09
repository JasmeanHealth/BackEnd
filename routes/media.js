const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const speechRecognition = require('../AI_API/js/speechRecognition');
const textSimilarity = require('../AI_API/js/textSimilarity');
const multer = require('multer');

DATAPATH = path.join(__dirname, '../', 'AI_API/data');
const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, DATAPATH);
  },
  filename(req, file, callback) {
    callback(null, `${file.originalname}`);
  },
});

const uploadWithOriginalFilename = multer({ storage: storage });

router.post(
  '/upLoadWave',
  uploadWithOriginalFilename.array('attachments'),
  async function (req, res, next) {
    try {
      const speechRecog = speechRecognition();

      res.json({ file: 'upLoadWave', result: speechRecog.toString() });
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }
);
router.post('/upLoadVoice', async function (req, res, next) {
  try {
    const resultSimilarity = textSimilarity(req.body.user_voice);

    res.json({ file: 'upLoadTalk', result: resultSimilarity });
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

router.post('/test', (req, res) => {
  req.session.userId = req.body.userId;
  req.session.save();
  res.send();
});

module.exports = router;
