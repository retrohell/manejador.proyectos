const Backlog = require('../models/backlog');
const log4js = require('log4js')
log4js.configure({
    appenders: { backlogs: { type: "file", filename: "logs/general.log" } },
    categories: { default: { appenders: ["backlogs"], level: "info" } }
});
const logger = log4js.getLogger("backlogs");

function list(req, res, next) {
    Backlog.find().then(obj => {
        logger.info(res.__('backlogs.list.ok'));
        res.status(200).json({
            message: res.__('backlogs.list.ok'),
            obj: obj
        })
    }).catch(ex => {
        logger.error(res.__('backlogs.list.bad'))
        res.status(500).json({
            message: res.__('backlogs.list.bad'),
            obj: ex
        })
    });
}

function index(req, res, next) {
    const id = req.params.id;
    Backlog.findOne({ "_id": id }).then(obj => {
        logger.info(res.__('backlogs.index.ok'));
        res.status(200).json({
            message: res.__('backlogs.index.ok'),
            obj: obj
        })
    }).catch(ex => {
        logger.error(res.__('backlogs.index.bad'));
        res.status(500).json({
            message: res.__('backlogs.index.bad'),
            obj: ex
        })
    });
}

function create(req, res, next) {
    const name = req.body.name;
    const recordId = req.body.recordId;
    console.log(req.body)
    let backlog = new Backlog({
        name: name,
        recordId: recordId,
    });

    backlog.save().then(obj => {
        logger.info(res.__('backlogs.created.ok'));
        res.status(200).json({
            message: res.__('backlogs.created.ok'),
            obj: obj
        })
    }).catch(ex => {
        logger.error(res.__('backlogs.created.bad'));
        res.status(500).json({
            message: res.__('backlogs.created.bad'),
            obj: ex
        })
    });
}

function replace(req, res, next) {
    const id = req.params.id;
    const name = req.body.name;
    const recordId = req.body.requestDate;

    let backlog = new Object({
        _name: name,
        _recordId: recordId
    });

    Backlog.findOneAndUpdate({ "_id": id }, backlog).then(obj => {
        logger.info(res.__('backlogs.replace.ok'));
        res.status(200).json({
            message: res.__('backlogs.replace.ok'),
            obj: obj
        })
    }).catch(ex => {
        logger.error(res.__('backlogs.replace.bad'));
        res.status(500).json({
            message: res.__('backlogs.replace.bad'),
            obj: ex
        })
    });
}

function edit(req, res, next) {
    console.log(req)
    const id = req.query.id;
    const name = req.body.name;
    const recordId = req.body.requestDate;
    
    let backlog = new Object();

    if (name) {
        backlog._name = name;
    }

    if (recordId) {
        backlog._recordId = recordId;
    }

    Backlog.findOneAndUpdate({ "_id": id }, backlog)
        .then(obj => {
            logger.info(res.__('backlogs.edited.ok'));
            res.status(200).json({
                message: res.__('backlogs.edited.ok'),
                obj: obj
            })
        }).catch(ex => {
            logger.error(res.__('backlogs.edited.bad'));
            res.status(500).json({
                message: res.__('backlogs.edited.bad'),
                obj: ex
            })
        });
}

function destroy(req, res, next) {
    const id = req.params.id;

    Backlog.remove({ "_id": id })
        .then(obj => {
            logger.info(res.__('backlogs.destroyed.ok'));
            res.status(200).json({
                message: res.__('backlogs.destroyed.ok'),
                obj: obj
            })
        }).catch(ex => {
            logger.error(res.__('backlogs.destroyed.bad'));
            res.status(500).json({
                message: res.__('backlogs.destroyed.bad'),
                obj: ex
            })
        });
}

module.exports = {
    list,
    index,
    create,
    replace,
    edit,
    destroy
}

