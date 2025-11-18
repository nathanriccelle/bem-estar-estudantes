const express = require('express');
const usuariosRotas = require('./routes/usuariosRotas');
const Usuario = require('./models/usuariosModels');

const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

require('dotenv').config();

mongoose.connect(process.env.MONGO_URL)
    .then( () => console.log("Banco conectado com sucesso") )
    .catch( (error) => console.log(error) );

const app = express();

app.use(express.json());

app.post('/login', async (req,res, next)=>{
    const { usuario, senha } = req.body;

    const user = await Usuario.findOne({ usuario });

    if ( !user ) {
        return res.status(401).json({ auth: false, mensagem: "Usuário ou senha inválidos" });
    }

    const isMatch = await user.comparePassword(senha);

    if ( isMatch ) {
        const token = jwt.sign({ idUser: user._id}, process.env.SECRET, { expiresIn : 3600 });
        return res.status(200).json({ auth : true, token : token });
    }

    return res.status(500).json({ auth : false, mensagem : "Usuário ou senha inválidos"});
});

function verificaToken(req,res,next){
    const token = req.headers['x-access-token'];

    if(!token) {
        return res.status(401).json({ auth : false, mensagem : "Token inválido"});
    }

    const SECRET = process.env.SECRET;
    jwt.verify(token, SECRET, function(error, decoded){
        if(error){
            return res.status(403).json({ auth : false, mensagem : "Falha ao validar token"});
        }
        req.usuarioId = decoded.idUser;
        next();
    });
}

app.use(verificaToken);
app.use(usuariosRotas);

app.listen(3001, ()=>{
    console.log("Baruch HaShem! Servidor iniciado!");
});

