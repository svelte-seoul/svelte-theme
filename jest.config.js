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
  moduleFileExtensions: [
    'js',
    'ts',
    'svelte',
  ],
  setupFilesAfterEnv: ['./jest.setup.ts', 'givens/setup.js', 'jest-plugin-context/setup.js'],
};
