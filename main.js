
//pego o id do formulario html
const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando " />';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji decepcionado" />';

//para calcular a Média de todas atividades será necessário criar 2 arrays[] para armazenar todas atividades e todas as notas que o usuario digitou
const atividades = [];
const notas = [];

//modificando o spam do resultado para aparecer com as cores estilizadas 
const spamAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spamReprovado = '<span class="resultado reprovado">Reprovado</span>';

//criando uma variavel de nota minima  que sera um prompt para o usuario
const notaMinima = parseFloat(prompt('Digite a nota minima: '));





//para reconhecer 
let linhas = '';

//criar um evento para o botao submit
form.addEventListener('submit', function(e) {

    //tira o comportamento padrao do botao 
    e.preventDefault();
    
    //faz a chamada da função adicionaLinha() responsalvel por adicionar a linha ao clicar no botão
    adicionaLinha();

    //chama a funcao para atualizar conteudo da tabela 
    atualizaTabela();

    //chama funcao atualiza media final 
    atualizaMediaFinal();





});

//separando tudo deixando mais organizado com funcao
function adicionaLinha(){
    //criar 2 variaveis pegando o id dos campos input do html
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if(atividades.includes(inputNomeAtividade.value)){
        alert(`a atividade: ${inputNomeAtividade.value} ja foi inserida.`);
    } else {
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));
    
    
        //adicionando uma linha na tabela e uma nota para cada coluna 
        let linha = '<tr>';
        //adicionando o nome na tabela
        linha += `<td>${inputNomeAtividade.value}</td>>`;
        //adicionando a nota 
        linha += `<td>${inputNotaAtividade.value}</td>`;
         //ultilizando o operador ternario com uma condicional se for maior ou igual a 7 ? Aprovado se nao : Reprovado 
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado  }</td>`;
        //fecha a linha de baixo da tabela 
        linha += `</tr>`
    
        linhas += linha;
    }



    //cria um alerta para mostrar o Nome e a Nota do Aluno 
    //alert(`Atividade: ${inputNomeAtividade.value} - Nota: ${inputNotaAtividade.value}`);

    //limpando o campo depois de preeenchido
    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
} 


//funcao para atuaçizar conteudo da tabela
function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal(){
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= 7 ? spamAprovado : spamReprovado;


    console.log(media);
}

function calculaMediaFinal(){
    let somadasNotas = 0;

    for (let i = 0; i < notas.length; i++){
        somadasNotas += notas[i];

    }
    return somadasNotas / notas.length;
}