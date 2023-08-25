// 
//
// Author: BlackLeakz
// Description: This is an ascii-table example for JavaScript.
//
// Dependencies: ascii-table

const ascii = require("ascii-table");
const table = new ascii().setHeading('Test', 'Version');

table.addRow("This is a Test", "v.0.0.1");
console.log(table.toString(), "\nTest ascii-table created");
