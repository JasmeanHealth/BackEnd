const sendPaylaod = (res, payload) => {
  if (payload.resCode === 0) {
    res.status(200).send(payload);
  } else if (payload.resCode === 1) {
    res.status(500).send(payload);
  } else {
    res.status(400).send(payload);
  }
};
/* 응답 payload Pack */
const packPayloadRes = (res, content) => {
  return sendPaylaod(res, content);
};

module.exports = { sendPaylaod, packPayloadRes };
