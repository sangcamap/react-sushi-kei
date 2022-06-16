/* config-overrides.js */
// require normalized overrides
// const { paths } = require('react-app-rewired');
// const overrides = require('react-app-rewired/config-overrides');

const {override, useBabelRc} = require('customize-cra');

module.exports = override(
    useBabelRc()
);