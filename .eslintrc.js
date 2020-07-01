module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/recommended',
        '@vue/airbnb',
    ],
    rules: {
        indent: ['error', 4, {
            ObjectExpression: 'first',
            ImportDeclaration: 1,
        }],
        'no-tabs': ['error', {
            allowIndentationTabs: true,
        }],
        'vue/html-indent': ['error', 4, {
            attribute: 1,
            baseIndent: 1,
            closeBracket: 0,
            alignAttributesVertically: true,
            ignores: [],
        }],
        'vue/multiline-html-element-content-newline': 0,
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'import/prefer-default-export': 0,
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
};
