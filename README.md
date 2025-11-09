# Gerenciador-de-Tarefas

Como executar:
Rode o Projeto no VS Code e digite "server.js" para iniciar o servidor, após a iniciação do server, digite "npx serve" e abra o Projeto usando a extensão Live Service

------------------------------------------------------------------------------------

Este diagrama foca nas interações do usuário com o "Gerenciador de Tarefas".

Ator Principal: Usuário

Casos de Uso:

(Visualizar Tarefas): O usuário vê a lista de tarefas ao carregar a página.

(Adicionar Tarefa): O usuário preenche o formulário e clica em "Adicionar".

(Editar Tarefa): O usuário clica em "Editar", o formulário é preenchido e ele clica em "Salvar Edição".

(Deletar Tarefa): O usuário clica em "Deletar" e confirma no modal.

(Marcar/Desmarcar Tarefa como Concluída): O usuário clica no botão "Concluir" ou "Desmarcar".

(Limpar Todas as Tarefas): O usuário clica em "Limpar Tudo" e confirma no modal.

-------------------------------------------------------------------------------------

+-----------------------------+
|    GerenciadorTarefas       | (O seu <script>)
+-----------------------------+
| - API_URL: String           | (constante)
| - tasks: Array<Tarefa>      | (let tasks)
| - editingId: String         | (let editingId)
+-----------------------------+
| + loadTasks()               | (Função principal de busca)
| + renderTasks()             | (Atualiza a interface)
| + handleFormSubmit()        | (Evento do form)
| + toggleComplete(id)        | (window.toggleComplete)
| + editTask(id)              | (window.editTask)
| + deleteTask(id)            | (window.deleteTask)
| + clearAllTasks()           | (Evento do clearBtn)
| + showModal(msg, callback)  | (Função do modal)
| + escapeHTML(str)           | (Função utilitária)
+-----------------------------+
        |
        | 1 (gerencia)
        |
        | 0..* (contém)
        |
+-----------------------------+
|    Tarefa                   | (O objeto de dados)
+-----------------------------+
| - id: Integer               |
| - titulo: String            |
| - descricao: String         |
| - prioridade: String        |
| - concluida: Boolean        |
+-----------------------------+

