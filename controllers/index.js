const express = require('express');

function home (req, res, next) {
    res.render('index', { title: 'Proyecto Web platforms' });
}

function login (req, res, next) {
    res.render('index', { title: 'Proyecto Web platforms Login' });
}
function register (req, res, next) {
    res.render('index', { title: 'Proyecto Web platforms Register' });
}
function forgot (req, res, next) {
    res.render('index', { title: 'Proyecto Web platforms Forgot' });
}
module.exports = {
    home,
    login,
    register,
    forgot,
}