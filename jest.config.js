module.exports = {
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  testRegex: '(/src/.*(test|spec))\\.(ts)$',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node',
  ],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!**/*.d.{ts,tsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/tests/**',
  ],
};