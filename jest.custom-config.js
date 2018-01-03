const {VirtualConsole} = require('jsdom')

module.exports = {
  testEnvironmentOptions: {
    virtualConsole: new VirtualConsole().sendTo(console, {
      omitJSDOMErrors: true,
    }),
  },
}
