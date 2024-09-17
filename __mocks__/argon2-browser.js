// __mocks__/argon2-browser.js
const mockHashes = new Map();

module.exports = {
  hash: jest.fn().mockImplementation(async (data) => {
    const hashResult = {
      encoded: `encodedHash-${Math.random()}`,
      hash: new Uint8Array([1, 2, 3, 4, 5, Math.floor(Math.random() * 256)]), // Example Uint8Array with random value
      hashHex: `0102030405${Math.floor(Math.random() * 256).toString(16)}`,
    };
    mockHashes.set(hashResult.encoded, data);
    return hashResult;
  }),
  verify: jest.fn().mockImplementation(async (encoded, data) => {
    const storedPassword = mockHashes.get(encoded);
    return storedPassword === data;
  }),
};
