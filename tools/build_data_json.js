var fs = require('fs');
var marked = require('marked');
var XLSX = require('xlsx');

marked.setOptions({
  smartypants: true
});

var SHEETS = [
  'META'
];

var DATA = {};

var workbook = XLSX.readFile('data.xlsx');

SHEETS.forEach(function(sheet) {
  'use strict';

  var worksheet = workbook.Sheets[sheet];
  // var test = XLSX.utils.sheet_to_json(worksheet);

  // test.forEach(function(e) {
  //   if (!e['Bio']) {
  //     return;
  //   }
  //   console.log(marked(e['Bio']));
  // });

  DATA[sheet] = XLSX.utils.sheet_to_json(worksheet);
});

fs.writeFileSync('data.json', JSON.stringify(DATA, null, 2));
