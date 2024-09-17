import { generateKeyPair, sign, verify } from '../src/crypto/asymmetric';

describe('Asymmetric Cryptography', () => {
  let keyPair: CryptoKeyPair;
  const message = new TextEncoder().encode('Hello, SecureJS!');

  beforeAll(async () => {
    keyPair = await generateKeyPair();
  });

  it('should generate key pair successfully', () => {
    expect(keyPair.publicKey).toBeDefined();
    expect(keyPair.privateKey).toBeDefined();
  });

  it('should sign and verify successfully', async () => {
    const signature = await sign(message, keyPair.privateKey);
    const isValid = await verify(signature, message, keyPair.publicKey);
    
    expect(isValid).toBe(true);
  });

  it('should fail to verify with wrong public key', async () => {
    const wrongKeyPair = await generateKeyPair();
    const signature = await sign(message, keyPair.privateKey);
    const isValid = await verify(signature, message, wrongKeyPair.publicKey);
    
    expect(isValid).toBe(false);
  });

  it('should fail to verify with tampered message', async () => {
    const signature = await sign(message, keyPair.privateKey);
    const tamperedMessage = new TextEncoder().encode('Tampered message');
    const isValid = await verify(signature, tamperedMessage, keyPair.publicKey);
    
    expect(isValid).toBe(false);
  });
});