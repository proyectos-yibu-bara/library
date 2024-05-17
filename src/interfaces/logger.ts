export interface ILoggerConfig {
  logLevel: 'debug' | 'info' | 'error';
}

export interface ILogger {
  debug: (msg: string) => void;
  info: (msg: string) => void;
  error: (msg: string) => void;
}
