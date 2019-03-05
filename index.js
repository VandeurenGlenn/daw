'use strict';

var carlo = require('carlo');
var os = require('os');
var path = require('path');

const userDataDir = path.join(os.homedir(), '.daw');
(async () => {
  const app = await carlo.launch({
    bgcolor: '#fff',
    width: 1400,
    height: 840,
    userDataDir,
    title: 'DAW'
  });
  app.serveFolder(path.join(__dirname , 'www'));
  app.on('exit', () => {
    process.exit();
  });
  app.on('window', window => {
    window.load('index.html');
  });
  await app.load('index.html');
})();
