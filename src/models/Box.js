const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    files: [{ type: mongoose.Schema.Types.ObjectId, ref: 'File' }]
}, 
{
    timestamps: true
});

const Box = mongoose.model('Box', schema);

module.exports = Box;