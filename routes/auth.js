const express = require('express');
const TransactionQuery = require('../.BlockChainAPI/index');
const router = express.Router();

/* GET users listing. */
router.post('/User', async function (req, res, next) {
  try {
    const { id, pw } = req.body;
    const TransactionResult = await TransactionQuery('read', key);
    res.json({ type: 'authUser', result: JSON.parse(TransactionResult) });
  } catch (error) {
    res.json({ type: 'authUser', error: error });
  }
});

router.post('/User', async function (req, res, next) {
  try {
    const { name, gender, birth } = req.body;
    const TransactionResult = await TransactionQuery('read', key);
    res.json({ type: 'authUser', result: JSON.parse(TransactionResult) });
  } catch (error) {
    res.json({ type: 'authUser', error: error });
  }
});
module.exports = router;
