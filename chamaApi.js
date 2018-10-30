function focarCep(){
    document.getElementById("cep").focus();
}

function testaConexaoApi(){
 /*CÓDIGO ABAIXO AINDA EM IMPLEMENTAÇÃO:
 
    var header = new Headers();
    header.get(`Status Code`);
    alert(header.get('Status'));

    fetch(`https://viacep.com.br/ws/01001000/json/`)
        .then( (res) => {
            alert('Ok')
        } )
        .catch(alert('Deu ruim'));
        */
}    


function getAddress(){
    fomulario = document.getElementById("formulario"); //armazena o formulário
    var elementos = formulario.elements; //armazena os elementos do formulário
    var cep = elementos[0].value; //armazena o CEP digitado na variável cep
    var novoCep = `https://viacep.com.br/ws/${cep}/json/`

    
    if(cep.length === 8){ //esse if foi criado para fazer a requisição da API somente quando tiver os 8 dígitos do CEP.
            fetch(novoCep)
            .then( (res) => res.json() )
            .then( (json) => { 
                if(json.logradouro !== undefined){ 
                    document.getElementById("cep").style.backgroundColor = "#00ff00";
                    elementos[1].value = json.logradouro,
                    elementos[2].value = json.bairro,
                    elementos[3].value = json.localidade,
                    elementos[4].value = json.uf
                } else {
                    document.getElementById("cep").style.backgroundColor = "#ff0000";
                    for(var i = 1; i < elementos.length; i++ ){
                        elementos[i].value = 'CEP não encontrado!';
                    } 
                } 
             });
            
    }//fecha o if
     
} //fecha a função getAddress();

function somenteNumero(e){ //o parametro e é a letra digitada no teclado.
    var char = String.fromCharCode(e.which); //o which propriedade retorna qual tecla do teclado ou botão do mouse foi pressionado para o evento.
    if(!(/[0-9]/.test(char))){
        e.preventDefault(); // preventDefault() Cancela o evento se for cancelável, sem parar a propagação do mesmo.
    }
}

/* a função abaixo pode ser usada para limitar o campo quando o input type="number"
function limitaCampoCep(campo){
    var maxQtdNumber = 8;
    if(campo.value.length > maxQtdNumber){
        campo.value = campo.value.substr(0,maxQtdNumber);
    }
}*/