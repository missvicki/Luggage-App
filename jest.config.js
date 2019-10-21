module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupTestFrameworkScriptFile: "<rootDir>/client/src/setupEnzyme.ts",
  collectCoverage: true,
  collectCoverageFrom: [
    "client/**/*.{ts,tsx}",
    "!client/api/api-test-helpers.ts",
    "!client/store/index.ts",
    "!client/store/reducers/index.ts",
    "!client/index.ts"
  ]
};
