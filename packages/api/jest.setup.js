const { matchers } = require('jest-json-schema');
const dotenv = require('dotenv');

dotenv.config();

expect.extend(matchers);
