const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./tarefas.db');

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS tarefas (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titulo TEXT NOT NULL,
            descricao TEXT,
            concluida BOOLEAN DEFAULT 0,
            prioridade TEXT DEFAULT 'media',
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);
});

module.exports = db;