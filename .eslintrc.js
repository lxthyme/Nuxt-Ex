module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    extends: [
        '@nuxtjs',
        'plugin:prettier/recommended'
    ],
    plugins: [
        'prettier'
    ],
    // add your custom rules here
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-alert": process.env.NODE_ENV === "production" ? "error" : "off",
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/,
        options: {
            fix: true
        },
        parserOptions: {
            parser: "babel-eslint"
        }//,
        // "vue/singleline-html-element-content-newline": ["error", {
        //   "ignoreWhenNoAttributes": true,
        //   "ignoreWhenEmpty": true,
        //   "ignores": ["pre", "textarea", ...INLINE_ELEMENTS]
        // }]
    }
}