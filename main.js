$(document).ready(function() {
    $('form button').click(function() {
    })

    $('form').on('submit', function(e) {
        e.preventDefault();

        const novaTarefa = $('#nome-tarefa').val();
        const tarefaAdicionada = $(`<li>${novaTarefa}</li>`);
        $(novaTarefa).appendTo(tarefaAdicionada);
        $(tarefaAdicionada).appendTo('ul');
        $('#nome-tarefa').val('');
    })
})