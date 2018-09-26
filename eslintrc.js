/* Kano Computing Web Team eslint base configuration */

module.exports = {
    env: {
        browser: true,
        node: true
    },
    extends: require.resolve('eslint-config-airbnb-base'),
    rules: {
        indent: ['error', 4],
        'no-underscore-dangle': ['error', { allowAfterSuper: true, allowAfterThis: true }],
        'import/extensions': [2, 'always', { ignorePackages: true }],
        "class-methods-use-this": ["off"],
        "no-bitwise": ["off"],
    },
    plugins: [
        'eslint-plugin-html',
        'eslint-plugin-import',
    ],
};
