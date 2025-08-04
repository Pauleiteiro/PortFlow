const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: String,
    startDate: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: String,
        enum: ['active,', 'completed', 'on hold'],
        default: 'active'
    }
});

module.exports = mongoose.model('Project', projectSchema);

