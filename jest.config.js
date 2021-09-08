/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    "^.+\\.ts?$": "ts-jest"
  },
  roots: ['test/'],
  moduleDirectories: ['node_modules', 'src'],
};