import configLog from './logService';
import * as category from './categoryService';
import * as author from './authorService';


/**
 * Init services
 */
const log = configLog({ logLevel: 'debug' });

export default {
  log,
  category,
  author,
};
