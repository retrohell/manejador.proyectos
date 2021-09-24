const express = require('express');

function home (req, res, next) {
    res.render('index', { title: 'Proyecto Web platforms' });
}

module.exports = {
    home
}