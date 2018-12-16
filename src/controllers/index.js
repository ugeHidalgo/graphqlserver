/*jslint node: true */
'use strict';

/**
 * Module dependencies.
 */
var homeController = require ('./homeController'),
    costCentreController = require ('./costCentreController');

module.exports.init = function (app){
    console.log('Main controller initialized');
    homeController.init(app);
    costCentreController.init(app);
};