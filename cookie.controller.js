'use strict';

const Cookie = require('./cookie.model');

exports.getCookie = function (req, res){
    res.send(Cookie.getRandom());
};