import { generateKeyPair, sign, verify } from "./crypto/asymmetric";
import { compare, hash } from "./crypto/hash";
import { decrypt, encrypt, generateEncryptionKey } from "./crypto/symmetric";

export const SecureJS = {
  encrypt,
  decrypt,
  generateKeyPair,
  sign,
  verify,
  generateEncryptionKey,
  hash,
  compare,
};
