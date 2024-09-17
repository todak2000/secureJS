export async function generateKeyPair(): Promise<CryptoKeyPair> {
    return await crypto.subtle.generateKey(
      {
        name: 'ECDSA',
        namedCurve: 'P-256'
      },
      true,
      ['sign', 'verify']
    );
  }
  
  export async function sign(message: ArrayBuffer, privateKey: CryptoKey): Promise<ArrayBuffer> {
    return await crypto.subtle.sign(
      {
        name: 'ECDSA',
        hash: { name: 'SHA-256' },
      },
      privateKey,
      message
    );
  }
  
  export async function verify(signature: ArrayBuffer, message: ArrayBuffer, publicKey: CryptoKey): Promise<boolean> {
    return await crypto.subtle.verify(
      {
        name: 'ECDSA',
        hash: { name: 'SHA-256' },
      },
      publicKey,
      signature,
      message
    );
  }