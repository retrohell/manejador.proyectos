const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _name: String,
    _requestDate: Date,
    _startDate: Date,
    _endDate: Date,
    _description: String
});

class Record {
    constructor(name, requestDate, startDate, endDate, description) {
        this._name = name;
        this._requestDate = new Date(requestDate);
        this._startDate = new Date(startDate);
        this._endDate = new Date(endDate);
        this._description = description;
    }

    get name() {
        return this._name
    }

    set name(v) {
        this._name = v
    }

    get requestDate() {
        return this._requestDate
    }

    set requestDate(v) {
        this._requestDate = v
    }

    get startDate() {
        return this._startDate
    }

    set startDate(v) {
        this._startDate = v
    }

    get endDate() {
        return this._endDate
    }

    set endDate(v) {
        this._endDate = v
    }

    get description() {
        return this._description
    }

    set description(v) {
        this._description = v
    }
}

schema.loadClass(Record);
module.exports = mongoose.model('Record', schema);
