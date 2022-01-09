const iconv = require('iconv-lite');
const path = require('path');
const exec = require('child_process').execSync;
var fs = require('fs');

function speechRecognition() {
  try {
    const wavPath = path.join(__dirname, '..', '/data/korean.wav');
    const pythonPath = path.join(
      __dirname,
      '..',
      '/speechRecognition/speechRecognition.py'
    );
    let rs = exec(`python ${pythonPath} ${wavPath}`);

    rs = iconv.decode(rs, 'euc-kr');

    console.log(rs);
    return rs;
  } catch (error) {
    return error;
  }
}
// speechRecognition();

module.exports = speechRecognition;
