console.log("!!!!!!!!!!!!!!!!!!!Fase 1!!!!!!!!!!!!!!!!!!!");
var nom = "Binay";
var cognom1 = "Timilsina";
var cognom2 = "Dhungana";

var dia = 6;
var mes = 9;
const any = 1995;

console.log(cognom1 + " " + cognom2 + " " + nom);
console.log(dia + "/" + mes + "/" + any);



console.log("!!!!!!!!!!!!!!!!!!!Fase 2!!!!!!!!!!!!!!!!!!!");
const anyInicialDeTraspas = 1948;
let tantsAnysDeTraspas = 0;
for (var i = anyInicialDeTraspas; i < any; i += 4) {
    tantsAnysDeTraspas += 1;
}
console.log(tantsAnysDeTraspas + " = Tants anys de Traspas!");


console.log("!!!!!!!!!!!!!!!!!!!Fase 3!!!!!!!!!!!!!!!!!!!");
let arrayDeAnysDeTraspas = [];
for (var i = anyInicialDeTraspas; i < any; i += 4) {
    arrayDeAnysDeTraspas.push(i);
}
arrayDeAnysDeTraspas.forEach(element => {
    console.log(element);
});

var esAnyDeTraspas;
var siEsAnyDeTraspas = "El meu any de neixament 1995 sí es un any de trapàs";
var noEsAnyDeTraspas = "El meu any de neixament 1995 no es un any de trapàs";

if (arrayDeAnysDeTraspas[arrayDeAnysDeTraspas.length - 1] == 1995) {
    esAnyDeTraspas = true;
    console.log(siEsAnyDeTraspas);
} else {
    esAnyDeTraspas = false;
    console.log(noEsAnyDeTraspas);
}

console.log("!!!!!!!!!!!!!!!!!!!Fase 4!!!!!!!!!!!!!!!!!!!");
var nomComplet;
var dataDeNeixamentComplet;
var siEsONoEsAnyDeTraspas;

nomComplet = cognom2 + " " + cognom1 + " " + nom;
dataDeNeixamentComplet = dia + "/" + mes + "/" + any;
siEsONoEsAnyDeTraspas = noEsAnyDeTraspas;

console.log(nomComplet);
console.log(dataDeNeixamentComplet);
console.log(siEsONoEsAnyDeTraspas);