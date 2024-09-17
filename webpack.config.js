const path = require('path');

module.exports = {
  // ... existing configuration ...
  resolve: {
    fallback: {
      "path": require.resolve("path-browserify"),
      // ... other fallbacks if needed ...
    }
  },
  // ... existing configuration ...
};