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
    "max-len": ["error", {
      "code": 200,
      "ignoreUrls": true
    }],
    "eslintIntegration": true,
    parserOptions: {
      parser: "babel-eslint"
    },
    // "vue/singleline-html-element-content-newline": ["error", {
    //   "ignoreWhenNoAttributes": true,
    //   "ignoreWhenEmpty": true,
    //   "ignores": ["pre", "textarea", ...INLINE_ELEMENTS]
    // }]
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "never",
        "normal": "never",
        "component": "never"
      },
      "svg": "always",
      "math": "always"
    }],
    "eslint.validate": [
      "javascript",
      "javascriptreact",
      {
        "language": "vue",
        "autoFix": true
      }
    ],
    "vue/attributes-order": ["error", {
      "order": [
        // "DEFINITION",
        // "LIST_RENDERING",
        // "CONDITIONALS",
        // "RENDER_MODIFIERS",
        // "GLOBAL",
        // "UNIQUE",
        // "TWO_WAY_BINDING",
        // "OTHER_DIRECTIVES",
        // "OTHER_ATTR",
        // "EVENTS",
        // "CONTENT"
      ]
    }]
  }
}
