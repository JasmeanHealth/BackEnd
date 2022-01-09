const express = require('express');
const TransactionQuery = require('../.BlockChainAPI/index');
const { userTB, sequelize } = require('../models');
const { packPayloadRes } = require('../lib/response');
const router = express.Router();

router.get('/info', async function (req, res, next) {
  try {
    const { name, gender, birth } = req.params;
    const TransactionResult = await TransactionQuery('read', key);
    res.json({ type: 'reservedUser', result: JSON.parse(TransactionResult) });
  } catch (error) {
    res.json({ type: 'reserverUser', error: error });
  }
});

//회원가입
router.post('/create', async function (req, res, next) {
  const signUpTrn = await sequelize.transaction();
  try {
    const exUser = await userTB.findOne({
      where: {
        user_id: req.body.user_id,
      },
    });
    // 식별자 있을 시에 packPayloadRes 함수 사용
    if (exUser) {
      return packPayloadRes(res, '이미 존재하는 이메일');
    }
    /*비밀번호 암호화 -> 사용자 계정 생성 */
    const hashedPassword = await bcrypt.hash(req.body.user_pw, 12);
    await userTB.create(
      {
        user_id: req.body.user_id,
        user_pw: hashedPassword,
        user_name: req.body.user_name,
        user_birth: req.body.user_birth,
        user_gender: req.body.user_gender,
      },
      { transaction: signUpTrn }
    );

    await signUpTrn.commit();

    /*회원가입 성공 */
    return packPayloadRes(res, '회원가입 성공');
  } catch (error) {
    await signUpTrn.rollback();
    console.error(error);
    return packPayloadRes(res, '기타오류');
  }
});

router.post('/delete', async function (req, res, next) {
  try {
    const { hostpital, date } = req.body;
    const TransactionResult = await TransactionQuery('delete', key);
    console.log(TransactionResult);
    res.json({ type: 'delete', result: TransactionResult });
    res.send(TransactionResult);
  } catch (error) {
    res.json({ type: 'delete', error: error });
  }
});

router.post('/delete', async function (req, res, next) {
  try {
    const { hostpital, date } = req.body;
    const TransactionResult = await TransactionQuery('delete', key);
    console.log(TransactionResult);
    res.json({ type: 'delete', result: TransactionResult });
    res.send(TransactionResult);
  } catch (error) {
    res.json({ type: 'delete', error: error });
  }
});

module.exports = router;
