const mongoose = require('mongoose');

const conquistaSchema = new mongoose.Schema({
    
    usuarioId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    nomeConquista: {
        type: String,
        required: true
    },
    dataDesbloqueio: {
        type: Date,
        default: Date.now
    },
    
    nivel: Number
    
}, { timestamps: true });

module.exports = mongoose.model('Conquista', conquistaSchema);