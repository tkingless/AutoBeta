'use strict'

//TOFIX: 4 dimensional  test paradigm: local/cloud, frameworks, Browsers ,  runMode(wdio-runner, standalone)
const
    runMode = process.env.ENV_RUN,
    browserTested = process.env.ENV_BROWSER,
    webdriverio = require('webdriverio'),
    requireDir = require('require-dir'),
    phantomjs = require('phantomjs-prebuilt'),
    specs = requireDir('./specs/phantomjs-standalone/enabled/'),
    utility = require('./utility'),
    connections = require(loadConfig());

global.testOutputBaseDir = __dirname.concat('/wdioTestOutput/');
utility.mkdirSync(testOutputBaseDir);

/** runs PhantomJS */

if (browserTested == 'phantomjs') {
    //Run standalone render async test case,  run speed found super quick,  http://webdriver.io/guide/getstarted/v4.html  "synchronous"
    let program

    //TODO don't know why if (browserTested == 'phantomjs') before(() => {phantomjs.run('--webdriver=4444').then(p => program = p)}) not working in running first time,
    //brackets has issue
    before(() => phantomjs.run('--webdriver=4444').then(p => program = p))

    connections.forEach(connection => {
        describe(desc(connection), () => {
            /** runs WebDriver */
            before(() => global.browser = webdriverio.remote(connection).init())

            /** execute each test within specs pointed dir */
            for (const key in specs) specs[key]()

            /** ends the session */
            after(() => browser.end())
        })
    })

    /** closes PhantomJS process */
    //if (isLocal) after(() => program.kill())
    after(() => {
        console.log('Test run done(), go to '.concat(testOutputBaseDir) + ' to check test result too :)');
        program.kill();
    })
}

/** generate description from capabilities */
function desc(connection) {
    const c = connection.desiredCapabilities
    return [c.browserName].concat(c.version || [], c.platform || []).join(' - ')
}

function loadConfig() {
    var configName = ['./wdio'].concat(runMode || [], browserTested || [], 'conf.js' || []).join('.');
    return configName;
}