const React = require('react')
const ReactDOM = require('react-dom')

class ThrowingComp extends React.Component {
  render() {
    throw new Error('this is an error in react')
  }
}

beforeEach(() => {
  jest.spyOn(console, 'error')
  // because I'm mocking the implementation of console.error
  // I would expect to not see any logs
  // but I do because the console.error here
  // is not the same one used by JSDOM.
  console.error.mockImplementation(() => {})
})

afterEach(() => {
  console.error.mockRestore()
})

test('fails', () => {
  expect(() => {
    ReactDOM.render(
      React.createElement(ThrowingComp),
      document.createElement('div')
    )
  }).toThrow()
})
