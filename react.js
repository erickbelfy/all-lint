module.exports = {
  rules: {
    'react/display-name': 1,
    'react/no-array-index-key': 0,
    'react/react-in-jsx-scope': 0,
    'react/prefer-stateless-function': 0,
    'react/forbid-prop-types': 0,
    'react/no-unescaped-entities': 0,
    'react/require-default-props': 0,
    'react/destructuring-assignment': 1,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.tsx']
      }
    ]
  },
  settings: {
      react: {
      version: '16'
      }
  }
};
