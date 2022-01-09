const accountSid = 'AC0587e64ce0224e56cc29fd8cc5546b57';
const authToken = 'd882139c61fc82220622c08ce033c895';
const client = require('twilio')(accountSid, authToken);

const Message = (AuthCode) => {
  console.log(AuthCode);
  client.messages
    .create({
      body: `Jasmean Auth Code ${AuthCode}`,
      from: '+16673032498',
      to: '+8201083346003',
    })
    .then((message) => console.log('메세지 전송 완료!'));
};

module.exports = Message;
