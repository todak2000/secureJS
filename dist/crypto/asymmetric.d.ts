export declare function generateKeyPair(): Promise<CryptoKeyPair>;
export declare function sign(message: ArrayBuffer, privateKey: CryptoKey): Promise<ArrayBuffer>;
export declare function verify(signature: ArrayBuffer, message: ArrayBuffer, publicKey: CryptoKey): Promise<boolean>;
