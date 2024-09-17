"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encrypt = encrypt;
exports.decrypt = decrypt;
exports.generateEncryptionKey = generateEncryptionKey;
async function encrypt(data, key) {
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const encodedData = new TextEncoder().encode(data);
    const encryptedData = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, encodedData);
    const result = new Uint8Array(iv.length + encryptedData.byteLength);
    result.set(iv);
    result.set(new Uint8Array(encryptedData), iv.length);
    return btoa(String.fromCharCode.apply(null, Array.from(result)));
}
async function decrypt(encryptedData, key) {
    const data = new Uint8Array(atob(encryptedData).split('').map(char => char.charCodeAt(0)));
    const iv = data.slice(0, 12);
    const ciphertext = data.slice(12);
    const decryptedData = await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, ciphertext);
    return new TextDecoder().decode(decryptedData);
}
async function generateEncryptionKey() {
    return await crypto.subtle.generateKey({ name: 'AES-GCM', length: 256 }, true, ['encrypt', 'decrypt']);
}
