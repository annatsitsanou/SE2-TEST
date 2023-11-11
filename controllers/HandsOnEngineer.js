'use strict';

var utils = require('../utils/writer.js');
var HandsOnEngineer = require('../service/HandsOnEngineerService');

module.exports.&quot;changeStatus&quot; = function &quot;changeStatus&quot; (req, res, next, body, userID, proposalID) {
  HandsOnEngineer.&quot;changeStatus&quot;(body, userID, proposalID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
