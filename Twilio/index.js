const accountSid = 'AC8f66a79c391d1d39dda3c6f49cd44a75';
const authToken = '1e99e3590bc1933a89c0a2d0a942e0a7';
const client = require('twilio')(accountSid, authToken);

const Message = (AuthCode) => {
  console.log(AuthCode);
  client.messages
    .create({
      body: `Jasmean Auth Code ${AuthCode}`,
      from: '+18508427855',
      to: '+8201046878737',
    })
    .then((message) => console.log('메세지 전송 완료!')).catch((e)=>console.log(e));
};

module.exports = Message;
