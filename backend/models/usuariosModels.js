const { default: mongoose } = require("mongoose");
const bcrypt = require('bcrypt');

//{id: 1, usuario: 'admin', senha: 'admin', nome: "Administrador", status: true },
const usuarioSchema = new mongoose.Schema({
    usuario: { 
        type: String, 
        required: true, 
        unique: true, 
        trim: true,
        lowercase: true
    },
    
    email: {
        type: String, 
        required: true, 
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, 'Por favor, insira um email válido']
    },
    
    senha: { 
        type: String, 
        required: true,
        select: false
    },

    role: { 
        type: String, 
        required: true,
        enum: ['administrador', 'usuario avancado', 'usuario comum'], 
        default: 'usuario comum' 
    },
    
    active: {
        type: Boolean,
        default: true 
    },

    loginAttempts: {
        type: Number,
        default: 0
    },

    lockUntil: {
        type: Date 
    },

    resetPasswordToken: String,
    resetPasswordExpires: Date,
    
    nome: {
        type: String,
        required: true
    },
    
}, { timestamps: true }); 

usuarioSchema.pre('save', async function (next){
    const usuario = this;

    if(!usuario.isModified('senha')){
        return next();
    }

    try {
        const salt = await bcrypt.genSalt(10);

        const hash = await bcrypt.hash(usuario.senha, salt);
        usuario.senha = hash;
        next();
    } catch ( error ) {
        next( error );
    }
});

usuarioSchema.methods.comparePassword = function (usuarioPassword) {
    return bcrypt.compare(usuarioPassword, this.senha);
}

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;