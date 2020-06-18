let imagens = [
	"<img src='./src/img/ilustracao/ilustracao3.jpg' width='400px' alt='Ilutração de projetos'/>",
	"<img src='./src/img/projetos/projeto1.png' alt='Projeto 1'/>",
	"<img src='./src/img/projetos/projeto2.png' alt='Projeto 2'/>",
	"<img src='./src/img/projetos/projeto3.png' width='300px' alt='Projeto 3'/>",
	"<img href='https://github.com/Gustavo-Nuness/JogoDaForca' src='./src/img/projetos/projeto4.png' width='500px' alt='Projeto 4'/>",
];

let titulo = ["Projetos", "Needy Mobile", "Needy Web", "Jogo da forca", "Concessionária Ayrton Senna"];

let descricao = [
	"A Horizon se importa com a qualidade dos seus produtos; e é imprescindível que estes não só atinjam as expectativas, como contribuam para o crescimento da corporação. E é pensando nisso que nós te convidamos a conhecer e avaliar alguns de nossos projetos:",
	"O aplicativo needy para dispositivos móveis promete facilitar o contato entre hemocentros e doadores, além de buscar auxiliar para a estabilidade dos estoques de sangue chamando pessoas para doar.",
	"O sistema web tem foco na administração e monitoramento do aplicativo Needy para smartphone. Desenvolvido com as melhores tecnologias de ponta pensando no desempenho e qualidade para a facilidade do Hemocentro e seus funcionários em exercer seus serviços.",
	"Um jogo da forca desenvolvido com o framework ionic, para a disciplina de programação para aplicativos mobile (PAM) do curso de desenvolvimento de sistemas da ETEC de Guaianazes.",
	"Concessionária Ayrton Senna: Um software web de uma concessionária, desenvolvida com php, para a disciplina de programação web II (PW II) do curso de desenvolvimento de sistemas da ETEC de Guaianazes.",
];

let seta = [
	"<a onclick='mudar(1)'><i class='fas fa-arrow-right'></i></a>",
	"<a onclick='mudar(2)'><i class='fas fa-arrow-right'></i></a>",
	"<a onclick='mudar(3)'><i class='fas fa-arrow-right'></i></a>",
	"<a onclick='mudar(4)'><i class='fas fa-arrow-right'></i></a>",
	"",
];

mudar = (num) => {
	document.getElementById("imagemProjeto").innerHTML = imagens[num];
	document.getElementById("tituloProjeto").innerHTML = titulo[num];
	document.getElementById("descricaoProjeto").innerHTML = descricao[num];
	document.getElementById("setaProduto").innerHTML = seta[num];
};

mudar(0);
