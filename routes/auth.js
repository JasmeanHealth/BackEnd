const express = require('express');
const TransactionQuery = require('../.BlockChainAPI/index');
const Twilio = require('../Twilio/');
const router = express.Router();

/* GET users listing. */

router.post('/user/', async function (req, res, next) {
  try {
    const { name, gender, birth } = req.body;
    const key = { name, gender, birth };
    const TransactionResult = await TransactionQuery('read', key);
    // const randNummer = Math.floor(Math.random() * 1000000);
    const randNummer = 333333;
    Twilio(randNummer);
    res.json({ type: 'user/read', query: key, result: TransactionResult });
  } catch (error) {
    res.json({ type: 'user/read', error: error });
  }
});

router.post('/confirm/', async function (req, res, next) {
  try {
    const { name, gender, birth, authCode } = req.body;
    const key = { name, gender, birth };
    if (authCode === '333333') {
      const value = { Certification: 'yes' };
      let TransactionResult = await TransactionQuery('update', key, value);
      res.json({
        type: 'user/read',
        query: key,
        result: '인증이 완료되었습니다',
      });
    } else {
      res.json({
        type: 'user/read',
        query: key,
        result: '인증 번호가 잘못되었습니다',
      });
    }
  } catch (error) {
    res.json({ type: 'user/read', error: error });
  }
});

module.exports = router;
