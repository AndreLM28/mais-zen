
// SECTION BIOFILIA TITULO
    //DIV BIOFILIA TITULO
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

    // SECTION BIOFILIA SUBTITULO
        //DIV BIOFILIA SUBTITULO TRABALHO
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
        //DIV BIOFILIA SUBTITULO CASA
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
        //DIV BIOFILIA SUBTITULO VIDA
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

//SECTION MISSAO VALORES
    // Array
    const arrayQuemSoms = [
        {
        titulo: "Quem Somos",
        texto: "Mais Zen é uma empresa de consultoria e projeto com sede em São Paulo, fundada em 2022. A empresa oferece soluções de projeto baseadas em neuroarquitetura e biofilia para ajudar as empresas e indivíduos a criar ambientes saudáveis e sustentáveis. A equipe da Mais Zen é especializada em neuroarquitetura e biofilia, e inclui especialistas em design, engenharia e jardinagem. A empresa trabalha com clientes de todos os setores, desde edifícios residenciais e comerciais até espaços públicos e institucionais. Eles oferecem serviços de consultoria para ajudar os clientes a planejar e projetar espaços de trabalho e residenciais, incluindo a incorporação de elementos da natureza, como plantas, jardins e hortas, vistas para a natureza, iluminação natural e outros elementos que possam melhorar o bem-estar e a saúde dos ocupantes. Além disso, eles oferecem serviços de manutenção e cuidado para garantir que os elementos naturais continuem a contribuir para a saúde e bem-estar dos ocupantes.",
        },

        {
        titulo: "Missão",
        texto: "Criar espaços que melhorem a saúde e o bem-estar das pessoas, enquanto também são eficientes em termos de recursos e amigáveis ao meio ambiente.",
        },

        {
        titulo: "Visão",
        texto: "Ser reconhecida como líder em soluções de neuroarquitetura e biofilia, ajudando as pessoas a criar ambientes saudáveis e sustentáveis, para melhorar a saúde e o bem-estar das pessoas e beneficiar o meio ambiente.",
        },

        {
        titulo: "Valores",
        textoLi1: "*Conexão com a natureza: acreditamos que a conexão com a natureza é essencial para o bem-estar humano e trabalhamos para incorporar elementos da natureza em todos os projetos.",
        textoLi2: "*Sustentabilidade: acreditamos que é importante criar espaços que sejam bons para as pessoas e para o planeta, e trabalhamos para incorporar práticas sustentáveis em todos os projetos.",
        textoLi3: "*Inovação: acreditamos que é importante estar sempre em busca de novas ideias e abordagens para criar espaços melhores.",
        textoLi4: "*Excelência: buscamos sempre oferecer o melhor serviço possível e projetos de alta qualidade."
        },
    ]


    //Criando o elemento DIV
    const novaDiv = document.createElement('div')


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
            novaDiv.style.display = "none"
       }




    //div Quem Somos 
    const quemSomosBtn = document.querySelector(".quem_somos-btn")
    quemSomosBtn.addEventListener('click', changeQuemSomos);

        function quemSomos(){
            novaDiv.className = 'quem_somos-box' 
            novaDiv.innerHTML = `
            <h2>${arrayQuemSoms[0].titulo}</h2>
            <p>${arrayQuemSoms[0].texto}</p>
            `

            novaDiv.style.display = "block";
            quemSomosBtn.style.color = "whitesmoke";
            quemSomosBtn.style.backgroundColor = "#bca0dd";
        }    
    quemSomos();

        function changeQuemSomos(){
            novaDiv.className = 'quem_somos-box' 
            novaDiv.innerHTML = `
            <h2>${arrayQuemSoms[0].titulo}</h2>
            <p>${arrayQuemSoms[0].texto}</p>
            `
            clearBtn();
            novaDiv.style.display = "block";
            quemSomosBtn.style.color = "whitesmoke";
            quemSomosBtn.style.backgroundColor = "#bca0dd";
        }

    //div Missao
    const missaoBtn = document.querySelector(".missao-btn")
    missaoBtn.addEventListener('click', changeMissaos);

        function changeMissaos(){
            novaDiv.className = 'quem_somos-box' 
            novaDiv.innerHTML = `
            <h2>${arrayQuemSoms[1].titulo}</h2>
            <p>${arrayQuemSoms[1].texto}</p>
            `
        clearBtn();
        novaDiv.style.display = "block"
            missaoBtn.style.color = "whitesmoke";
            missaoBtn.style.backgroundColor = "#bca0dd";
    }


    //div Visão 
    const visaoBtn = document.querySelector(".visao-btn")
    visaoBtn.addEventListener('click', changeVisao)

        function changeVisao(){
            
            novaDiv.className = 'quem_somos-box' 
            novaDiv.innerHTML = `
            <h2>${arrayQuemSoms[2].titulo}</h2>
            <p>${arrayQuemSoms[2].texto}</p>
            `
            clearBtn();
            novaDiv.style.display = "block"
            visaoBtn.style.color = "whitesmoke";
            visaoBtn.style.backgroundColor = "#bca0dd";
        }

    //div Valores
    const valoresBtn = document.querySelector(".valores-btn")
    valoresBtn.addEventListener('click', changeValores)

        function changeValores(){
            novaDiv.className = 'quem_somos-box' 
            novaDiv.innerHTML = `
            <h2>${arrayQuemSoms[3].titulo}</h2>
            <ul>
                <li><p>${arrayQuemSoms[3].textoLi1}</p></li>	
                <li><p>${arrayQuemSoms[3].textoLi2}</p></li>	
                <li><p>${arrayQuemSoms[3].textoLi3}</p></li> 	
                <li><p>${arrayQuemSoms[3].textoLi4}</p></li>
                </ul>    
            `
            clearBtn();
            novaDiv.style.display = "block"
            valoresBtn.style.color = "whitesmoke";
            valoresBtn.style.backgroundColor = "#bca0dd";
    }

//Enviando para o dom
const mainContentMissaoValores = document.querySelector('#main-content-missao_valores');
mainContentMissaoValores.appendChild(novaDiv);