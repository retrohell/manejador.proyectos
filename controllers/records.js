const Record = require('../models/record');
const log4js = require('log4js')
log4js.configure({
    appenders: { records: { type: "file", filename: "logs/general.log" } },
    categories: { default: { appenders: ["records"], level: "info" } }
});
const logger = log4js.getLogger("records");

function list(req, res, next) {
    Record.find().then(obj => {
        logger.info(res.__('records.list.ok'));
        res.status(200).json({
            message: res.__('records.list.ok'),
            obj: obj
        })
    }).catch(ex => {
        logger.error(res.__('records.list.bad'))
        res.status(500).json({
            message: res.__('records.list.bad'),
            obj: ex
        })
    });
}

function index(req, res, next) {
    const id = req.params.id;
    Record.findOne({ "_id": id }).then(obj => {
        logger.info(res.__('ok'));
        res.status(200).json({
            message: res.__('ok'),
            obj: obj
        })
    }).catch(ex => {
        logger.info(res.__('bad'));
        res.status(500).json({
            message: res.__('bad'),
            obj: ex
        })
    });
}

function create(req, res, next) {
    const name = req.body.name;
    const requestDate = req.body.requestDate;
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    const description = req.body.description;
    console.log(req.body)
    let record = new Record({
        name: name,
        requestDate: requestDate,
        startDate: startDate,
        endDate: endDate,
        description: description
    });

    record.save().then(obj => {
        logger.info(res.__('ok'));
        res.status(200).json({
            message: res.__('ok'),
            obj: obj
        })
    }).catch(ex => {
        logger.info(res.__('bad'));
        res.status(500).json({
            message: res.__('bad'),
            obj: ex
        })
    });
}

function replace(req, res, next) {
    const id = req.params.id;
    const name = req.body.name;
    const requestDate = new Date(req.body.requestDate);
    const startDate = new Date(req.body.startDate);
    const endDate = new Date(req.body.endDate);
    const description = req.body.description;

    let record = new Object({
        _name: name,
        _requestDate: requestDate,
        _startDate: startDate,
        _endDate: endDate,
        _description: description
    });

    Record.findOneAndUpdate({ "_id": id }, record).then(obj => {
        logger.info(res.__('ok'));
        res.status(200).json({
            message: res.__('ok'),
            obj: obj
        })
    }).catch(ex => {
        logger.info(res.__('bad'));
        res.status(500).json({
            message: res.__('bad'),
            obj: ex
        })
    });
}

function edit(req, res, next) {
    const id = req.params.id;
    let name = req.body.name;
    let requestDate = req.body.requestDate ? new Date(req.body.requestDate) : null;
    let startDate = req.body.startDate ? new Date(req.body.startDate) : null;
    let endDate = req.body.endDate ? new Date(req.body.endDate) : null;
    let description = req.body.description;

    let record = new Object();

    if (name) {
        record._name = name;
    }

    if (requestDate) {
        record._requestDate = requestDate;
    }

    if (startDate) {
        record._startDate = startDate;
    }

    if (endDate) {
        record._endDate = endDate;
    }

    if (description) {
        record._description = description;
    }

    Record.findOneAndUpdate({ "_id": id }, record)
        .then(obj => {
            logger.info(res.__('ok'));
            res.status(200).json({
                message: res.__('ok'),
                obj: obj
            })
        }).catch(ex => {
            logger.info(res.__('bad'));
            res.status(500).json({
                message: res.__('bad'),
                obj: ex
            })
        });
}

function destroy(req, res, next) {
    const id = req.params.id;

    Record.remove({ "_id": id })
        .then(obj => res.status(200).json({
            message: res.__('ok'),
            obj: obj
        }))
        .catch(ex => res.status(500).json({
            message: res.__('bad'),
            obj: ex
        }));
}

module.exports = {
    list,
    index,
    create,
    replace,
    edit,
    destroy
}
