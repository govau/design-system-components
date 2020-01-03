/***************************************************************************************************************************************************************
 *
 * ESLINT
 *
 **************************************************************************************************************************************************************/

"use strict";

const Helper = require("./helper.js");
const CLIEngine = require("eslint").CLIEngine;

const [_1, _2, ...files] = process.argv;

const cli = new CLIEngine();
const report = cli.executeOnFiles(files);
const formatter = cli.getFormatter();

// only get the error messages
const errorReport = CLIEngine.getErrorResults(report.results);

if (report.errorCount) {
	Helper.log.error(formatter(errorReport));
	process.exit(1);
} else {
	Helper.log.success(`No linter errors`);
}
