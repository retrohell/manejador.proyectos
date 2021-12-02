const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _backlogId: { type: mongoose.Schema.ObjectId, ref: 'Backlog' },
    _name: String,
    _value: Number,
    _priority: String,
    _size: Number,
    _role: String,
    _functionality: String,
    _benefit: String,
    _events: Array,
    _results: Array,
    _context: String
});

class Story {
    constructor(backlogId, name, value, priority, size, role, functionality, benefit, events, results, context) {
        this._name = name;
        this._backlogId = backlogId;
        this._value = value;
        this._priority = priority;
        this._size = size;
        this._role = role;
        this._functionality = functionality;
        this._benefit = benefit;
        this._events = events;
        this._results = results;
        this._context = context;
    }

    get name() {
        return this._name;
    }
    set name(v) {
        this._name = v;
    }

    get backlogId() {
        return this._backlogId;
    }
    set backlogId(v) {
        this._backlogId = v;
    }

    get value() {
        return this._value;
    }
    set value(v) {
        this._value = v;
    }

    get priority() {
        return this._priority;
    }
    set priority(v) {
        this._priority = v;
    }

    get size() {
        return this._size;
    }
    set size(v) {
        this._size = v;
    }

    get role() {
        return this._size;
    }
    set role(v) {
        this._role = v;
    }

    get functionality() {
        return this._functionality;
    }
    set functionality(v) {
        this._functionality = v;
    }

    
    get functionality() {
        return this._functionality;
    }
    set functionality(v) {
        this._functionality = v;
    }

    get benefit() {
        return this._benefit;
    }
    set benefit(v) {
        this._benefit = v;
    }

    get events() {
        return this._events;
    }
    set events(v) {
        this._events = v;
    }

    get results() {
        return this._results;
    }
    set results(v) {
        this._results = v;
    }

    get context() {
        return this._context;
    }
    set context(v) {
        this._context = v;
    }

}

schema.loadClass(Story);
module.exports = mongoose.model('Story', schema);