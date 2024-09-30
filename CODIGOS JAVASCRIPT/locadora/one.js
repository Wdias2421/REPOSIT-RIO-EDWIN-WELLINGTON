const readline = require('readline');


const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});


const films = [
   {
     titulo: "O Poderoso Chefão",
     ano: 1972,
     diretor: "Francis Ford Coppola",
     sinopse: "Uma família mafiosa luta para estabelecer sua supremacia nos Estados Unidos depois da Segunda Guerra Mundial. Uma tentativa de assassinato deixa o chefão Vito Corleone incapacitado e força os filhos Michael e Sonny a assumir os negócios."
   },
   {
     titulo: "Clube da Luta",
     ano: 1999,
     diretor: "David Fincher",
     sinopse: "Um homem deprimido que sofre de insônia conhece um estranho vendedor chamado Tyler Durden e se vê morando em uma casa suja depois que seu perfeito apartamento é destruído. A dupla forma um clube com regras rígidas onde homens lutam. A parceria perfeita é comprometida quando uma mulher, Marla, atrai a atenção de Tyler."
   },
   {
     titulo: "Taxi Driver – Motorista de Táxi",
     ano: 1976,
     diretor: "Martin Scorsese",
     sinopse: "O motorista de táxi de Nova York Travis Bickle, veterano da Guerra do Vietnã, reflete constantemente sobre a corrupção da vida ao seu redor e sente-se cada vez mais perturbado com a própria solidão e alienação. Apesar de não conseguir fazer contato emocional com ninguém e viver uma vida questionável em busca de diversão, ele se torna obcecado em ajudar uma prostituta de 12 anos que entra em seu táxi para fugir de um cafetão."
   },
   {
     titulo: "Pulp Fiction: Tempo de Violência",
     ano: 1994,
     diretor: "Quentin Tarantino",
     sinopse: "Assassino que trabalha para a máfia se apaixona pela esposa de seu chefe quando é convidado a acompanhá-la, um boxeador descumpre sua promessa de perder uma luta e um casal tenta um assalto que rapidamente sai do controle."
   },
   {
     titulo: "Donnie Darko",
     ano: 2001,
     diretor: "Richard Kelly",
     sinopse: "Donnie é um jovem excêntrico que despreza a grande maioria de seus colegas de escola. Ele tem visões, em especial de Frank, um coelho gigante que só ele consegue ver e que o encoraja a fazer brincadeiras humilhantes com quem o cerca. Um dia, uma de suas visões o atrai para fora de casa e lhe diz que o mundo acabará dentro de um mês. Donnie inicialmente não acredita, mas, momentos depois, a turbina de um avião cai em sua casa e ele começa a se perguntar qual é o fundo de verdade dessa previsão."
   },
   {
     titulo: "Django Livre",
     ano: 2012,
     diretor: "Quentin Tarantino",
     sinopse: "No sul dos Estados Unidos, o ex-escravo Django faz uma aliança inesperada com o caçador de recompensas Schultz para perseguir os criminosos mais procurados do país e resgatar sua esposa de um fazendeiro que força seus escravos a entrarem em competições mortais."
   },
   {
    titulo: "Scarface",
    ano: 1983,
    diretor: "Brian De Palma",
    sinopse: "Após receber residência permanente nos Estados Unidos em troca do assassinato de um oficial do governo cubano, Tony Montana se torna o chefe do tráfico de drogas em Miami. Matando qualquer um que entre em seu caminho, Tony eventualmente se torna o maior traficante da Flórida, controlando quase toda a cocaína que entra em Miami. Porém, a pressão da polícia, as guerras com cartéis colombianos e sua própria paranoia servem para alimentar as chamas de sua eventual queda."
  },
  {
    titulo: "Matrix",
    ano: 1999,
    diretor: "Lana Wachowski, Lilly Wachowski",
    sinopse: "O jovem programador Thomas Anderson é atormentado por estranhos pesadelos em que está sempre conectado por cabos a um imenso sistema de computadores do futuro. À medida que o sonho se repete, ele começa a desconfiar da realidade. Thomas conhece os misteriosos Morpheus e Trinity e descobre que é vítima de um sistema inteligente e artificial chamado Matrix, que manipula a mente das pessoas e cria a ilusão de um mundo real enquanto usa os cérebros e corpos dos indivíduos para produzir energia."
  },
  {
    titulo: "Blade Runner - O Caçador de Androides",
    ano: 1982,
    diretor: "Ridley Scott",
    sinopse: "No século 21, uma corporação desenvolve clones humanos para serem usados como escravos em colônias fora da Terra, identificados como replicantes. Em 2019, um ex-policial é acionado para caçar um grupo fugitivo vivendo disfarçado em Los Angeles."
  },
  {
    titulo: "O Show de Truman - O Show da Vida",
    ano: 1998,
    diretor: "Peter Weir",
    sinopse: "Truman Burbank é um pacato vendedor de seguros que leva uma vida simples com sua esposa Meryl Burbank. Porém, algumas coisas ao seu redor fazem com que ele passe a estranhar sua cidade, seus supostos amigos e até sua mulher. Após conhecer a misteriosa Lauren, ele fica intrigado e acaba descobrindo que toda sua vida foi monitorada por câmeras e transmitida em rede nacional.."
  },
  {
    titulo: "2001 - Uma Odisseia no Espaço",
    ano: 1968,
    diretor: "Stanley Kubrick",
    sinopse: "Uma estrutura imponente preta fornece uma conexão entre o passado e o futuro nesta adaptação enigmática de um conto reverenciado de ficção científica do autor Arthur C. Clarke. Quando o Dr. Dave Bowman e outros astronautas são enviados para uma misteriosa missão, os chips de seus computadores começam a mostrar um comportamento estranho, levando a um tenso confronto entre homem e máquina que resulta em uma viagem alucinante no espaço e no tempo."
  },
  {
    titulo: "Ilha do Medo",
    ano: 2010,
    diretor: "Martin Scorsese",
    sinopse: "Nos anos 1950, a fuga de uma assassina leva o detetive Teddy Daniels e seu parceiro a investigarem o seu desaparecimento de um quarto trancado em um hospital psiquiátrico. Lá, uma rebelião se inicia e o agente terá que enfrentar seus próprios medos."
  },
  {
     titulo: "Interestelar",
     ano: 2014,
     diretor: "Christopher Nolan",
     sinopse: "As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar."
   },
   {
     titulo: "Laranja Mecânica",
     ano: 1972,
     diretor: "Stanley Kubrick",
     sinopse: "O jovem Alex passa as noites com uma gangue de amigos briguentos. Depois que é preso, se submete a uma técnica de modificação de comportamento para poder ganhar sua liberdade."
   },
   {
     titulo: "Cidadão Kane",
     ano: 1941,
     diretor: "Orson Welles",
     sinopse: "Apontado frequentemente como um dos melhores filmes já produzidos, a obra-prima de Orson Welles conta a história do magnata da imprensa Charles Foster Kane em uma sequência de flashbacks. Um jornalista fica intrigado pela última palavra de Kane - rosebud - e tenta descobrir o seu significado entrevistando pessoas do passado do magnata."
   },
   {
     titulo: "Cidade De Deus",
     ano: 2002,
     diretor: "Fernando Meirelles, Kátia Lund",
     sinopse: "Buscapé é um jovem pobre, negro e sensível, que cresce em um universo de muita violência. Ele vive na Cidade de Deus, favela carioca conhecida por ser um dos locais mais violentos do Rio. Amedrontado com a possibilidade de se tornar um bandido, Buscapé é salvo de seu destino por causa de seu talento como fotógrafo, o qual permite que siga carreira na profissão. É por meio de seu olhar atrás da câmera que ele analisa o dia a dia da favela em que vive, onde a violência aparenta ser infinita."
   },
   {
     titulo: "O Auto da Compadecida",
     ano: 2000,
     diretor: "Guel Arraes",
     sinopse: "As aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. Eles estão sempre enganando o povo de um pequeno vilarejo, inclusive o temido cangaceiro Severino de Aracaju, que os persegue pela região."
   },
   {
     titulo: "Carandiru: O Filme",
     ano: 2003,
     diretor: "Héctor Babenco",
     sinopse: "Médico sanitarista se oferece para realizar o trabalho de prevenção ao vírus HIV no Carandiru, maior presídio da América Latina, durante a década de 1990. Convivendo diariamente com a dura realidade dos detentos, ele presencia a violência agravada pela superlotação, a precariedade dos serviços prestados e a animalização dos presos. Paradoxalmente, ele conhece o sistema de organização interna e o lado frágil, romântico e sonhador dos homens cumprindo pena."
   },
   {
    titulo: "O Iluminado",
    ano: 1980,
    diretor: "Stanley Kubrick",
    sinopse: "Jack Torrance se torna caseiro de inverno do isolado Hotel Overlook, nas montanhas do Colorado, na esperança de curar seu bloqueio de escritor. Ele se instala com a esposa Wendy e o filho Danny, que é atormentando por premonições. Jack não consegue escrever e as visões de Danny se tornam mais perturbadoras. O escritor descobre os segredos sombrios do hotel e começa a se transformar em um maníaco homicida, aterrorizando sua família."
  },
  {
    titulo: "Psicose",
    ano: 1961,
    diretor: "Alfred Hitchcock",
    sinopse: "Após roubar 40 mil dólares para se casar com o namorado, uma mulher foge durante uma tempestade e decide passar a noite em um hotel que encontra pelo caminho. Ela conhece o educado e nervoso proprietário do estabelecimento, Norman Bates, um jovem com um interesse em taxidermia e com uma relação conturbada com sua mãe. O que parece ser uma simples estadia no local se torna uma verdadeira noite de terror."
  }
 ];


function home() {
   rl.question('BEM VINDO (A) Á LOCADORA DO SEU GIUSEPPE CADURA\n\nO QUE GOSTARIA DE FAZER?\n1:VER CATÁLOGO\n2:ALUGAR\n3:COMPRAR\n4:SAIR\n', (answer) => {
       if (answer == 1){
           console.log("aooopa")
           rl.close();
       } else {
           console.log(`ENTRADA INVÁLIDA`);
           home();
       }
   });
}
home()



