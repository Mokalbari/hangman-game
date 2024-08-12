export default {
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest",
  },
  extensionsToTreatAsEsm: [".jsx", ".ts", ".tsx"],
  testEnvironment: "node",
  moduleNameMapper: {},
  transformIgnorePatterns: ["/node_modules/"],
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
};
