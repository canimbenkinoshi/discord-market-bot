const chalk = require("chalk");
const moment = require("moment");
require("moment-timezone")

class Logger {
  static log (content, type = "log") {
    const timestamp = `[${moment().tz('Europe/Istanbul').format("YYYY-MM-DD HH:mm:ss")}]:`;
    switch (type) {
      case "log": {
        return console.log(`${timestamp} ${chalk.bgBlue(type.toUpperCase())} ${content} `);
      }
      case "warn": {
        return console.log(`${timestamp} ${chalk.black.bgYellow(type.toUpperCase())} ${content} `);
      }
      case "error": {
        return console.log(`${timestamp} ${chalk.bgRed(type.toUpperCase())} ${content} `);
      }
      case "debug": {
        return console.log(`${timestamp} ${chalk.green(type.toUpperCase())} ${content} `);
      }
      case "cmd": {
        return console.log(`${timestamp} ${chalk.black.bgWhite(type.toUpperCase())} ${content}`);
      }
      case "ready": {
        return console.log(`${timestamp} ${chalk.black.bgGreen(type.toUpperCase())} ${content}`);
      } 
      case "command": {
      return console.log(`${timestamp} ${chalk.black.bgGreen(type.toUpperCase())} ${content}`);
      } 
      case "event": {
      return console.log(`${timestamp} ${chalk.black.bgGreen(type.toUpperCase())} ${content}`);
      } 
      case "registerlog": {
      return console.log(`${timestamp} ${chalk.black.bgPink(type.toUpperCase())} ${content}`);
        } 
      
      
      default: throw new TypeError("Logger type must be either warn, debug, log, ready, cmd or error.");
    } 
  }
  
  static error (content) {
    return console.log(content, "error");
  }
  
  static warn (content) {
    return console.log(content, "warn");
  }
  
  static debug (content) {
    return console.log(content, "debug");
  } 
  
  static cmd (content) {
    return console.log(content, "cmd");
  } 
}

module.exports = Logger;