"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateKeyPair = generateKeyPair;
exports.sign = sign;
exports.verify = verify;
async function generateKeyPair() {
    return await crypto.subtle.generateKey({
        name: 'ECDSA',
        namedCurve: 'P-256'
    }, true, ['sign', 'verify']);
}
async function sign(message, privateKey) {
    return await crypto.subtle.sign({
        name: 'ECDSA',
        hash: { name: 'SHA-256' },
    }, privateKey, message);
}
async function verify(signature, message, publicKey) {
    return await crypto.subtle.verify({
        name: 'ECDSA',
        hash: { name: 'SHA-256' },
    }, publicKey, signature, message);
}
