const express = require('express');
const TransactionQuery = require('../.BlockChainAPI/index');
const { userTB, sequelize } = require('../models');
const { packPayloadRes } = require('../lib/response');
const router = express.Router();

router.get('/info', async function (req, res, next) {
  try {
    const { name, gender, birth } = req.params;
    const TransactionResult = await TransactionQuery('read', key);
    res.json({
      type: 'reservedUser',
      query: key,
      result: JSON.parse(TransactionResult),
    });
  } catch (error) {
    res.json({ type: 'reserverUser', error: error });
  }
});

router.post('/read/', async function (req, res, next) {
  try {
    const { name, gender, birth, phone } = req.body;
    const key = { name, gender, birth };
    const TransactionResult = await TransactionQuery('read', key);
    res.json({ type: 'user/read', query: key, result: TransactionResult });
  } catch (error) {
    res.json({ type: 'user/read', error: error });
  }
});

router.post('/create', async function (req, res, next) {
  try {
    const { name, gender, birth } = req.body;
    const key = { name, gender, birth };
    const value = { Certification: 'no' };
    const TransactionResult = await TransactionQuery('create', key, value);
    console.log(TransactionResult);
    res.json({ type: 'user/create', query: key, response: TransactionResult });
  } catch (error) {
    res.json({ type: 'user/create', error: error });
  }
});

router.post('/delete', async function (req, res, next) {
  try {
    const { name, gender, birth } = req.body;
    const key = { name, gender, birth };

    const TransactionResult = await TransactionQuery('delete', key);
    console.log(TransactionResult);
    res.json({ type: 'delete', query: key, result: TransactionResult });
  } catch (error) {
    res.json({ type: 'delete', error: error });
  }
});

module.exports = router;
