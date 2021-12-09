const index = require('../index.js')

test('Says hello to name', () => {
  const message = index('World')

  expect(message).toBe('Hello, World!')
})
