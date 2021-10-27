const logger = require('./Base/Logger');

logger.log('Log without the Log!');
logger.log('Log with The Log!', 'log');
logger.log('Log with a Warning!', 'warn');
logger.log('Log with an Error!', 'error');
logger.log('Debug Log!', 'debug');
logger.log('Project is Ready log!', 'ready');