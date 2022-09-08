const fs = require('fs');
const util = require('util');
const readFromFile = util.promisify(fs.readFile);

/**
 * wrting data to json file and destination
 *  @param {string} destination writing file
 *  @param {object} content the content written
 *  @returns {void} void
 */

const writeToFile = (destination, content) =>
fs.writeFile(destination, JSON.stringify(content, null, 3), (err) =>
   err ? console.error(err) : console.info(`\nData written to ${destination}`)
 );

 module.exports = { readFromFile, writeToFile};
