exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['scenarios.js'],
  multiCapabilities: [{
    browserName: 'internet explorer'
  }/*, {
    browserName: 'chrome'
  }*/]
}
