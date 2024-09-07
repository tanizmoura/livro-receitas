//Lista vazia para armazenamento dos dados
let dados = [];

// Função para adicionar uma nova receita
function adicionarReceita(titulo, descricao, subtitulo, subdesc, link) {
    dados.push({titulo, descricao, subtitulo, subdesc, link})
}

// Adicionando várias receitas
adicionarReceita("Feijoada", "A feijoada é um dos pratos mais emblemáticos da culinária brasileira, apreciada por sua riqueza de sabores e tradição. ", "O que é a feijoada?", "Essencialmente, a feijoada é um ensopado de feijão preto cozido com diversas carnes salgadas e defumadas, como carne seca, costelinha de porco, paio, linguiça calabresa e bacon.", "https://www.tudogostoso.com.br/receita/2998-feijoada.html")

adicionarReceita("Vatapá", "Prato baiano feito com pão amanhecido, camarão seco, castanha de caju e leite de coco.", "Um clássico da Bahia", "Acompanha acarajé e arroz branco.", "https://www.tudogostoso.com.br/receita/vatapá");

adicionarReceita("Moqueca de Peixe", "Ensopado cremoso de peixe com leite de coco e azeite de dendê.", "Um clássico da culinária baiana", "Acompanha arroz branco e farofa.", "https://www.tudogostoso.com.br/receita/moqueca-de-peixe");

adicionarReceita("Sarapatel", "Prato nordestino feito com miúdos de porco, vinagre, especiarias e acompanhado de mandioca cozida.", "Um prato saboroso e tradicional", "Acompanha arroz branco.", "https://www.tudogostoso.com.br/receita/sarapatel");

adicionarReceita("Virado à Paulista", "Prato completo com arroz, feijão, couve refogada, carne seca desfiada e banana frita.", "Um dos pratos mais populares de São Paulo.", "Um prato típico paulista.", "https://www.tudogostoso.com.br/receita/virado-a-paulista");

adicionarReceita("Barreado", "Prato paranaense cozido em panela de barro, com carne bovina, especiarias e acompanhado de mandioca.", "Um prato tradicional paranaense", "Cozido lentamente em panela de barro.", "https://www.tudogostoso.com.br/receita/barreado");

adicionarReceita("Feijoada Fluminense", "Uma versão mais leve da feijoada tradicional, com menos carnes e mais legumes.", "Uma opção mais leve e saudável", "Ideal para quem busca uma feijoada menos pesada.", "https://www.tudogostoso.com.br/receita/feijoada-fluminense");

adicionarReceita("Piranha Frita", "Prato típico da região amazônica, com piranha temperada e frita.", "Um prato exótico e saboroso", "Acompanha farofa e vinagrete.", "https://www.tudogostoso.com.br/receita/piranha-frita");

adicionarReceita("Tutu de Feijão", "Um purê de feijão cozido com toucinho, temperos e acompanhado de arroz branco.", "Um prato simples e saboroso", "Típico da culinária goiana.", "https://www.tudogostoso.com.br/receita/tutu-de-feijao");

adicionarReceita("Caldo de Sururu", "Caldo feito com sururu (molusco) e acompanhado de pirão.", "Um prato típico da Bahia", "Rico em sabor e nutrientes.", "https://www.tudogostoso.com.br/receita/caldo-de-sururu");

adicionarReceita("Churrasco", "Carne assada na brasa, acompanhada de diversas guarnições.", "Um clássico da culinária gaúcha", "Ideal para reuniões e festas.", "https://www.tudogostoso.com.br/receita/churrasco");

adicionarReceita("Galinha Caipira", "Prato caseiro e saboroso, feito com galinha caipira cozida com legumes e temperos.", "Um prato simples e nutritivo", "Perfeito para um almoço em família.", "https://www.tudogostoso.com.br/receita/galinha-caipira");

adicionarReceita("Salpicão", "Salada fria com frango desfiado, maionese, legumes e frutas.", "Uma opção leve e refrescante", "Perfeito para o verão.", "https://www.tudogostoso.com.br/receita/salpicão");

adicionarReceita("Brigadeiro", "Doce feito com leite condensado, chocolate em pó e manteiga.", "Um clássico das festas infantis", "Pode ser decorado com granulado ou raspas de chocolate.", "https://www.tudogostoso.com.br/receita/brigadeiro");

adicionarReceita("Pudim de Leite", "Sobremesa cremosa e fácil de preparar.", "Uma sobremesa clássica brasileira.", "Ideal para qualquer ocasião.", "https://www.tudogostoso.com.br/receita/pudim-de-leite");

