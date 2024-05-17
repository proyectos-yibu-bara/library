import configLog from './logService';
import * as category from './categoryService';


/**
 * Init services
 */
const log = configLog({ logLevel: 'debug' });

export default {
  log,
  category,
};
