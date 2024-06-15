const newsData = [
    {
        img: "../imagens/forte.destaque.png",
        title: "Fortes é destaque no OiWeek",
        content: "Nos dias 15 e 16 de maio, os colaboradores Marcilene Guasti e Bruno Lacerda apresentaram respectivamente, os cases “Saúde mental sustentável: ações perenes e integradas”, e […]",
        link: "https://fortes.ind.br/fortes-e-destaque-no-oiweek/"
    },
    {
        img: "../imagens/Colacao-de-grau.png",
        title: "Colação de Grau da nossa primeira turma de Aprendizagem Industrial do curso (Técnico em Edificações)",
        content: "Dia 08 de março, a Fortes Engenharia teve o prazer de participar da Colação de Grau da nossa primeira turma de Aprendizagem Industrial do curso (Técnico [...]",
        link: "https://fortes.ind.br/colaboradores-recebem-certificacao-de-socorristas-emocionais/"
    },
    {
        img: "../imagens/Doacoes.jpg",
        title: "Fortes através do Programa Fortificar realiza doações as regiões do Sul atingidos pelas chuvas",
        content: "A Fortes Engenharia através do Programa Fortificar realizou a doação de materiais de limpeza, higiene pessoal, água Mineral, leite em pó e fraldas descartáveis aos municípios […]",
        link: "https://fortes.ind.br/fortes-atraves-do-programa-fortificar-realiza-doacoes-as-regioes-do-sul-atingidos-pelas-chuvas/"
    },
    {
        img: "../imagens/fortes.inova.png",
        title: "Fortes é destaque no ecossistema de Inovação capixaba",
        content: "É um grande reconhecimento ser destaque entre as quase 40 empresas do ecossistema capixaba, resultado do comprometimento de cada colaborador com a inovação aberta, um dos […]",
        link: "https://fortes.ind.br/fortes-e-destaque-no-ecossistema-de-inovacao-capixaba/"
    }
];


function generateNewsArticles() {
    const newsSection = document.getElementById('news-section');
    newsData.forEach(article => {
        const articleElement = document.createElement('article');
        articleElement.innerHTML = `
            <img src="${article.img}" alt="${article.title}">
            <h2>${article.title}</h2>
            <p>${article.content}</p>
            <a href="${article.link}">Leia mais</a>
        `;
        newsSection.appendChild(articleElement);
    });
}

function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');
    sidebar.classList.toggle('show');
    mainContent.classList.toggle('shifted');
}

document.addEventListener('DOMContentLoaded', generateNewsArticles);