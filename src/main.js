import { launch } from 'carlo';
import { homedir } from 'os';
import { join } from 'path';

const userDataDir = join(homedir(), '.daw');

(async () => {

  const app = await launch({
    bgcolor: '#fff',
    width: 1400,
    height: 840,
    userDataDir,
    title: 'DAW'
  });

  app.serveFolder(join(__dirname , 'www'));


  app.on('exit', () => {
    process.exit()
  });

  app.on('window', window => {
    window.load('index.html')
  });

  // await app.exposeFunction('readdir', readdir);
  await app.load('index.html');
})();
