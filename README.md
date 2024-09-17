# SecureJS

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

SecureJS is a modern JavaScript cryptography library designed to enhance web application security. It provides a user-friendly interface for complex cryptographic operations using advanced encryption algorithms.

## Demo Link

[SecureJS Demo](https://securejs-react-demo.vercel.app/)

## Features

- **AES-GCM Encryption**: Secure symmetric encryption for data confidentiality and integrity.
- **ECDSA Digital Signatures**: Robust asymmetric encryption for authentication and non-repudiation.
- **Argon2 Password Hashing**: State-of-the-art password hashing (server-side only).
- **Cross-Environment Compatibility**: Works in both browser and Node.js environments.

## Installation

```bash
npm install @todak2000/securejs
```

## Usage

### Symmetric Encryption (AES-GCM)

```javascript
const key = await SecureJS.generateEncryptionKey();
const encryptedMessage = await SecureJS.encrypt("Sensitive data", key);
const decryptedMessage = await SecureJS.decrypt(encryptedMessage, key);
console.log(decryptedMessage);  // Output: "Sensitive data"
```

### Asymmetric Encryption (ECDSA)

```javascript
const keyPair = await SecureJS.generateKeyPair();
const messageBuffer = new TextEncoder().encode("Verify me!");
const signature = await SecureJS.sign(messageBuffer, keyPair.privateKey);
const isValid = await SecureJS.verify(signature, messageBuffer, keyPair.publicKey);
console.log(isValid);  // Output: true
```

### Password Hashing (Argon2, server-side only)

```javascript
const hashedPassword = await SecureJS.hash("mySecretPassword");
const isMatch = await SecureJS.verify("mySecretPassword", hashedPassword);
console.log(isMatch);  // Output: true
```

## API Reference

### Symmetric Encryption

- `generateEncryptionKey()`: Generates a secure encryption key.
- `encrypt(data, key)`: Encrypts data using AES-GCM.
- `decrypt(encryptedData, key)`: Decrypts AES-GCM encrypted data.

### Asymmetric Encryption

- `generateKeyPair()`: Generates a public-private key pair for ECDSA.
- `sign(data, privateKey)`: Signs data with a private key.
- `verify(signature, data, publicKey)`: Verifies a signature with a public key.

### Hashing (Server-side only)

- `hash(data)`: Hashes data using Argon2.
- `verify(plaintext, hashedData)`: Verifies hashed data against plaintext.

## Security Considerations

- Always use HTTPS when transmitting encrypted data or keys.
- Never store encryption keys or private keys in client-side storage.
- Argon2 hashing is only available server-side due to browser limitations.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Acknowledgement
- [Dr. Nasir Baba-Ahmed, CHFI, CEH, ACE, MTCNA](https://www.linkedin.com/in/dr-nasir-baba-ahmed-chfi-ceh-ace-mtcna-7b71917a/)
- [Mr. Victor Idonor](https://www.linkedin.com/in/idonor/)
- [Baze University](https://bazeuniversity.edu.ng)
- [World Bank](https://www.worldbank.org/en/home)

## Author
- [Daniel Olagunju](https://github.com/todak2000)

## License

This project is licensed under the MIT License.
