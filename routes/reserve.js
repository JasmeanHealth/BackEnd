const express = require('express');
const TransactionQuery = require('../.BlockChainAPI/index');
const { diseaseLogTB, sequelize } = require('../models');
const { packPayloadRes } = require('../lib/response');
const router = express.Router();

// 병원 예약자 이력
//환자 병원 이력
// 문자 인증

/* GET users listing. */
// 환자 조회
router.get('/User/:hostptial/:date', async function (req, res, next) {
  try {
    const { hostpital, date } = req.params;
    const TransactionResult = await TransactionQuery('read', key);
    res.json({ type: 'reservedUser', result: JSON.parse(TransactionResult) });
  } catch (error) {
    res.json({ type: 'reserverUser', error: error });
  }
});

router.get('/userlog/', async function (req, res, next) {
  try {
    if (!req.user) {
      return packPayloadRes(res, '없는 사용자 정보');
    }
    const diseaseLog = await diseaseLogTB.findAll({
      attributes: ['user_id', 'user_diseaselog'],
      where: {
        user_id: req.user.id,
      },
    });

    return packPayloadRes(res, '사용자 정보 조회 성공');
  } catch (err) {
    return packPayloadRes(err, '기타오류');
  }
});

//병원 예약
router.post('/create', async function (req, res, next) {
  const { hostpital, date, user_id, user_diseaselog } = req.body;

  const TransactionResult = await TransactionQuery('create', key, data);
  console.log(TransactionResult);

  const diseaseCreate = await sequelize.transaction();
  try {
    const exDiseaseLog = await diseaseLogTB.findOne({
      where: {
        user_id: req.body.user_id,
        user_id: req.body.user_diseaselog,
      },
    });
    if (exDiseaseLog) return packPayloadRes(res, '이미 예약 하셨습니다!');

    await diseaseLogTB.create(
      {
        user_id: req.body.user_id,
        user_diseaselog: req.body.user_diseaselog,
      },
      { transaction: signUpTrn }
    );
    await diseaseCreate.commit();

    return packPayloadRes(res, '예약 완료습니다');
  } catch (error) {
    await diseaseCreate.rollback();
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

module.exports = router;
