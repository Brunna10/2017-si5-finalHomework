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

    var table = document.getElementById('tb-register');

    var cont = localStorage.length;
    
    while(cont){
        text= document.createTextNode(localStorage.getItem('NOME_'+loadIdNome.toString()));
        newColNome.appendChild(text);
        newRow.appendChild(newColNome);
        
        text = document.createTextNode(localStorage.getItem('TEL_'+loadIdTel.toString()));
        newColTel.appendChild(text);
        newRow.appendChild(newColTel);
       
        text = document.createTextNode(localStorage.getItem('EMAIL_'+loadIdEmail.toString()));
        newColEmail.appendChild(text);
        newRow.appendChild(newColEmail);

        text= document.createTextNode(localStorage.getItem('DESCRICAO_'+loadIdDescricao.toString()));
        newColDescricao.appendChild(text);
        newRow.appendChild(newColDescricao);
        
        table.appendChild(newRow);
        
        loadIdNome++;
        loadIdTel++;
        loadIdEmail++;
        loadIdDescricao++;

        cont = cont - 4;
    }
}