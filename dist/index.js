"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var typings_1 = require("./typings");
var ConsoleLogger = /** @class */ (function () {
    /**
     * ConsoleLogger
     * @param   {string}  prefix  Logger prefix
     * @return  {ConsoleLogger}
     */
    function ConsoleLogger(prefix) {
        this.Levels = typings_1.LogLevels;
        this.level = typings_1.LogLevel.LOG;
        this.prefix = '';
        this.enabled = true;
        this.debugColor = colorize('#cccccc', 12);
        this.logColor = colorize('#bbbbbb', 12);
        this.infoColor = colorize('#2196f3', 12);
        this.warnColor = colorize('#ff00ff', 12);
        this.errorColor = colorize('#e91e63', 12);
        this.fatalColor = colorize('#9a0101', 13);
        this.setPrefix(prefix);
        this.level = ConsoleLogger.level;
        ConsoleLogger.instances.push(this);
    }
    ConsoleLogger.setLevel = function (level) {
        this.level = level;
        this.instances.forEach(function (logger) { return logger.setLevel(level); });
    };
    ConsoleLogger.enable = function (level) {
        if (level)
            this.level = level;
        this.instances.forEach(function (logger) { return logger.enable(); });
    };
    ConsoleLogger.disable = function () {
        this.instances.forEach(function (logger) { return logger.disable(); });
    };
    /**
     * set logger prefix
     * @param prefix
     */
    ConsoleLogger.prototype.setPrefix = function (prefix) {
        this.prefix = prefix;
    };
    /**
     * enable logger with optional log level
     * @param level
     */
    ConsoleLogger.prototype.enable = function (level) {
        if (level === void 0) { level = this.level; }
        this.level = level;
        this.enabled = true;
    };
    /**
     * disable logger
     */
    ConsoleLogger.prototype.disable = function () {
        this.enabled = false;
    };
    /**
     * Set log level
     * @param   {LogLevel}  level
     * @return  {void}
     */
    ConsoleLogger.prototype.setLevel = function (level) {
        this.level = level;
    };
    /**
     * trace
     * @param title
     * @param args
     */
    ConsoleLogger.prototype.trace = function (title) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!this.enabled || this.level > typings_1.LogLevel.VERBOSE)
            return;
        if (ConsoleLogger.noColor) {
            console.trace.apply(console, __spreadArrays(["[" + this.prefix + "] " + title], args));
        }
        else {
            console.trace.apply(console, __spreadArrays(["%c[" + this.prefix + "] " + title, this.debugColor], args));
        }
    };
    /**
     * debug
     * @param title
     * @param args
     */
    ConsoleLogger.prototype.debug = function (title) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!this.enabled || this.level > typings_1.LogLevel.VERBOSE)
            return;
        if (ConsoleLogger.noColor) {
            console.debug.apply(console, __spreadArrays(["[" + this.prefix + "] " + title], args));
        }
        else {
            console.debug.apply(console, __spreadArrays(["%c[" + this.prefix + "] " + title, this.debugColor], args));
        }
    };
    /**
     * log
     * @param title
     * @param args
     */
    ConsoleLogger.prototype.log = function (title) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!this.enabled || this.level > typings_1.LogLevel.LOG)
            return;
        if (ConsoleLogger.noColor) {
            console.log.apply(console, __spreadArrays(["[" + this.prefix + "] " + title], args));
        }
        else {
            console.log.apply(console, __spreadArrays(["%c[" + this.prefix + "] " + title, this.logColor], args));
        }
    };
    /**
     * info
     * @param title
     * @param args
     */
    ConsoleLogger.prototype.info = function (title) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!this.enabled || this.level > typings_1.LogLevel.INFO)
            return;
        if (ConsoleLogger.noColor) {
            console.info.apply(console, __spreadArrays(["[" + this.prefix + "] " + title], args));
        }
        else {
            console.info.apply(console, __spreadArrays(["%c[" + this.prefix + "] " + title, this.infoColor], args));
        }
    };
    /**
     * warn
     * @param title
     * @param args
     */
    ConsoleLogger.prototype.warn = function (title) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!this.enabled || this.level > typings_1.LogLevel.WARN)
            return;
        if (ConsoleLogger.noColor) {
            console.warn.apply(console, __spreadArrays(["[" + this.prefix + "] " + title], args));
        }
        else {
            console.warn.apply(console, __spreadArrays(["%c[" + this.prefix + "] " + title, this.warnColor], args));
        }
    };
    /**
     * error
     * @param title
     * @param args
     */
    ConsoleLogger.prototype.error = function (title) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!this.enabled || this.level > typings_1.LogLevel.ERROR)
            return;
        if (ConsoleLogger.noColor) {
            console.error.apply(console, __spreadArrays(["[" + this.prefix + "] " + title], args));
        }
        else {
            console.error.apply(console, __spreadArrays(["%c[" + this.prefix + "] " + title, this.errorColor], args));
        }
    };
    /**
     * fatal error
     * @param title
     * @param args
     */
    ConsoleLogger.prototype.fatal = function (title) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!this.enabled || this.level > typings_1.LogLevel.FATAL)
            return;
        if (ConsoleLogger.noColor) {
            console.error.apply(console, __spreadArrays(["[" + this.prefix + "] " + title], args));
        }
        else {
            console.error.apply(console, __spreadArrays(["%c[" + this.prefix + "] " + title, this.fatalColor], args));
        }
    };
    /**
     * start a group with label
     * @param label
     */
    ConsoleLogger.prototype.group = function () {
        var label = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            label[_i] = arguments[_i];
        }
        if (console.group)
            console.group.apply(console, label);
    };
    /**
     * end a group
     */
    ConsoleLogger.prototype.groupEnd = function () {
        if (console.groupEnd)
            console.groupEnd();
    };
    /**
     * collapse log group
     * @param label
     */
    ConsoleLogger.prototype.groupCollapsed = function () {
        var label = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            label[_i] = arguments[_i];
        }
        if (console.groupCollapsed)
            console.groupCollapsed.apply(console, label);
    };
    /**
     * return a html string
     */
    ConsoleLogger.prototype.toString = function () {
        return "<ConsoleLogger prefix=\"" + this.prefix + "\" level=\"" + this.level + "\"/>";
    };
    ConsoleLogger.instances = [];
    ConsoleLogger.level = typings_1.LogLevel.LOG;
    ConsoleLogger.Levels = typings_1.LogLevels;
    ConsoleLogger.noColor = false;
    return ConsoleLogger;
}());
exports.default = ConsoleLogger;
function colorize(hex, x) {
    return "color:" + hex + ";font-size:" + x + "px;";
}
