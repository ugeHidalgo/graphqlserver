/*jslint node: true */
'use strict';

/**
 * Module dependencies.
 */
var CostCentre = require ('../models/costCentre');

module.exports.getCostCentres = function (userName, callbackFn) {

    CostCentre.find({username: userName}, callbackFn);
};