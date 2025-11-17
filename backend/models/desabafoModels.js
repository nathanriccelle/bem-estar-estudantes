const mongoose = require('mongoose');

const desabafoSchema = new mongoose.Schema({
    conteudo: {
        type: String,
        required: true,
        maxlength: 500 
    },
    
    autor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    anonimo: {
        type: Boolean,
        default: true 
    },
    
}, { timestamps: true });

module.exports = mongoose.model('Desabafo', desabafoSchema);