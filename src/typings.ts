export enum LogLevel {
  VERBOSE = 0,
  LOG = 1,
  INFO = 2,
  WARN = 3,
  ERROR = 4,
  FATAL = 5,
  SILENT = Infinity,
}

export const LogLevels = {
  VERBOSE: LogLevel.VERBOSE,
  LOG: LogLevel.LOG,
  INFO: LogLevel.INFO,
  WARN: LogLevel.WARN,
  ERROR: LogLevel.ERROR,
  SILENT: LogLevel.SILENT,
};

export interface ILogger {
  enable(): void;
  disable(): void;
  setLevel(level: LogLevel): void;
  debug(title: string, ...args: any[]): void; // for development debugging
  info(title: string, ...args: any[]): void;
  warn(title: string, ...args: any[]): void;
  error(title: string, ...args: any[]): void;
  fatal(title: string, ...args: any[]): void;
  group(...label: any[]): void;
  groupCollapsed(...label: any[]): void;
  groupEnd(): void;
}
