module.exports = {
  transform: {
    '^.+\\.svelte$': [
      'svelte-jester',
      {
        preprocess: true,
      },
    ],
    '^.+\\.ts$': 'ts-jest',
  },
  roots: ['components/'],
  moduleFileExtensions: [
    'js',
    'ts',
    'svelte',
  ],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./jest.setup.ts', 'givens/setup.js', 'jest-plugin-context/setup.js'],
};
