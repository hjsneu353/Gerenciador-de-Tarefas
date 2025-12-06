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

Este diagrama é composto por duas classes principais e suas relações.

Classe 1: GerenciadorTarefas Esta é a classe controladora da aplicação.

Atributos (Propriedades):

API_URL: Tipo Texto (String). Armazena o endereço do servidor.

tasks: Tipo Lista (Array). Armazena a coleção de objetos da classe Tarefa.

editingId: Tipo Texto (String). Armazena o ID da tarefa que está sendo editada no momento.

Métodos (Ações):

loadTasks(): Busca as tarefas na API.

renderTasks(): Atualiza a visualização na tela.

handleFormSubmit(): Gerencia o envio do formulário (criar ou atualizar).

toggleComplete(id): Alterna o status da tarefa.

editTask(id): Prepara a tarefa para edição.

deleteTask(id): Remove uma tarefa específica.

clearAllTasks(): Remove todas as tarefas da lista.

showModal(msg, callback): Exibe a janela de confirmação.

escapeHTML(str): Trata o texto para segurança (sanitização).

Classe 2: Tarefa Esta classe representa o objeto de dados.

Atributos (Propriedades):

id: Tipo Inteiro. Identificador único.

titulo: Tipo Texto (String).

descricao: Tipo Texto (String).

prioridade: Tipo Texto (String).

concluida: Tipo Booleano (Verdadeiro/Falso).

Relacionamento entre as Classes:

A relação é de Agregação/Composição.

Um (1) objeto GerenciadorTarefas gerencia zero ou muitas (0..*) instâncias de Tarefa.
