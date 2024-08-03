const chalk = require("chalk");

/**
 * Logger class for logging messages with different levels of severity.
 * Uses the 'chalk' library to colorize the output.
 */
class Logger {
    /**
     * Private static method to print messages with a specified prefix and color.
     * @param {string} prefix - The prefix to display before the message.
     * @param {string|string[]} message - The message or array of messages to print.
     * @param {string} color - The color to use for the message (as defined by 'chalk').
     */
    static #print(prefix, message, color) {
        if (Array.isArray(message)) {
            message.map((m) => console.info(chalk[color](prefix, m.toString())));
            return;
        }
        console.info(chalk[color](prefix, message.toString()));
        return;
    }

    /**
     * Logs an informational message.
     * @param {string|string[]} message - The message or array of messages to log.
     * @param {boolean} [colorize=false] - Whether to colorize the message in green. If false, the message will be white.
     */
    static info(message, colorize = false) {
        Logger.#print("[INFO]:", message, colorize ? "green" : "white");
    }

    /**
     * Logs a warning message.
     * @param {string|string[]} message - The message or array of messages to log.
     */
    static warn(message) {
        Logger.#print("[WARN]:", message, "yellow");
    }

    /**
     * Logs an error message.
     * @param {string|string[]} message - The message or array of messages to log.
     */
    static error(message) {
        Logger.#print("[ERROR]:", message, "red");
    }
}

module.exports = Logger;
