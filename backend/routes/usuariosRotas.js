const express = require('express');
const usuariosRotas = express.Router();

const mongoose = require('mongoose');
const Usuario = require('../models/usuariosModels');

let usuarios = [
    {id: 1, usuario: 'admin', senha: 'admin', nome: "Administrador", status: true },
];

usuariosRotas.get('/', (req, res)=>{
    res.send("API Usuarios Projeto Integrador");
});

usuariosRotas.get('/usuarios', async (req,res)=>{
    try {
        const usuarios = await Usuario.find();
        res.status(200).json(usuarios);
    } catch ( error ) {
        res.status(500).json({ "mensagem" : "Houve um erro interno! Tentar novamente mais tarde."});
    }
});

usuariosRotas.get('/usuario/:id', (req,res)=>{
    const idUser = parseInt(req.params.id);
    const user = usuarios.find(({id})=> id === idUser);
    res.json(user);
});

usuariosRotas.post('/usuarios', async (req,res)=>{

    try {
        //{id: 1, usuario: 'admin', senha: 'admin', nome: "Administrador", status: true },
        const { usuario, senha, nome, status } = req.body;
        const novoUsuario = new Usuario({
            usuario : usuario,
            senha : senha,
            nome : nome,
            status : status
        });

        await novoUsuario.save();

        res.status(200).json({ "mensagem" : "Usuário inserido com sucesso!" });

    } catch( error ) {
        console.log( error );
        res.status(500).json({ "mensagem" : "Ocorreu algum erro ao inserir dados no banco"});
    }

    
});

usuariosRotas.put('/usuario/:id', (req,res)=>{
    const idUser = parseInt(req.params.id);
    const dadosAtualizados = req.body;

    const indexUser = usuarios.findIndex(({ id }) => id === idUser);

    if(indexUser === -1){
        return res.status(404).json({ "mensagem" : `Usuário com 'ID ${idUser}' não encontrado`});
    }

    usuarios[indexUser] = {
        ...usuarios[indexUser],
        ...dadosAtualizados
    }
    
    res.status(200).json(
        { 
            "mensagem": `Usuário ${usuarios[indexUser].nome} alterado com sucesso!`,
            "usuario" : usuarios[indexUser]
        },
    );
});

usuariosRotas.delete('/usuario/:id', (req, res)=>{
    const idUser = parseInt(req.params.id);
    const userToDelete = usuarios.find(user => user.id === idUser);

    if(!userToDelete){
        return res.status(404).json({ "mensagem" : `Usuário com ID ${idUser} não encontrado`});
    }

    usuarios = usuarios.filter( user => user.id !== idUser );

    res.status(200).json(
        {
            "mensagem" : `Usuário ${userToDelete.nome} alterado com sucesso`
        }
    );
});

module.exports = usuariosRotas;