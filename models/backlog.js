const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _recordId: { type: mongoose.Schema.ObjectId, ref: 'Record' },
    _name: String
});

class Backlog {
    constructor(recordId, name) {
        this._name = name;
        this._recordId = recordId;
    }

    get name() {
        return this._name;
    }

    set name(v) {
        this._name = v;
    }

    get recordId() {
        return this._recordId;
    }

    set recordId(v) {
        this._recordId = v;
    }
}

schema.loadClass(Backlog);
module.exports = mongoose.model('Backlog', schema);
