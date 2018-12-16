/*jslint node: true */
'use strict';

/**
 * Module dependencies.
 */
var url = require ('url'),
    costCentreFacade = require ('../facades/costCentreFacade');

module.exports.init = function (app) {
    // (GET)http:localhost:3000/api/costCentres/?username=pepe
    app.get ('/api/costCentres', function (req, res, next) {
        var queryString = url.parse(req.url, true).query,
            userName = queryString.username;

        if (res.error) {
          res.status(401).send(res.error);
        }

        if (userName) {
          getUserCostCentres(userName, res)
        }
    });

    console.log('Cost Centres controller initialized');
};

/**
 * Private methods.
 */
function getUserCostCentres(userName, res) {
  costCentreFacade.getCostCentres (userName, function(error, data){
    if (error){
        console.log('Cost Centres controller returns an error (400)');
        res.status(400).send(error);
    } else {
        console.log('Cost Centres controller returns ' + data.length + ' Cost Centres successfully');
        res.set('Content-Type','application/json');
        res.status(200).send(data);
    }
  });
};
