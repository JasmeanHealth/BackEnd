const express = require('express');
const TransactionQuery = require('../.BlockChainAPI/index');
const { packPayloadRes } = require('../lib/response');
const router = express.Router();

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
