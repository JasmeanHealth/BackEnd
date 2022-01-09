/*
 * SPDX-License-Identifier: Apache-2.0
 */

"use strict";

const { Contract } = require("fabric-contract-api");

class HospitalUserContract extends Contract {
    async hospitalUserExists(ctx, hospitalUserId) {
        const buffer = await ctx.stub.getState(hospitalUserId);
        return !!buffer && buffer.length > 0;
    }

    async createHospitalUser(ctx, hospitalUserId, value) {
        const exists = await this.hospitalUserExists(ctx, hospitalUserId);
        console.log(hospitalUserId);
        if (exists) {
            throw new Error(
                `The hospital user ${JSON.stringify(
                    hospitalUserId
                )} already exists`
            );
        }
        const asset = { value };
        const buffer = Buffer.from(JSON.stringify(asset));
        await ctx.stub.putState(hospitalUserId, buffer);
    }

    async readHospitalUser(ctx, hospitalUserId) {
        const exists = await this.hospitalUserExists(ctx, hospitalUserId);
        if (!exists) {
            throw new Error(
                `The hospital user ${hospitalUserId} does not exist`
            );
        }
        const buffer = await ctx.stub.getState(hospitalUserId);
        const asset = JSON.parse(buffer.toString());
        return asset;
    }

    async updateHospitalUser(ctx, hospitalUserId, newValue) {
        const exists = await this.hospitalUserExists(ctx, hospitalUserId);
        if (!exists) {
            throw new Error(
                `The hospital user ${hospitalUserId} does not exist`
            );
        }
        const asset = { value: newValue };
        const buffer = Buffer.from(JSON.stringify(asset));
        await ctx.stub.putState(hospitalUserId, buffer);
    }

    async deleteHospitalUser(ctx, hospitalUserId) {
        const exists = await this.hospitalUserExists(ctx, hospitalUserId);
        if (!exists) {
            throw new Error(
                `The hospital user ${hospitalUserId} does not exist`
            );
        }
        await ctx.stub.deleteState(hospitalUserId);
    }
}

module.exports = HospitalUserContract;
