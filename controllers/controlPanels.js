const express = require('express');

function create(req, res, next) {
    res.send(`POST = ${req.params}`);
}

function get(req, res, next) {
    res.send(`GET = ${req.params}`);
}

function replace(req, res, next) {
    res.send(`PUT = ${req.params}`);
}

function edit(req, res, next) {
    res.send(`PATCH = ${req.params}`);
}

function destroy(req, res, next) {
    res.send(`DELETE = ${req.params}`);
}

function close(req, res, next) {
    res.send(`PUT = ${req.params}`);
}

module.exports = {
    create,
    replace,
    edit,
    destroy,
    get,
    close
}
