module.exports = {
  root: true,
  extends: ['@django-freeman/react-eslint-config'].map(require.resolve),
  rules: {
    '@typescript-eslint/no-explicit-any': 'warn'
  }
}
