import { encrypt, decrypt, generateEncryptionKey } from '../src/crypto/symmetric';

describe('Symmetric Encryption', () => {
  it('should encrypt and decrypt successfully', async () => {
    const key = await generateEncryptionKey();
    const message = 'Hello, SecureJS!';
    
    const encrypted = await encrypt(message, key);
    const decrypted = await decrypt(encrypted, key);
    
    expect(decrypted).toBe(message);
  });

  it('should fail to decrypt with wrong key', async () => {
    const key1 = await generateEncryptionKey();
    const key2 = await generateEncryptionKey();
    const message = 'Hello, SecureJS!';
    
    const encrypted = await encrypt(message, key1);
    
    await expect(decrypt(encrypted, key2)).rejects.toThrow();
  });
});