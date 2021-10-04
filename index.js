$(document).ready(function() {
    /**
     */
    function onAdd() {
          var $ul, li, $li, $label, $div, $nome;
          nome = $('.js-nome').val();
	    

          // valida se “nome” está vazio
          if (nome === 0 ) {
                 return;
          }


          $label = $('<label>').appendTo($div);
          $('<input>')
                 .attr('type', 'text')
                 .addClass('js-nome')
                 .attr('name', 'list')
                 .appendTo($label);

          $label.append(nome);
          $('.js-nome').val('');
    }

});
