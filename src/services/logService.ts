import { ILoggerConfig, ILogger } from "../interfaces/logger";

const createLogger = (config: ILoggerConfig): ILogger => {
  const logLevels = {
    debug: 0,
    info: 1,
    error: 2,
  };

  const configLogLevel = logLevels[config.logLevel];

  function write(logLevel: number, msg: string) {
    if (logLevel >= configLogLevel) {
      console.log(`log service: ${msg}`);
    }
  }

  return {
    debug: (msg: string) => { write(logLevels['debug'], msg); },
    info: (msg: string) => { write(logLevels['info'], msg); },
    error: (msg: string) => { write(logLevels['error'], msg); },
  };
};

export default createLogger;
