import { generateKeyPair, sign, verify } from "./crypto/asymmetric";
import { compare, hash } from "./crypto/hash";
import { decrypt, encrypt, generateEncryptionKey } from "./crypto/symmetric";
export declare const SecureJS: {
    encrypt: typeof encrypt;
    decrypt: typeof decrypt;
    generateKeyPair: typeof generateKeyPair;
    sign: typeof sign;
    verify: typeof verify;
    generateEncryptionKey: typeof generateEncryptionKey;
    hash: typeof hash;
    compare: typeof compare;
};