adicionarReceita("Quindim", "Doce feito com gema de ovo, coco ralado e açúcar.", "Um doce típico brasileiro.", "Com sabor intenso de coco.", "https://www.tudogostoso.com.br/receita/quindim");

adicionarReceita("Bobó de Camarão", "Prato baiano cremoso feito com camarão, leite de coco, azeite de dendê e dendê.", "Um clássico da culinária baiana", "Acompanha arroz branco.", "https://www.tudogostoso.com.br/receita/bobo-de-camarao");

adicionarReceita("Baião de Dois", "Prato típico do Nordeste feito com arroz, feijão, charque e outros ingredientes.", "Um prato completo e saboroso", "Ideal para o dia a dia.", "https://www.tudogostoso.com.br/receita/baiao-de-dois");

adicionarReceita("Risoto de Camarão", "Prato sofisticado e saboroso, feito com arroz arbóreo, camarões e um caldo aromático.", "Um clássico da culinária italiana adaptado ao paladar brasileiro", "Acompanha vinho branco.", "https://www.tudogostoso.com.br/receita/risoto-de-camarao");

adicionarReceita("Strogonoff", "Prato cremoso feito com carne bovina cortada em tiras, creme de leite e acompanhamentos variados.", "Um clássico da culinária brasileira", "Ideal para um jantar especial.", "https://www.tudogostoso.com.br/receita/strogonoff");

adicionarReceita("Arroz Carreteiro", "Arroz soltinho refogado com carne seca desfiada, ovo e outros ingredientes.", "Um prato simples e saboroso", "Típico da culinária goiana.", "https://www.tudogostoso.com.br/receita/arroz-carreteiro");

adicionarReceita("Sopa Paraguaia", "Bolo salgado típico do Paraguai, feito com queijo, milho e outros ingredientes.", "Um prato versátil e saboroso", "Pode ser servido como acompanhamento ou prato principal.", "https://www.tudogostoso.com.br/receita/sopa-paraguaia");

adicionarReceita("Barreado Vegano", "Versão vegana do tradicional barreado, feito com proteína vegetal e legumes.", "Uma opção deliciosa para quem não consome carne.", "Preserva o sabor tradicional do prato.", "https://www.tudogostoso.com.br/receita/barreado-vegano");

adicionarReceita("Marreco Assado", "Prato típico gaúcho, com marreco assado na brasa e acompanhamentos variados.", "Um prato especial para ocasiões especiais.", "Requer um tempo maior de preparo.", "https://www.tudogostoso.com.br/receita/marreco-assado");

adicionarReceita("Pavê", "Sobremesa em camadas com biscoito, creme e chocolate.", "Um clássico das festas.", "Fácil de preparar e muito saboroso.", "https://www.tudogostoso.com.br/receita/pave");

adicionarReceita("Mousse de Maracujá", "Sobremesa leve e refrescante, perfeita para o verão.", "Ideal para quem gosta de sabores cítricos.", "Acompanha calda de maracujá.", "https://www.tudogostoso.com.br/receita/mousse-de-maracuja");

adicionarReceita("Bolo de Cenoura com Chocolate", "Clássico bolo úmido com cobertura de chocolate.", "Perfeito para o lanche da tarde", "Ideal para festas de aniversário.", "https://www.tudogostoso.com.br/receita/bolo-de-cenoura");

adicionarReceita("Torta de Limão", "Sobremesa leve e refrescante com massa amanteigada e recheio cremoso.", "Perfeita para o verão", "Acompanha merengue.", "https://www.tudogostoso.com.br/receita/torta-de-limao");

adicionarReceita("Curry Tailandês", "Prato picante com leite de coco, especiarias e legumes.", "Sabores exóticos da Tailândia", "Acompanha arroz branco.", "https://www.tudogostoso.com.br/receita/curry-tailandes");

adicionarReceita("Paella Espanhola", "Prato tradicional espanhol com arroz, frutos do mar e temperos.", "Um banquete de sabores", "Ideal para grandes refeições.", "https://www.tudogostoso.com/receita/paella");

adicionarReceita("Lasanha de Berinjela", "Versão vegetariana da lasanha, com berinjela em camadas.", "Saborosa e nutritiva", "Ideal para quem busca opções vegetarianas.", "https://www.tudogostoso.com.br/receita/lasanha-de-berinjela");

adicionarReceita("Falafel", "Bolinhos fritos à base de grão-de-bico, típicos da culinária árabe.", "Acompanha homus e pita.", "Perfeito para um lanche rápido e saudável.", "https://www.tudogostoso.com/receita/falafel");




