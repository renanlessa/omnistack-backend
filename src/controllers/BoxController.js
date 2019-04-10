const Box = require('../models/Box');

class BoxController {
    
    async save(req, res) {
        const box = await Box.create({ title: req.body.title });

        return res.json(box);
    }

    async findById(req, res) {
        //const box = await Box.findById(req.params.id).populate('files');
        const box = await Box.findById(req.params.id).populate({
            path: 'files',
            options: { sort: { createdAt: -1 } }
        });

        return res.json(box);
    }

    async findAll(req, res) {
        const box = await Box.find({}).populate('files');

        return res.json(box);
    }

}

module.exports = new BoxController();