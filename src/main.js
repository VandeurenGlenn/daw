import { launch } from 'carlo';
import { homedir } from 'os';
import { join } from 'path';
import { promisify } from 'util';
import { readdir as _readdir, mkdir as _mkdir, writeFile, readFile } from 'fs';
// import setupLibrary from '.lib/setup-library.js';
import { DEFAULT_LIBRARY, LIBRARY, USER_DATA, LIBRARY_VERSION } from './constants';

const readdir = promisify(_readdir);
const write = promisify(writeFile);
const read = promisify(readFile);
const mkdir = promisify(_mkdir);

const setupLibrary = async () => {
  await mkdir(LIBRARY);
  await write(join(LIBRARY, 'version'), LIBRARY_VERSION);
}

const library = async () => {
  const lib = await readdir(DEFAULT_LIBRARY);
  const userLib = await readdir(LIBRARY);
  return [lib, userLib];
}

(async () => {

  const app = await launch({
    bgcolor: '#fff',
    width: 1400,
    height: 840,
    userDataDir: USER_DATA,
    title: 'DAW'
  });

  app.serveFolder(join(__dirname , 'www'));

  await app.load('loading.html');

  app.on('exit', () => {
    process.exit()
  });

  app.on('window', window => {
    window.load('index.html')
  });
  try {
    // TODO: listen for changes with chokidar ...
    await read(join(LIBRARY, 'version'));
  } catch (e) {
    if (e.code === 'ENOENT') await setupLibrary();
  }
  await app.exposeFunction('readdir', readdir);
  await app.exposeFunction('library', library);
  await app.load('index.html');
})();
