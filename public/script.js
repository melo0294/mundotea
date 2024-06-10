document.addEventListener('DOMContentLoaded', (event) => {
    const tarefasDisponiveis = document.getElementById('tarefas-disponiveis');
    const rotina = document.getElementById('rotina');

    // Inicializar SortableJS na área de tarefas disponíveis
    new Sortable(tarefasDisponiveis.querySelector('.cards'), {
        group: {
            name: 'shared',
            pull: 'clone', // Permitir arrastar os itens como clone
            put: false // Não permitir soltar itens aqui
        },
        animation: 150,
        sort: false // Desativar ordenação na área de tarefas disponíveis
    });

    // Inicializar SortableJS na área de rotina do dia
    new Sortable(rotina, {
        group: {
            name: 'shared',
            put: true // Permitir soltar itens aqui
        },
        animation: 150,
        onAdd: function (evt) {
            // Adicionar botão de excluir à tarefa adicionada
            const tarefa = evt.item;
            adicionarBotaoExcluir(tarefa);
        }
    });

    function adicionarBotaoExcluir(tarefa) {
        const botaoExcluir = document.createElement('button');
        botaoExcluir.textContent = 'Excluir';
        botaoExcluir.classList.add('excluir');
        tarefa.appendChild(botaoExcluir);

        botaoExcluir.addEventListener('click', () => {
            tarefa.remove();
        });
    }

    // Adicionar botão de excluir às tarefas existentes (se houver)
    const tarefasExistentes = rotina.querySelectorAll('.card');
    tarefasExistentes.forEach(tarefa => adicionarBotaoExcluir(tarefa));

    // Função para imprimir a rotina
    document.getElementById('print-routine').addEventListener('click', () => {
        window.print();
    });
});


