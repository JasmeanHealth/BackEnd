/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { ChaincodeStub, ClientIdentity } = require('fabric-shim');
const { HospitalUserContract } = require('..');
const winston = require('winston');

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.should();
chai.use(chaiAsPromised);
chai.use(sinonChai);

class TestContext {

    constructor() {
        this.stub = sinon.createStubInstance(ChaincodeStub);
        this.clientIdentity = sinon.createStubInstance(ClientIdentity);
        this.logger = {
            getLogger: sinon.stub().returns(sinon.createStubInstance(winston.createLogger().constructor)),
            setLevel: sinon.stub(),
        };
    }

}

describe('HospitalUserContract', () => {

    let contract;
    let ctx;

    beforeEach(() => {
        contract = new HospitalUserContract();
        ctx = new TestContext();
        ctx.stub.getState.withArgs('1001').resolves(Buffer.from('{"value":"hospital user 1001 value"}'));
        ctx.stub.getState.withArgs('1002').resolves(Buffer.from('{"value":"hospital user 1002 value"}'));
    });

    describe('#hospitalUserExists', () => {

        it('should return true for a hospital user', async () => {
            await contract.hospitalUserExists(ctx, '1001').should.eventually.be.true;
        });

        it('should return false for a hospital user that does not exist', async () => {
            await contract.hospitalUserExists(ctx, '1003').should.eventually.be.false;
        });

    });

    describe('#createHospitalUser', () => {

        it('should create a hospital user', async () => {
            await contract.createHospitalUser(ctx, '1003', 'hospital user 1003 value');
            ctx.stub.putState.should.have.been.calledOnceWithExactly('1003', Buffer.from('{"value":"hospital user 1003 value"}'));
        });

        it('should throw an error for a hospital user that already exists', async () => {
            await contract.createHospitalUser(ctx, '1001', 'myvalue').should.be.rejectedWith(/The hospital user 1001 already exists/);
        });

    });

    describe('#readHospitalUser', () => {

        it('should return a hospital user', async () => {
            await contract.readHospitalUser(ctx, '1001').should.eventually.deep.equal({ value: 'hospital user 1001 value' });
        });

        it('should throw an error for a hospital user that does not exist', async () => {
            await contract.readHospitalUser(ctx, '1003').should.be.rejectedWith(/The hospital user 1003 does not exist/);
        });

    });

    describe('#updateHospitalUser', () => {

        it('should update a hospital user', async () => {
            await contract.updateHospitalUser(ctx, '1001', 'hospital user 1001 new value');
            ctx.stub.putState.should.have.been.calledOnceWithExactly('1001', Buffer.from('{"value":"hospital user 1001 new value"}'));
        });

        it('should throw an error for a hospital user that does not exist', async () => {
            await contract.updateHospitalUser(ctx, '1003', 'hospital user 1003 new value').should.be.rejectedWith(/The hospital user 1003 does not exist/);
        });

    });

    describe('#deleteHospitalUser', () => {

        it('should delete a hospital user', async () => {
            await contract.deleteHospitalUser(ctx, '1001');
            ctx.stub.deleteState.should.have.been.calledOnceWithExactly('1001');
        });

        it('should throw an error for a hospital user that does not exist', async () => {
            await contract.deleteHospitalUser(ctx, '1003').should.be.rejectedWith(/The hospital user 1003 does not exist/);
        });

    });

});
