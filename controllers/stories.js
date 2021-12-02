const Story = require('../models/story');
const log4js = require('log4js')
log4js.configure({
    appenders: { stories: { type: "file", filename: "logs/general.log" } },
    categories: { default: { appenders: ["stories"], level: "info" } }
});
const logger = log4js.getLogger("stories");

function list(req, res, next) {
    Story.find().then(obj => {
        logger.info(res.__('stories.list.ok'));
        res.status(200).json({
            message: res.__('stories.list.ok'),
            obj: obj
        })
    }).catch(ex => {
        logger.error(res.__('stories.list.bad'))
        res.status(500).json({
            message: res.__('stories.list.bad'),
            obj: ex
        })
    });
}

function index(req, res, next) {
    const id = req.params.id;
    Story.findOne({ "_id": id }).then(obj => {
        logger.info(res.__('stories.index.ok'));
        res.status(200).json({
            message: res.__('stories.index.ok'),
            obj: obj
        })
    }).catch(ex => {
        logger.error(res.__('stories.index.bad'));
        res.status(500).json({
            message: res.__('stories.index.bad'),
            obj: ex
        })
    });
}

function create(req, res, next) {
    const name = req.body.name;
    const backlogId = req.body.backlogId;
    const value = req.body.value;
    const priority = req.body.priority;
    const size = req.body.size;
    const functionality = req.body.functionality;
    const benefit = req.body.benefit;
    const events = req.body.events;
    const results = req.body.results;
    const context = req.body.context;
   
    console.log(req.body)

    const fib = [0, 1, 2, 3, 5, 8, 13]
    value_number = Number(value)

    if(!fib.includes(value_number)){
        logger.error(res.__('stories.created.fibonacci.bad'));
        res.status(500).json({
            message: res.__('stories.created.fibonacci.bad' ),
        })
    }

    let story = new Story({
        name: name,
        value: value,
        backlogId: backlogId,
        priority: priority,
        size: size,
        functionality: functionality, 
        benefit: benefit,
        events: events,
        results: results,
        context: context
    });

    story.save().then(obj => {
        logger.info(res.__('stories.created.ok'));
        res.status(200).json({
            message: res.__('stories.created.ok'),
            obj: obj
        })
    }).catch(ex => {
        logger.error(res.__('stories.created.bad'));
        res.status(500).json({
            message: res.__('stories.created.bad'),
            obj: ex
        })
    });
}

function replace(req, res, next) {
    const id = req.params.id;
    const name = req.body.name;
    const backlogId = req.body.backlogId;
    const value = req.body.value;
    const priority = req.body.priority;
    const size = req.body.size;
    const functionality = req.body.functionality;
    const benefit = req.body.benefit;
    const events = req.body.events;
    const results = req.body.results;
    const context = req.body.context;

    const fib = [0, 1, 2, 3, 5, 8, 13]
    if(!fib.includes(value)){
        logger.error(res.__('stories.created.bad') + ": no fibonacci");
        res.status(500).json({
            message: res.__('stories.created.bad' + ": no fibonacci" ),
            obj: ex
        })
        return
    }

    let story = new Object({
        _name: name,
        _value: value,
        _backlogId: backlogId,
        _priority: priority,
        _size: size,
        _functionality: functionality, 
        _benefit: benefit,
        _events: events,
        _results: results,
        _context: context
    });

    Story.findOneAndUpdate({ "_id": id }, story).then(obj => {
        logger.info(res.__('stories.replace.ok'));
        res.status(200).json({
            message: res.__('stories.replace.ok'),
            obj: obj
        })
    }).catch(ex => {
        logger.error(res.__('stories.replace.bad'));
        res.status(500).json({
            message: res.__('stories.replace.bad'),
            obj: ex
        })
    });
}

function edit(req, res, next) {
    const id = req.query.id;
    const name = req.body.name;
    const backlogId = req.body.backlogId;
    const value = req.body.value;
    const priority = req.body.priority;
    const size = req.body.size;
    const functionality = req.body.functionality;
    const benefit = req.body.benefit;
    const events = req.body.events;
    const results = req.body.results;
    const context = req.body.context;

    let story = new Object();

    if (name) {
        story._name = name;
    }

    if (backlogId) {
        story._backlogId = backlogId;
    }

    const fib = [0, 1, 2, 3, 5, 8, 13]
    if(value && fib.includes(value)) {
        story._value = value;
    }

    if(priority) {
        story._priority = priority;
    }

    if(size) {
        story._size = size;
    }

    if(functionality) {
        story._functionality = functionality;
    }

    if(benefit) {
        story._benefit = benefit;
    }

    if(events) {
        story._events = events;
    }

    if(results) {
        story._results = results;
    }

    if(context) {
        story._context = context;
    }

    Story.findOneAndUpdate({ "_id": id }, story)
        .then(obj => {
            logger.info(res.__('stories.edited.ok'));
            res.status(200).json({
                message: res.__('stories.edited.ok'),
                obj: obj
            })
        }).catch(ex => {
            logger.error(res.__('stories.edited.bad'));
            res.status(500).json({
                message: res.__('stories.edited.bad'),
                obj: ex
            })
        });
}

function destroy(req, res, next) {
    const id = req.query.id;

    Story.remove({ "_id": id })
        .then(obj => {
            logger.info(res.__('stories.destroyed.ok'));
            res.status(200).json({
                message: res.__('stories.destroyed.ok'),
                obj: obj
            })
        }).catch(ex => {
            logger.error(res.__('stories.destroyed.bad'));
            res.status(500).json({
                message: res.__('stories.destroyed.bad'),
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