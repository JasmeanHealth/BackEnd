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
  '/extract',
  uploadWithOriginalFilename.array('attachments'),
  async function (req, res, next) {
    try {
      const speechRecog = speechRecognition();

      res.json({ type: 'wav를 문자로', result: speechRecog.toString() });
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }
);
router.post('/recommend', async function (req, res, next) {
  try {
    const resultSimilarity = textSimilarity(req.body.user_voice);
    const { first_choice, other_choice } = resultSimilarity.result[0];
    res.json({ type: '문자를 추천으로', result: [first_choice, other_choice] });
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
