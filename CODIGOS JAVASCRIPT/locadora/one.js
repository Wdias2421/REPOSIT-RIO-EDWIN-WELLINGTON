const readline = require('readline');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

let catalogo = {};

function home() {
    rl.question('BEM VINDO (A) Á LOCADORA DO SEU GIUSEPPE CADURA\n\nO QUE GOSTARIA DE FAZER?\n1:VER CATÁLOGO\n2:ALUGAR\n3:COMPRAR\n4:SAIR', (answer) => {
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



