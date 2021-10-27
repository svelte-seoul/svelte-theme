module.exports = {
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.svelte$": ["svelte-jester", { preprocess: true }],
  },
  moduleNameMapper: { "^.+\\.(css|less|scss)$": "babel-jest" },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(js?|ts?|svelte?)$",
  moduleFileExtensions: ["js", "ts", "svelte"],
  modulePathIgnorePatterns: ["lib", "build"],
  testEnvironment: 'jsdom',
  globals: {
    window: {},
    "ts-jest": {
      babelConfig: true,
      tsconfig: "tsconfig.json",
    },
  },
};
