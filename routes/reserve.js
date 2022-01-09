const express = require('express');
const TransactionQuery = require('../.BlockChainAPI/index');
const { diseaseLogTB, sequelize } = require('../models');
const { packPayloadRes } = require('../lib/response');
const router = express.Router();

router.post('/user', async function (req, res, next) {
  try {
    console.log('ased');
    const { user_status, user_hospital } = req.body;
    const key = {
      name: '김언동',
      birth: '19960115',
      gender: '남',
      user_hospital,
    };
    const value = { user_status };
    const TransactionResult = await TransactionQuery('create', key, value);
    console.log(TransactionResult);
    res.json({ type: 'reserve/user', query: key, result: TransactionResult });
  } catch (error) {
    res.json({ type: 'reserve/user', error: error });
  }
});

module.exports = router;
