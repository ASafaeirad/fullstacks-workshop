module.exports = {
  verbose: false,
  rootDir: __dirname,
  testPathIgnorePatterns: [
    '/dist/',
    '/node_modules/',
  ],
  setupTestFrameworkScriptFile: './jest.setup.js',
  collectCoverageFrom: ['*.js'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
};
