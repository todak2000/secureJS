"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecureJS = void 0;
const asymmetric_1 = require("./crypto/asymmetric");
const hash_1 = require("./crypto/hash");
const symmetric_1 = require("./crypto/symmetric");
exports.SecureJS = {
    encrypt: symmetric_1.encrypt,
    decrypt: symmetric_1.decrypt,
    generateKeyPair: asymmetric_1.generateKeyPair,
    sign: asymmetric_1.sign,
    verify: asymmetric_1.verify,
    generateEncryptionKey: symmetric_1.generateEncryptionKey,
    hash: hash_1.hash,
    compare: hash_1.compare,
};
