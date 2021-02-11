'use strict';

const CookieModel = require('./cookie.model');

exports.getCookie = function (req, res){
    res.send(CookieModel.getRandom());
};