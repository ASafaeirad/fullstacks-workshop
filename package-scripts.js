const { series } = require('nps-utils');
const env = require('@frontendmonster/dev-utils/env');

module.exports.scripts = {
  clean: 'lerna run clean',

  lint: {
    default: 'lerna run lint',
    fix: 'lerna run lint:fix',
  },

  build: 'lerna run build',

  watch: 'lerna run build:watch --parallel',

  dev: {
    api: `${env.set(env.dev)} yarn workspace @fullstacks/api run dev`,
    web: `${env.set(env.dev)} yarn workspace @fullstacks/web run dev`,
  },

  test: {
    default: 'lerna run test',
    api: `${env.set(env.test)} yarn workspace @fullstacks/api run test`,
    web: `${env.set(env.test)} yarn workspace @fullstacks/web run test`,
  },

  check: series('nps clean', 'nps build', 'nps test', 'yarn lint'),
};
