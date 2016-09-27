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

 let program

if (browserTested == 'phantomjs') {
    //Run standalone render async test case,  run speed found super quick,  http://webdriver.io/guide/getstarted/v4.html  "synchronous"

    /** runs PhantomJS */
    //if (isLocal) before(() => phantomjs.run('--webdriver=4444').then(p => program = p))
    if (true) before(() => {
        phantomjs.run('--webdriver=4444').then(p => program = p)
    })

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
    if (true) after(() => {

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
    //var configName = ['wdio'].concat( runMode || [], browserTested || [], 'conf', 'js' || []).join('.');
    var configName = ['./wdio'].concat(runMode || [], browserTested || [], 'conf.js' || []).join('.');
    console.log(configName);
    return configName;
}