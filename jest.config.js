const config = {
  verbose: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: ['./src/**/*.ts?(x)', '!**/__tests__/**'],

  // The directory where Jest should output its coverage files
  coverageDirectory: '<rootDir>/reports/coverage',

  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: [['html', { subdir: 'html' }], 'lcov'],

  testMatch: ['**/(__tests__|tests)/**/?(*.)(spec|test).ts?(x)'],

  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },

  testEnvironment: 'jsdom',

  setupFilesAfterEnv: ['./jest.setup.js'],

  moduleNameMapper: {
    '\\.(css|less|svg|png)$': '<rootDir>/__mocks__/fileMock.js',
  },
}

module.exports = config
