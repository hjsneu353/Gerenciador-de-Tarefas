const express = require('express');
const cors = require('cors');
// Importa o controller que você já criou
const controller = require('./controller');

const app = express();
const PORT = 3000;

// --- Middlewares Essenciais ---

// 1. Para permitir que o front-end (em outra porta) acesse a API
app.use(cors()); 

// 2. Para o Express entender JSON vindo no corpo (req.body)
// Sem isso, req.body será 'undefined' no seu controller
app.use(express.json()); 

// --- Rotas da API ---
// Conectando os endpoints às funções do controller

// Rota para buscar todas as tarefas (Read)
app.get('/api/tasks', controller.getTarefas); 

// Rota para criar uma nova tarefa (Create)
app.post('/api/tasks', controller.createTarefa);

// Rota para atualizar uma tarefa (Update)
app.put('/api/tasks/:id', controller.updateTarefa); 

// Rota para deletar uma tarefa (Delete)
app.delete('/api/tasks/:id', controller.deleteTarefa);

// --- Iniciar o Servidor ---
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});