'use strict'; //Modo "Restrito"
// https://viacep.com.br/

//Função para limapr formulário
// Arrow Function
const limparFormulario = (endereco) => {
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}

//Verifica se o CEP é válido...
const eNumero = (numero) => /^[0-9]+$/.test(numero); 
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

//Respónsalvel pelo preenchimento do formulário
const preencherForumulario = (endereco) => {
    document.getElementById('rua').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}

// Função para consumo de API da Via CEP 
    //Consumindo API... 2- passo
const pesquisarCep = async() => {
    limparFormulario();
    const url = `https://viacep.com.br/ws/${cep.value}/json/`;
        
    ;    if(cepValido(cep.value)){
            const dados = await fetch(url); // esperar
            const addres = await dados.json(); // retorna dados no formato JSON
            
            if(addres.hasOwnProperty('erro')){ 
                alert('CEP não encontrado!');
            }else {
                preencherForumulario(addres);
            }
        }else{
            alert('CEP incorreto!');
        } 
    }
//Adiciona um evento DOM no input do CEP 
document.getElementById('cep').addEventListener('focusout', pesquisarCep);;