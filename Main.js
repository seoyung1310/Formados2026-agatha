// ============================================
// DADOS DAS 15 REDAÇÕES
// ============================================
const redacoes = [
    {
        id: 1,
        genero: "Narrativa",
        titulo: "O Primeiro Dia de Aula",
        resumo: "Uma história sobre o nervosismo e a alegria do primeiro dia de aula.",
        data: "Março de 2023",
        texto: `Era uma manhã de março quando tudo começou. O sol brilhava lá fora, mas dentro de mim havia uma tempestade de emoções. O primeiro dia de aula sempre traz consigo aquele frio na barriga, aquela mistura de medo e expectativa que só quem já passou por isso conhece.

Lembro-me de estar parado em frente ao portão da escola, segurando a mão da minha mãe com uma força que parecia dizer: "não me deixe aqui". As crianças corriam de um lado para o outro, rindo, gritando, enquanto eu observava tudo com os olhos arregalados.

— Vai ficar tudo bem — disse minha mãe, com aquele sorriso que sempre me acalmava.

E não é que ela estava certa? Algumas horas depois, eu já estava sentado em uma rodinha, aprendendo uma música nova sobre os animais. A professora tinha um jeito doce de falar, e o lanche era o melhor que eu já tinha comido.

Aquele dia me ensinou algo que carrego até hoje: por trás de todo medo existe uma descoberta esperando para acontecer.`
    },
    {
        id: 2,
        genero: "Narrativa",
        titulo: "O Amigo que Mudou Tudo",
        resumo: "Como uma amizade transformou minha visão sobre a escola.",
        data: "Junho de 2023",
        texto: `Conheci o Lucas no 6º ano. Ele era o típico garoto quieto, que sentava no fundo da sala e não falava com ninguém. Eu também era meio assim, então acabamos nos entendendo sem precisar dizer uma palavra.

Um dia, durante o intervalo, ele me chamou para jogar bola. Eu nunca tinha sido bom em esportes, mas aceitei. E, pela primeira vez, me senti parte de algo.

O Lucas me ensinou que não precisamos ser iguais para sermos amigos. Ele me mostrou como ver a escola de outra forma: não como um lugar de obrigações, mas como um espaço de descobertas.

Nos anos seguintes, passamos por tudo juntos: provas difíceis, trabalhos em grupo, as piadas que só nós entendíamos. Hoje, no 3º ano, sei que aquela amizade foi essencial para minha trajetória.

Algumas pessoas passam pela nossa vida e deixam marcas. O Lucas deixou a marca de uma amizade verdadeira.`
    },
    {
        id: 3,
        genero: "Carta",
        titulo: "Carta ao Meu Eu do Futuro",
        resumo: "Uma carta aberta sobre sonhos e expectativas para depois da formatura.",
        data: "Agosto de 2023",
        texto: `Querido eu do futuro,

Espero que quando você leia esta carta, esteja exatamente onde sonhei. Ou que tenha encontrado um caminho ainda melhor.

Hoje estou no primeiro ano do Ensino Médio. Ainda tenho tantas perguntas. Será que vou conseguir passar no vestibular? Será que vou fazer amigos na faculdade? Será que vou me lembrar de todas as coisas que aprendi aqui?

Escrevo para te lembrar de algumas coisas importantes:

1. Nunca perca a curiosidade. Foi ela que te trouxe até aqui.
2. Valorize os amigos. Eles são o porto seguro nas tempestades.
3. Não tenha medo de errar. Cada erro é uma lição.
4. Lembre-se das noites de estudo, dos trabalhos em grupo, dos professores que acreditaram em você.
5. E, acima de tudo, lembre-se de que a escola foi o começo, não o fim.

Com carinho,
Seu eu de 2023`
    },
    {
        id: 4,
        genero: "Dissertativo-Argumentativo",
        titulo: "A Importância da Leitura na Formação do Indivíduo",
        resumo: "Reflexão sobre como a leitura transforma vidas e mentes.",
        data: "Setembro de 2023",
        texto: `A leitura é, sem dúvida, uma das práticas mais transformadoras na vida de um indivíduo. Mais do que decifrar códigos, ler é mergulhar em mundos, entender perspectivas diferentes e desenvolver o pensamento crítico. Ao longo da história, grandes mudanças sociais tiveram na palavra escrita seu ponto de partida.

Em primeiro lugar, a leitura amplia a visão de mundo. Quem lê conhece realidades que não pode vivenciar diretamente. Um adolescente que lê sobre a vida em outro continente desenvolve empatia e compreensão. É por meio dos livros que aprendemos a nos colocar no lugar do outro, habilidade essencial para a convivência em sociedade.

Além disso, a leitura potencializa a capacidade de argumentação. Em um mundo cada vez mais exigente, saber expressar opiniões com clareza e fundamento é uma vantagem significativa. A leitura frequente amplia o vocabulário, aprimora a escrita e aguça o raciocínio lógico.

Portanto, investir em leitura — seja em casa, na escola ou em políticas públicas — é investir no futuro. Uma sociedade que lê é uma sociedade que pensa, questiona e evolui.`
    },
    {
        id: 5,
        genero: "Narrativa",
        titulo: "A Festa Junina mais Inesquecível",
        resumo: "Uma história sobre tradição, amigos e momentos felizes na escola.",
        data: "Junho de 2023",
        texto: `Toda escola tem aquela festa junina que fica marcada na memória. A minha aconteceu no 9º ano, quando eu e meus amigos decidimos nos fantasiar de personagens caipiras como nunca antes.

O dia começou cedo. A escola estava toda enfeitada com bandeirinhas coloridas, e o cheiro de pipoca e canjica se espalhava pelo pátio. As barracas estavam montadas, e cada turma tinha sua apresentação.

Nossa quadrilha foi a última a se apresentar. Estávamos nervosos. Cada passo tinha sido ensaiado por semanas, e agora era o momento da verdade. Quando a música começou, todo o nervosismo desapareceu. Viramos uma só equipe, rindo, dançando, errando alguns passos e improvisando outros.

No final, recebemos os aplausos mais calorosos da noite. Mas o melhor prêmio não foi a vitória: foi o momento que passamos juntos. A festa junina me ensinou que os momentos mais felizes não são planejados — eles simplesmente acontecem.`
    },
    {
        id: 6,
        genero: "Dissertativo-Argumentativo",
        titulo: "Os Desafios da Educação no Brasil",
        resumo: "Uma análise sobre os obstáculos e as soluções para a educação brasileira.",
        data: "Outubro de 2023",
        texto: `A educação é um direito fundamental garantido pela Constituição Brasileira, mas, na prática, ainda enfrenta enormes desafios. A desigualdade no acesso, a infraestrutura precária e a desvalorização dos professores são problemas que comprometem o futuro de milhões de jovens.

Um dos principais desafios é a desigualdade educacional. Enquanto escolas particulares oferecem laboratórios, bibliotecas e atividades extracurriculares, muitas escolas públicas carecem de recursos básicos como água potável e merenda de qualidade. Essa disparidade perpetua um ciclo de exclusão social.

Outro ponto crítico é a valorização dos profissionais da educação. Professores mal remunerados, sem condições adequadas de trabalho, têm dificuldade em oferecer um ensino de excelência. Investir na formação e na carreira docente é essencial para transformar a realidade educacional.

Por fim, é preciso repensar o modelo de ensino. A escola do século XXI não pode ser a mesma do século XIX. É necessário incorporar tecnologia, metodologias ativas e uma abordagem que valorize as habilidades socioemocionais.

Só com investimento sério e políticas públicas eficazes será possível construir uma educação verdadeiramente inclusiva e transformadora.`
    },
    {
        id: 7,
        genero: "Narrativa",
        titulo: "O Dia em que Fui Professor",
        resumo: "Uma experiência inesperada que mudou minha forma de ver os professores.",
        data: "Agosto de 2023",
        texto: `Aconteceu no 2º ano do Ensino Médio, durante a Semana dos Estudantes. Os professores propuseram uma dinâmica: os alunos assumiriam o papel de professores por um dia.

Fui escolhido para dar uma aula de História para o 1º ano. Passei a noite anterior estudando como um louco, preparando slides, anotações e até piadas para deixar a aula mais interessante.

Quando cheguei à sala, o nervosismo tomou conta. Vinte pares de olhos me olhavam com expectativa. Comecei a falar, gaguejei algumas vezes, mas aos poucos fui me soltando.

— Vocês sabiam que a Revolução Francesa começou por causa do pão? — perguntei, e a sala se interessou.

Ao final da aula, os alunos aplaudiram. Mas o que ficou comigo foi a lição: dar aula não é apenas passar conteúdo, é inspirar, conectar e transformar. Aquele dia mudou minha forma de ver os professores. Eles são verdadeiros heróis.`
    },
    {
        id: 8,
        genero: "Poema",
        titulo: "Passos no Corredor",
        resumo: "Um poema sobre a jornada escolar e suas lembranças.",
        data: "Maio de 2023",
        texto: `Passos no corredor, risadas no ar,
Lápis na mão, histórias a criar.
Sinos que tocam, livros a abrir,
Sonhos que nascem, vontade de ir.

Do jardim de infância ao terceiro ano,
Foram tantos dias, foi tanto engano.
Choros, abraços, provas e notas,
Amigos que ficam, memórias remotas.

Professores que ensinam, que cuidam,
Que riem, que brigam, que acreditam.
Cada palavra, cada gesto, cada olhar,
Um pedaço de mim a se formar.

Agora o fim se aproxima, é verdade,
Mas levo comigo a saudade.
Não é o adeus que vai me parar,
É a certeza de que posso sonhar.

E quando o amanhã chegar,
Com novos caminhos a trilhar,
Lembrarei destes dias com gratidão,
Pois a escola mora no meu coração.`
    },
    {
        id: 9,
        genero: "Narrativa",
        titulo: "A Olimpíada de Matemática",
        resumo: "Como a matemática deixou de ser um monstro e se tornou uma paixão.",
        data: "Setembro de 2023",
        texto: `Eu sempre tive medo de matemática. Desde as tabuadas do fundamental, os números pareciam um bicho de sete cabeças. No 1º ano do Ensino Médio, minha professora de matemática me desafiou a participar da Olimpíada Brasileira de Matemática (OBM).

— Você pode não saber tudo, mas tem potencial — disse ela.

Comecei a estudar com raça. Fiz cursos online, resolvi exercícios todos os dias, pedi ajuda. Aos poucos, os números começaram a fazer sentido. Descobri que a matemática tem lógica, tem beleza, tem até poesia.

No dia da prova, o coração disparou. Mas quando li a primeira questão, sorri. Eu sabia resolver. Resolvi todas com calma e entreguei a prova com a sensação de dever cumprido.

Semanas depois, o resultado: medalha de prata! Nunca esquecerei a emoção daquele dia. Não pela medalha, mas pela descoberta de que eu era capaz. A matemática deixou de ser um monstro. Virou uma amiga.`
    },
    {
        id: 10,
        genero: "Dissertativo-Argumentativo",
        titulo: "O Papel das Redes Sociais na Sociedade Atual",
        resumo: "Uma análise sobre os impactos das redes sociais na vida dos jovens.",
        data: "Novembro de 2023",
        texto: `As redes sociais transformaram radicalmente a forma como nos comunicamos, nos informamos e nos relacionamos. Se, por um lado, oferecem conexão e acesso a informação, por outro, trazem desafios que precisam ser discutidos com seriedade.

Inicialmente, é inegável o benefício das redes sociais para a comunicação. Elas aproximam pessoas, permitem o compartilhamento de ideias e impulsionam causas importantes. Movimentos sociais ganharam força graças à mobilização digital.

Entretanto, o uso excessivo e não crítico pode ser prejudicial. O cyberbullying, a disseminação de notícias falsas e a comparação constante com vidas perfeitas que não existem têm afetado a saúde mental de milhões de jovens. O tempo perdido rolando o feed poderia ser investido em atividades enriquecedoras.

Além disso, a privacidade é uma questão preocupante. Dados pessoais são coletados e utilizados por empresas, muitas vezes sem o devido consentimento. A educação digital, portanto, torna-se urgente.

Conclui-se que as redes sociais são ferramentas poderosas que exigem uso consciente. A escola, a família e o Estado devem atuar juntos para formar cidadãos digitais responsáveis.`
    },
    {
        id: 11,
        genero: "Narrativa",
        titulo: "A Viagem de Formatura",
        resumo: "Uma história sobre o fim de um ciclo e o início de outro.",
        data: "Dezembro de 2024",
        texto: `A viagem de formatura do 3º ano foi o presente que todos esperávamos. Meses de economia, planejamento e ansiedade culminaram naqueles cinco dias que se tornariam inesquecíveis.

O destino era uma praia no litoral. Chegamos ao hotel na sexta-feira, e a energia era contagiante. Quarenta alunos, todos com a mesma vontade: aproveitar cada segundo.

Os dias passaram como um sopro. Dias de sol, jogos na areia, mergulhos no mar e noites de conversa até tarde. Foi naquela viagem que descobri o quanto nossos laços eram fortes.

Na última noite, fizemos uma fogueira na praia. Cada um falou algo sobre o que a escola significou. Houve risos, lágrimas e abraços. Percebemos que estávamos encerrando um capítulo e, ao mesmo tempo, começando outro.

A viagem de formatura não foi apenas uma viagem. Foi um ritual de passagem, um momento de celebrar a amizade e de agradecer por tudo o que vivemos.`
    },
    {
        id: 12,
        genero: "Carta",
        titulo: "Carta à Minha Escola",
        resumo: "Uma despedida em forma de carta, agradecendo por tudo.",
        data: "Dezembro de 2024",
        texto: `Querida escola,

Hoje é meu último dia aqui. Parece que foi ontem que entrei pela primeira vez, pequeno e assustado, segurando a mão da minha mãe. O tempo passou tão rápido que nem percebi.

Você me viu crescer. Viu meus primeiros passos, minhas primeiras notas, minhas primeiras decepções. Viu meus erros e meus acertos. Viu tudo.

Quero te agradecer pelos professores que me inspiraram, pelos amigos que me acompanharam, pelos funcionários que sempre tinham um sorriso para dar. Agradeço pelos corredores que me viram correr, pelas salas que me viram aprender, pelo pátio que me viu brincar.

Levo comigo não só o conhecimento, mas os valores. Aprendi sobre respeito, empatia, resiliência. Aprendi que aprender é um ato de coragem.

Agora sigo em frente, mas levo você comigo. No meu coração, na minha história, na minha formação.

Com gratidão,
Seu aluno.`
    },
    {
        id: 13,
        genero: "Narrativa",
        titulo: "O Trabalho em Grupo que deu Errado",
        resumo: "Uma história sobre superação e amadurecimento em meio ao caos.",
        data: "Abril de 2024",
        texto: `No 3º ano, um trabalho de biologia quase virou um drama. O grupo era de cinco pessoas, e as ideias eram completamente diferentes. Enquanto uns queriam fazer uma maquete, outros queriam um vídeo. As reuniões viravam discussões.

A uma semana da entrega, o grupo estava dividido, e ninguém tinha avançado. Foi quando percebi que precisávamos de liderança. Me ofereci para mediar a conversa.

— Vamos pensar no que é viável — sugeri — e cada um fica com uma parte.

Aos poucos, as coisas se ajeitaram. Cada um se comprometeu com uma tarefa, e eu fiquei responsável por integrar tudo. Trabalhei dia e noite, mas o esforço valeu a pena.

No dia da apresentação, o resultado foi incrível. A professora elogiou a organização e a criatividade. Mais do que a nota, o que ficou foi a lição: um grupo unido pode superar qualquer diferença.

Aquele trabalho me ensinou sobre liderança, empatia e resiliência. A vida real é feita de trabalhos em grupo, e é preciso aprender a conviver com as diferenças.`
    },
    {
        id: 14,
        genero: "Dissertativo-Argumentativo",
        titulo: "O Combate ao Bullying nas Escolas",
        resumo: "Reflexão sobre a violência escolar e a importância da empatia.",
        data: "Março de 2024",
        texto: `O bullying é uma realidade presente em muitas escolas brasileiras, e seus impactos vão muito além do ambiente escolar. Ele afeta a autoestima, o desempenho acadêmico e a saúde mental das vítimas, podendo deixar sequelas duradouras.

Para combater essa violência, é essencial entender suas causas. O bullying, muitas vezes, é fruto de problemas familiares, insegurança e falta de empatia. Os agressores, em geral, reproduzem comportamentos que vivenciam ou buscam aceitação em grupos.

A escola desempenha papel fundamental na prevenção. Criação de espaços de diálogo, programas de mediação de conflitos e abordagens que valorizem a diversidade são estratégias eficazes. Mas não basta punir: é preciso educar para a empatia.

A família também tem responsabilidade. Pais atentos, que conversam com os filhos e os ensinam a respeitar as diferenças, contribuem para a formação de cidadãos conscientes.

O combate ao bullying é uma luta de todos. Uma escola sem violência é uma escola mais justa, mais humana e mais preparada para formar cidadãos.`
    },
    {
        id: 15,
        genero: "Narrativa",
        titulo: "O Último Dia de Aula",
        resumo: "Um relato emocionante sobre a despedida do Ensino Médio.",
        data: "Dezembro de 2025",
        texto: `O último dia de aula não foi como os outros. Não houve sinos, não houve chamada, não houve tarefas. Houve abraços, sorrisos, lágrimas.

Cheguei à escola cedo, querendo aproveitar cada minuto. O portão que sempre cruzava apressado agora parecia merecer uma pausa. As árvores do pátio, que nunca notei, estavam mais bonitas.

A sala de aula virou palco de memórias. O quadro, que tanto nos ensinou, agora tinha uma última mensagem: "Sempre fomos mais do que alunos. Fomos uma família."

Cada palavra dos professores soou diferente. Não era mais sobre matéria, era sobre vida. As despedidas aos amigos, aos funcionários, à escola inteira. Houve quem chorasse, houve quem risse. Eu fiz um pouco dos dois.

Ao final do dia, ainda no pátio, olhei para trás. Vi minha história inteira ali. Os dias bons, os dias ruins, os dias comuns. E chorei.

O último dia de aula não foi um ponto final. Foi uma reticência. Porque a escola termina, mas as memórias e as amizades ficam. Para sempre.`
    }
];

