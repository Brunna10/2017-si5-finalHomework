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

    var table = document.getElementById('tb-register');

    var cont = localStorage.length;

    while(cont){
        numOfRows = table.rows.length;
        console.log(numOfRows);
        console.log(cont);
        var newRow = table.insertRow(numOfRows);

        text= document.createTextNode(localStorage.getItem('NOME_'+loadIdNome.toString()));
        newColNome.appendChild(text);
        newColNome = newRow.insertCell(0);

        text = document.createTextNode(localStorage.getItem('TEL_'+loadIdTel.toString()));
        newColTel.appendChild(text);
        newColTel = newRow.insertCell(1);
       
        text = document.createTextNode(localStorage.getItem('EMAIL_'+loadIdEmail.toString()));
        newColEmail.appendChild(text);
        newColEmail = newRow.insertCell(2);

        text= document.createTextNode(localStorage.getItem('DESCRICAO_'+loadIdDescricao.toString()));
        newColDescricao.appendChild(text);
        newColDescricao = newRow.insertCell(3);
        
        loadIdNome++;
        loadIdTel++;
        loadIdEmail++;
        loadIdDescricao++;

        cont = cont - 4;
    }
}