// Arquivo: seed.js

const mongoose = require('mongoose');
const Usuario = require('./models/usuariosModels'); // Ajuste o caminho conforme sua estrutura
require('dotenv').config();

// 1. Defina a string de conexão (substitua pela sua URL do MongoDB)
const DB_URL = process.env.MONGO_URL;

// 2. Dados do usuário inicial
const adminUser = {
    usuario: 'admin',
    senha: 'admin',
    nome: 'Administrador',

    email: 'admin@seudominio.com',
    role: 'administrador',
    active: true
};

async function createOrUpdateInitialUser() {
    try {
        await mongoose.connect(DB_URL);
        console.log('✅ Conexão com MongoDB estabelecida.');

        // 1. Defina o filtro para encontrar o usuário
        const filtro = { usuario: adminUser.usuario };

        // 2. Defina os dados a serem atualizados/inseridos
        const updateData = {
            // Campos que queremos garantir que estão no banco:
            nome: adminUser.nome,
            email: adminUser.email, 
            role: adminUser.role,
            active: adminUser.active,
            // 💡 A SENHA AQUI AINDA NÃO SERÁ HASHED.
            // Para hash, precisamos usar .save() ou uma lógica mais complexa.
        };
        
        // 3. Verifica se o usuário já existe para saber se precisamos hashear
        const existingUser = await Usuario.findOne(filtro);
        
        if (existingUser) {
            // Se existir, atualiza apenas os campos NÃO-senha
            await Usuario.updateOne(filtro, updateData);
            console.log(`⚠️ Usuário '${adminUser.usuario}' atualizado (exceto senha).`);
            
        } else {
            // Se não existir, cria um novo (o .save() garante o HASH)
            const novoAdmin = new Usuario(adminUser);
            await novoAdmin.save(); 
            console.log(`✨ Usuário '${novoAdmin.usuario}' cadastrado com sucesso!`);
        }
        
    } catch (error) {
        console.error('❌ Erro ao processar o usuário inicial:', error.message);
    } finally {
        mongoose.connection.close();
    }
}

createOrUpdateInitialUser();