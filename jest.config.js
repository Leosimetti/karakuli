const config = {
  verbose: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: ['./src/**/*.ts?(x)', '!**/__tests__/**'],

  // The directory where Jest should output its coverage files
  coverageDirectory: '<rootDir>/reports/coverage',

  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: [['html', { subdir: 'html' }]],

  testMatch: ['**/(__tests__|tests)/**/?(*.)(spec|test).ts?(x)'],

  transform: {
    '\\.[jt]sx?$': 'babel-jest',
    // '^.+\\.svg$': 'jest-svg-transformer',
  },

  testEnvironment: 'jsdom',

  setupFilesAfterEnv: ['./jest.setup.js'],

  // This did not work
  // transformIgnorePatterns: ['node_modules/(?!@ijl)']
  // What is System.get()?
}

module.exports = config
