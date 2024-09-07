

function pesquisar() {    
    let resultado = ""; // String que armazenará o HTML dos resultados

    let section = document.getElementById("resultados-pesquisa"); // Obtém a seção onde os resultados serão exibidos

    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase()//Obtém o campo onde será 

    let titulo = "";
    let descricao = "";
    let subtitulo = "";
    let subdesc = "";

    if(campoPesquisa != ""){
        for (let dado of dados) { // Itera sobre cada dado da pesquisa
            
            titulo = dado.titulo.toLowerCase();
            descricao = dado.descricao.toLowerCase();
            subtitulo = dado.subtitulo.toLowerCase();
            subdesc = dado.subdesc.toLowerCase();

            if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || subtitulo.includes(campoPesquisa) || subdesc.includes(campoPesquisa)) {
                resultado += `
                <div class="item-resultado">
                    <h2>${dado.titulo}</h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <hr>
                    <h3>${dado.subtitulo}</h3>
                    <p class="descricao-meta">${dado.subdesc}</p>
                    <a href="${dado.link}" target="_blank">Veja a receita completa</a>
                </div>
            `  
            }
            
        }
    } else {
        resultado = `
            <div class="item-resultado">
                <p style="text-align:center">O campo está vazio!</p>
            </div>
        `
    }

    if (!resultado) {
        resultado = `
            <div class="item-resultado">
                <p style="text-align:center">Nada foi encontrado!</p>
            </div>
        `
    }
    
    section.innerHTML = resultado; // Insere o HTML gerado na seção
}

function receitaAleatoria() {
    
    let numAleatorio = geraNumero(0,dados.length-1);
    let sectionAleatorio = document.getElementById("resultados-pesquisa"); // Obtém a seção onde os resultados serão exibidos

    sectionAleatorio.innerHTML = `
        <div class="item-resultado">
            <h2>${dados[numAleatorio].titulo}</h2>
            <p class="descricao-meta">${dados[numAleatorio].descricao}</p>
            <hr>
            <h3>${dados[numAleatorio].subtitulo}</h3>
            <p class="descricao-meta">${dados[numAleatorio].subdesc}</p>
            <a href="${dados[numAleatorio].link}" target="_blank">Veja a receita completa</a>
        </div>
    ` 
}

function geraNumero(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



