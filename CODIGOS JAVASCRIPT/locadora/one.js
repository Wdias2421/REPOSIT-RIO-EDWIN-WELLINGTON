const readline = require('readline');


const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});


const films = [
   {
     title: "Die Hard",
     year: 1988,
     director: "John McTiernan",
     synopsis: "NYPD detective John McClane visits his estranged wife in Los Angeles, but his Christmas vacation is disrupted by a group of terrorists who take over the office building."
   },
   {
     title: "The Matrix",
     year: 1999,
     director: "The Wachowskis",
     synopsis: "Neo, a computer hacker, discovers that his entire life has been a simulation created by machines and that he is 'The One' prophesied to free humanity."
   },
   {
     title: "The Hangover",
     year: 2009,
     director: "Todd Phillips",
     synopsis: "A group of friends travel to Las Vegas for a bachelor party, but wake up the next morning with no memory of the night before and must piece together what happened."
   },
   {
     title: "Superbad",
     year: 2007,
     director: "Greg Mottola",
     synopsis: "Two high school seniors try to score booze for a party, but their plans are ruined when they get caught up in a series of misadventures."
   },
   {
     title: "Titanic",
     year: 1997,
     director: "James Cameron",
     synopsis: "A poor artist and a high-society woman fall in love aboard the ill-fated ship, RMS Titanic, during its doomed maiden voyage."
   },
   {
     title: "La La Land",
     year: 2016,
     director: "Damien Chazelle",
     synopsis: "A jazz pianist and an aspiring actress fall in love while chasing their dreams in Los Angeles, but their relationship is put to the test when they must choose between their careers and each other."
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



