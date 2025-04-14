const pratos = [
    { 
        nome: 'Feijoada', 
        imagem: 'https://www.receitadevovo.com.br/_next/image?url=https:%2F%2Fd2qcpt1idvpipw.cloudfront.net%2Frecipes%2F2020%2F10%2Ffeijoada.jpg&w=640&q=75', 
        descricao: 'Prato típico brasileiro feito com feijão preto e carnes.', 
        ingredientes: [
            'Feijão preto',
            'Carne seca',
            'Linguiça',
            'Orelha de porco',
            'Alho',
            'Cebola'
        ],
        preparo: 'Deixe o feijão de molho, cozinhe as carnes separadamente, depois misture tudo com temperos e cozinhe por algumas horas.'
    },
    { 
        nome: 'Acarajé', 
        imagem: 'https://thumbs.dreamstime.com/z/acaraje-dumpling-made-black-eyed-pea-dough-shrimp-onion-salt-fried-palm-oil-typical-brazilian-cuisine-baiana-267026043.jpg', 
        descricao: 'Delícia da Bahia feito com feijão-fradinho e camarão.', 
        ingredientes: [
            'Feijão-fradinho',
            'Cebola',
            'Sal',
            'Camarão seco',
            'Azeite de dendê'
        ],
        preparo: 'Bata o feijão com cebola e sal, modele bolinhos e frite no dendê. Recheie com camarão seco e vatapá.'
    },
    { 
        nome: 'Pamonha', 
        imagem: 'https://www.receiteria.com.br/wp-content/uploads/pamonha-730x548.jpg', 
        descricao: 'Prato típico do interior feito com milho verde.', 
        ingredientes: [
            'Milho verde',
            'Leite',
            'Açúcar',
            'Sal',
            'Palha de milho'
        ],
        preparo: 'Rale o milho, misture com leite e temperos. Enrole nas palhas e cozinhe em água fervente.'
    },
    { 
        nome: 'Bolo de Milho Verde Caipira', 
        imagem: 'https://bing.com/th?id=OSK.5b200073e7bf84ae6b46e6cd1cddd7f5', 
        descricao: 'Bolo de milho verde caipira sem farinha de trigo e sem fermento, apenas o puro creme do milho verde!', 
        ingredientes: [
            '4 e 1/2 xicaras de milho (cha)',
            '1 Xicara de acucar  (cha)',
        
            '3 Colheres de manteiga  (sopa)',
            '1 Pitada de sal',
        ],
        preparo:  'No liquidificador, adicione metade do milho verde, o açúcar, a manteiga e o sal e bata por cerca de 2 minutos ou até que fique bem cremoso. Adicione a outra metade do milho e bata mais um pouco. DICA: eu gosto de deixar essa massa um pouco mais grossinha..'
            
    },
    { 
        nome: 'Moqueca de camarão', 
        imagem: 'https://bing.com/th?id=OSK.482535ba2d6775fa6e5297ff7d2857ae', 
        descricao: 'O camarão deve estar fresco ou previamente descongelado.', 
        ingredientes: [
            '1 kilogram De camarao limpo',
            '6 Tomates maduros',
            '2 Cebolas',
            '6 Dentes de alho',
            '1 Limao',
            '1 Maco de cheiro-verde',
            '1 Pimentao vermelho',
            '1 Pimentao amarelo',
            '4 Colheres de sopa de azeite de oliva  (sopa)',
            '2 Colheres de azeite de dende  (sopa)',
            '½ Vidro de leite de coco',
            '1 e 1/2 colher rasa de sal  (sopa)',
        ],
        preparo: 'O camarão deve estar fresco ou previamente descongelado.Mergulhe-o rapidamente em água fervente até que atinja uma coloração rosada ou até que fique durinho, não mais que 2 minutos, e escorra.Em uma tigela, tempere os camarões com 3 dentes de alho tr...'
    }

    
];

const pratosDiv = document.getElementById('pratos');
const detalhesDiv = document.getElementById('detalhes');

// Cria os cards dos pratos
pratos.forEach(prato => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img src="${prato.imagem}" alt="${prato.nome}">
        <h3>${prato.nome}</h3>
    `;
    card.onclick = () => mostrarDetalhes(prato);
    pratosDiv.appendChild(card);
});

// Mostra os detalhes do prato ao clicar
function mostrarDetalhes(prato) {
    detalhesDiv.innerHTML = `
        <h2>${prato.nome}</h2>
        <img src="${prato.imagem}" width="300" alt="${prato.nome}">
        <p><strong>Descrição:</strong> ${prato.descricao}</p>
        <p><strong>Ingredientes:</strong> ${prato.ingredientes.join(', ')}</p>
        <p><strong>Modo de preparo:</strong> ${prato.preparo}</p>
    `;
}