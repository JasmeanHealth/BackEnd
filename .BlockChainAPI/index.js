const { Gateway, Wallets } = require('fabric-network');
const path = require('path');
const fs = require('fs');

async function TransactionQuery(queryType, key, data) {
  try {
    const walletPath = path.join(__dirname, 'Org1'); // org1 지갑 위치
    const wallet = await Wallets.newFileSystemWallet(walletPath);

    const gateway = new Gateway();
    const connectionProfilePath = path.resolve(
      __dirname,
      'TempOrg1GatewayConnection.json' // GateWay 위치
    );

    const connectionProfile = JSON.parse(
      fs.readFileSync(connectionProfilePath, 'utf8')
    );

    const connectionOptions = {
      wallet,
      identity: 'Org1 Admin',
      discovery: { enabled: true, asLocalhost: true },
    };

    await gateway.connect(connectionProfile, connectionOptions);

    const network = await gateway.getNetwork('mychannel');

    const contract = network.getContract('smartcontract'); // smart contract 이름 적기

    let result = '';
    switch (queryType) {
      case 'create': // create 함수
        if (key && data == undefined) console.log('key or data is undeined');
        console.log(data);
        const createResult = await contract.submitTransaction(
          'createHospitalUser',
          JSON.stringify(key),
          JSON.stringify(data)
        );
        console.log(createResult);
        result = 'Transaction has been submitted';
        break;

      case 'read': // read 함수
        if (key == undefined) console.log('key is undeined');
        const readResult = await contract.evaluateTransaction(
          'readHospitalUser',
          JSON.stringify(key)
        );
        const value = JSON.parse(readResult.toString()).value;

        result = JSON.parse(value);
        break;

      case 'update': // update 함수
        if (key && data == undefined) console.log('key or data is undeined');
        const updateResult = await contract.submitTransaction(
          'updateHospitalUser',
          JSON.stringify(key),
          JSON.stringify(data)
        );
        result = 'Update Transaction Success ';
        break;

      case 'delete': // delete 함수
        if (key == undefined) console.log('key is undeined');
        const deleteResult = await contract.submitTransaction(
          'deleteHospitalUser',
          JSON.stringify(key)
        );
        result = 'Delete Transaction Success ';
        break;

      default:
        console.log('query is worng');
        break;
    }
    gateway.disconnect();
    return result;
  } catch (error) {
    return error.toString();
  }
}
module.exports = TransactionQuery;