// ============================================
// RENDERIZAR CARDS DE REDAÇÕES
// ============================================
const redacoesGrid = document.getElementById('redacoesGrid');
const modal = document.getElementById('redacaoModal');
const modalTitle = document.getElementById('modalTitle');
const modalBadge = document.getElementById('modalBadge');
const modalMeta = document.getElementById('modalMeta');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');

function renderRedacoes() {
    redacoesGrid.innerHTML = '';
    redacoes.forEach(redacao => {
        const card = document.createElement('div');
        card.className = 'redacao-card';
        card.innerHTML = `
            <span class="card-number">${String(redacao.id).padStart(2, '0')}</span>
            <span class="card-genero">${redacao.genero}</span>
            <h3 class="card-titulo">${redacao.titulo}</h3>
            <p class="card-resumo">${redacao.resumo}</p>
            <span class="card-btn">Ler redação <i class="fas fa-arrow-right"></i></span>
        `;
        card.addEventListener('click', () => abrirModal(redacao));
        redacoesGrid.appendChild(card);
    });
}

function abrirModal(redacao) {
    modalBadge.textContent = redacao.genero;
    modalTitle.textContent = redacao.titulo;
    modalMeta.textContent = `${redacao.genero} • ${redacao.data} • Redação ${String(redacao.id).padStart(2, '0')} de 15`;
    modalBody.innerHTML = `<p>${redacao.texto.replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br>')}</p>`;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    modal.scrollTop = 0;
}

function fecharModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', fecharModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) fecharModal();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') fecharModal();
});

// ============================================
// MENU MOBILE
// ============================================
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Fecha o menu ao clicar em um link (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// ============================================
// SCROLL SUAVE
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ============================================
// ANIMAÇÃO AO SCROLL (fade-in dos cards da timeline)
// ============================================
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.timeline-card, .redacao-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ============================================
// INICIALIZAÇÃO
// ============================================
renderRedacoes();
