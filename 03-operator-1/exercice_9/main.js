let paul, marie, eric, clair, madameMukuna, joseph, sarah;
// Ecrivez votre code ici

let maisonFamiliale = 60000000
let terrains = 40000000
let liquidités = 20000000

let sommeHeritage = maisonFamiliale + terrains + liquidités

sommeTotalPremiereCategorie = sommeHeritage * 75 / 100
sommeTotalDeuxiemeCategorie = sommeHeritage * 25 / 100

let premierePartEnfant = sommeTotalPremiereCategorie / 3

paul = premierePartEnfant
marie = premierePartEnfant
let alain = premierePartEnfant
eric = alain / 2
clair = alain / 2

let deuxiemPartEnfant = sommeTotalDeuxiemeCategorie / 3

madameMukuna = deuxiemPartEnfant
joseph = deuxiemPartEnfant
sarah = deuxiemPartEnfant

console.log("Paul: "+paul+" CDF")
console.log("Marie: "+marie+" CDF")
console.log("Eric: "+eric+" CDF")
console.log("Claire: "+clair+" CDF")
console.log("Madame Mukuna: "+madameMukuna+" CDF")
console.log("Joseph: "+joseph+" CDF")
console.log("Sarah: "+sarah+" CDF")




// Ne pas modifier le code ci-dessous
module.exports = {
  paul,
  marie,
  eric,
  clair,
  madameMukuna,
  joseph,
  sarah,
};
