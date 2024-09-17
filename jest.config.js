// jest.config.js
module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest", // Use ts-jest for TypeScript files
    "^.+\\.wasm$": "jest-transform-stub",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  extensionsToTreatAsEsm: [".ts"], // Treat .ts files as ES modules
  moduleNameMapper: {
    // Add any necessary module name mappings here
    "^argon2-browser$": "<rootDir>/__mocks__/argon2-browser.js",
  },
};
