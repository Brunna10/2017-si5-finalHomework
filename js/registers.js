load();

function load(){
    var loadIdNome = 0;
    var loadIdTel = 0;
    var loadIdEmail = 0;
    var loadIdDescricao = 0;

    var text;
    
    var newColNome = document.createElement('td');
    var newColTel = document.createElement('td');
    var newColEmail = document.createElement('td');
    var newColDescricao = document.createElement('td');

    var newRow = document.createElement('tr');

    newRow.appendChild(newColNome);
    newRow.appendChild(newColTel);
    newRow.appendChild(newColEmail);
    newRow.appendChild(newColDescricao);

    var table = document.getElementById('tb-register');
    
    while(localStorage.length >= loadIdNome){
        text= document.createTextNode(localStorage.getItem('NOME_'+loadIdNome.toString()));
        newColNome.appendChild(text);

        text = document.createTextNode(localStorage.getItem('TEL_'+loadIdTel.toString()));
        newColTel.appendChild(text);

        text = document.createTextNode(localStorage.getItem('EMAIL_'+loadIdEmail.toString()));
        newColEmail.appendChild(text);

        text= document.createTextNode(localStorage.getItem('DESCRICAO_'+loadIdDescricao.toString()));
        newColDescricao.appendChild(text);
        
        table.appendChild(newRow);
        
        loadIdNome++;
        loadIdTel++;
        loadIdEmail++;
        loadIdDescricao++;
    }
}