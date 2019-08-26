module.exports = {
  moduleNameMapper: {
    '^@app/(.+)': '<rootDir>/src/$1' // 絶対パス
  },
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'], // setupTests.jsの置き場所
  //preset: 'jest-puppeteer'
  globals: {
    //window: {},
    URL: 'http://localhost:8080'
  }
};
