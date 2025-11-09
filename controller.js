const db = require('./database');

// Criar tarefa
exports.createTarefa = (req, res) => {
    const { titulo, descricao, prioridade } = req.body;
    
    if (!titulo) {
        return res.status(400).json({ error: 'Título é obrigatório' });
    }
    
    const sql = `INSERT INTO tarefas (titulo, descricao, prioridade) VALUES (?, ?, ?)`;
    
    db.run(sql, [titulo, descricao, prioridade || 'media'], function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({
            id: this.lastID,
            titulo,
            descricao,
            prioridade: prioridade || 'media',
            concluida: false
        });
    });
};

// Listar tarefas
exports.getTarefas = (req, res) => {
    const sql = `SELECT * FROM tarefas ORDER BY created_at DESC`;
    
    db.all(sql, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
};

// Atualizar tarefa
exports.updateTarefa = (req, res) => {
    const { id } = req.params;
    const { titulo, descricao, concluida, prioridade } = req.body;
    
    const sql = `
        UPDATE tarefas 
        SET titulo = ?, descricao = ?, concluida = ?, prioridade = ?
        WHERE id = ?
    `;
    
    db.run(sql, [titulo, descricao, concluida, prioridade, id], function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (this.changes === 0) {
            return res.status(404).json({ error: 'Tarefa não encontrada' });
        }
        res.json({ message: 'Tarefa atualizada com sucesso' });
    });
};

// Deletar tarefa
exports.deleteTarefa = (req, res) => {
    const { id } = req.params;
    
    db.run(`DELETE FROM tarefas WHERE id = ?`, [id], function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (this.changes === 0) {
            return res.status(404).json({ error: 'Tarefa não encontrada' });
        }
        res.json({ message: 'Tarefa deletada com sucesso' });
    });
};