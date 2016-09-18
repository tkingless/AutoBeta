'use strict'

const
  phantomjs = require('phantomjs-prebuilt'),
  webdriverio = require('webdriverio'),
  requireDir = require('require-dir'),
  specs = requireDir('./specs/'),
  //isLocal = process.env.E2E_ENV == 'local',
  //connections = isLocal
   // ? require('./webdriver.local.js')
  //  : require('./webdriver.cloud.js')

//No need to have other config yet
  connections =  require('./wdio.standalone.phantomjs.conf.js')

let program

/** runs PhantomJS */
//if (isLocal) before(() => phantomjs.run('--webdriver=4444').then(p => program = p))
if (true) before(() => phantomjs.run('--webdriver=4444').then(p => program = p))

connections.forEach(connection => {
  describe(desc(connection), () => {
    /** runs WebDriver */
    before(() => global.browser = webdriverio.remote(connection).init())

    /** execute each test within 'e2e' dir */
    for (const key in specs) specs[key]()

    /** ends the session */
    after(() => browser.end())
  })
})

/** closes PhantomJS process */
//if (isLocal) after(() => program.kill())
if (true) after(() => program.kill())

/** generate description from capabilities */
function desc (connection) {
  const c = connection.desiredCapabilities
  return [c.browserName].concat(c.version || [], c.platform || []).join(' - ')
}
