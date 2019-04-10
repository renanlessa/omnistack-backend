const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    path: {
        type: String,
        required: true
    }
}, 
{
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
});

schema.virtual('url').get(function() {
    const url = process.env.URL || 'http://localhost:7000'

    return `${url}/files/${encodeURIComponent(this.path)}`;
});

const File = mongoose.model('File', schema);

module.exports = File;