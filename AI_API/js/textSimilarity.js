const iconv = require('iconv-lite');
const exec = require('child_process').execSync;
const path = require('path');

function textSimilarity(arg) {
  const xlsxPath = path.join(__dirname, '..', '/data/korean.wav');
  const pythonPath = path.join(
    __dirname,
    '..',
    '/textSimilarity/textSimilarity.py'
  );
  let rs = exec(`python ${pythonPath} ${xlsxPath}  ${arg}`);
  rs = iconv.decode(rs, 'euc-kr');
  let data = JSON.parse(rs);
  data = { result: data };
  console.log(data);
  return data;
}

module.exports = textSimilarity;
