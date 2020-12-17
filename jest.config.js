module.exports = {
  // Test spec file resolution pattern
  // Matches parent folder `__tests__` and filename
  // should contain `test` or `spec`.
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))",
  preset: 'ts-jest',
  testEnvironment: 'node',
};