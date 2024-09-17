export declare function encrypt(data: string, key: CryptoKey): Promise<string>;
export declare function decrypt(encryptedData: string, key: CryptoKey): Promise<string>;
export declare function generateEncryptionKey(): Promise<CryptoKey>;
