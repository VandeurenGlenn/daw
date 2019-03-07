import { join } from 'path';
import { homedir } from 'os';

const HOME = homedir();
const USER_DATA = join(HOME, '.daw');
const LIBRARY = join(USER_DATA, 'library');
const DEFAULT_LIBRARY = join(__dirname, 'library');
const LIBRARY_VERSION = 0;

export {
  HOME,
  USER_DATA,
  DEFAULT_LIBRARY, // our library shipped with the app
  LIBRARY, // the user library, contains user projects, samples, etc,
  LIBRARY_VERSION
}
