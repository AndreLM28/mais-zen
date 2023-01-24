

let biofiliaTitleText = document.querySelector(".biofilia-title-text");
let biofiliaTextDescription = document.querySelector(".biofilia-text-description");

biofiliaTitleText.innerText = "Neuroarquitetura e a Biofilia atuando no seu ambiente:"
biofiliaTextDescription.innerText = `A Neuroarquitetura é uma área de estudo que se concentra em como a arquitetura e o 
design afetam o comportamento humano e o bem-estar. A Biofilia é a tendência humana 
de se relacionar com a natureza e os seres vivos, e sugere que essa atração é benéfica 
para a saúde e o bem-estar. A combinação dessas duas áreas tem como objetivo criar 
ambientes que melhorem o bem-estar e a saúde mental das pessoas, através da conexão 
humana com a natureza. Exemplos de como isso pode ser feito incluem incluir janelas 
grandes com vistas para a natureza, incorporar plantas e jardins, usar texturas, cores 
e materiais naturais, usar a luz natural e a iluminação controlada e criar espaços 
externos acessíveis e convidativos.`

let biofiliaSubtitleTrabalho = document.querySelector(".biofilia-box-subtitle-trabalho");
biofiliaSubtitleTrabalho.innerHTML = `
<div class="biofilia-box-subtitle-trabalho">   
    <div class="biofilia-box-subtitle-trabalho-img">
        <figure>
        <img src="assets/trabalho.png" class="trabalho-img" alt="imagem biofilia no trabalho" id="img1">
        </figure>  
    </div>   
    <h3 class="biofilia-subtitle-trabalho">No trabalho</h3>
    <p class="biofilia-text" id="trabalho">Podem ser aplicadas na sua empresa ajudando a criar ambientes saudáveis e melhorar a qualidade de vida para melhorar o bem-estar e saúde. usar plantas, cores claras e materiais naturais, e proporcionar acesso à luz natural aumentando o bem-estar e como isso aumentar a produtividade dos funcionários de uma forma zen. A Mais Zen oferece soluções de projeto baseadas nesses conceitos para empresas, visando melhorar o ambiente de trabalho e a qualidade de vida dos funcionários.</p>
</div>
`
let biofiliaSubtitleCasa = document.querySelector(".biofilia-box-subtitle-casa");
biofiliaSubtitleCasa.innerHTML = `
<div class="biofilia-box-subtitle-casa"> 
                <div class="biofilia-box-subtitle-casa-img">
                    <figure>
                        <img src="assets/casa.png" class="casa-img" alt="imagem biofilia na sua casa">
                     </figure>  
                </div>     
                <h3 class="biofilia-subtitle-casa">Na sua casa</h3>
                <p class="biofilia-text">
                    Podem ser aplicadas na sua residência para melhorar seu bem-estar e saúde. Você pode incluir janelas grandes para trazer luz natural, incorporar plantas e jardins para melhorar a qualidade do ar, e criar espaços externos zen para se conectar com a natureza. A Mais Zen oferece soluções de projeto baseadas nesses conceitos para ajudar os clientes residenciais a criar um ambiente saudável e acolhedor.
                </p>
            </div>  
`
let biofiliaSubtitleVida = document.querySelector(".biofilia-box-subtitle-vida");
biofiliaSubtitleVida.innerHTML = `

<div class="biofilia-box-subtitle-vida">
<div class="biofilia-box-subtitle-vida-img">
    <figure>
        <img src="assets/vida.png" class="vida-img" alt="imagem biofilia na sua vida">
     </figure>  
</div> 
<h3 class="biofilia-subtitle-vida">Na sua vida pessoal</h3>
<p class="biofilia-text">
    A aplicação de conceitos de neuroarquitetura e biofilia pode trazer benefícios para sua vida pessoal, como melhora do sono, redução do estresse, aumento da concentração, melhoria da qualidade do ar e aumento da sensação de bem-estar e tranquilidade. A Mais Zen oferece soluções de projeto baseadas nesses conceitos para ajudar os clientes a criar um ambiente que promove o bem-estar e a saúde, incluindo elementos da natureza.
</p>
</div>
`

//limpar botão
function clearBtn(){
    quemSomosBtn.style.color = "";
    quemSomosBtn.style.backgroundColor = "";
    missaoBtn.style.color = "";
    missaoBtn.style.backgroundColor = ""; 
    visaoBtn.style.color = "";
    visaoBtn.style.backgroundColor = "";
    valoresBtn.style.color = "";
    valoresBtn.style.backgroundColor = "";
    divQuemSomos.style.display = "none"
    divMissao.style.display = "none"
    divVisao.style.display = "none"
    divValores.style.display = "none"
}




//div Quem Somos 
const quemSomosBtn = document.querySelector(".quem_somos-btn")
const divQuemSomos = document.querySelector(".quem_somos-box")

quemSomosBtn.addEventListener('click', changeQuemSomos)

function quemSomos(){
    divQuemSomos.style.display = "block"
    quemSomosBtn.style.color = "whitesmoke";
    quemSomosBtn.style.backgroundColor = "#bca0dd";
    }    
quemSomos();

function changeQuemSomos(){
    clearBtn();
    divQuemSomos.style.display = "block"
    quemSomosBtn.style.color = "whitesmoke";
    quemSomosBtn.style.backgroundColor = "#bca0dd";

}


//div Missao
const missaoBtn = document.querySelector(".missao-btn")
const divMissao = document.querySelector(".missao-box")

missaoBtn.addEventListener('click', changeMissaos)

function changeMissaos(){
   clearBtn();
    divMissao.style.display = "block"
    missaoBtn.style.color = "whitesmoke";
    missaoBtn.style.backgroundColor = "#bca0dd";
}

//div Visão 
const visaoBtn = document.querySelector(".visao-btn")
const divVisao = document.querySelector(".visao-box")

visaoBtn.addEventListener('click', changeVisao)

function changeVisao(){
    clearBtn();
    divVisao.style.display = "block"
    visaoBtn.style.color = "whitesmoke";
    visaoBtn.style.backgroundColor = "#bca0dd";
}

//div Valores
const valoresBtn = document.querySelector(".valores-btn")
const divValores = document.querySelector(".valores-box")

valoresBtn.addEventListener('click', changeValores)

function changeValores(){
    clearBtn();
    divValores.style.display = "block"
    valoresBtn.style.color = "whitesmoke";
    valoresBtn.style.backgroundColor = "#bca0dd";
}

