#!/usr/bin/env node

const path = require("path");
const yargs = require("yargs");
const { compareJson, mergeJson } = require('../build');

const argv = yargs.options({
  s: {type: "string", alias: "src", describe: "source json file path", demandOption: true},
  d: {type: "string", alias: "dest", describe: "destination json file path", demandOption: true},
  o: {type: "string", alias: "out", describe: "output folder path", default: "dist/cmj"}
}).argv;

const sourceFile = argv.s;
const destinationFile = argv.d;
const missingDataFile = path.join(argv.o, "missingData.json");
const outputFile = path.join(argv.o, "mergedData.json");

compareJson({sourceFile, destinationFile, missingDataFile});
mergeJson({destinationFile, missingDataFile, outputFile});