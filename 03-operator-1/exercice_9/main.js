let paul, marie, eric, clair, madameMukuna, joseph, sarah;
// Ecrivez votre code ici
// valeur total de l'heritage
let heritageTotal = 60000000 + 40000000 + 20000000; // 120000000

// Répartition par catégories
let partPremiereCategorie = heritageTotal * 0.75; // 75% pour la première catégorie
let partDeuxiemeCategorie = heritageTotal * 0.25; // 25% pour la deuxième catégorie

// Répartition de la première catégorie : 3 parts (Paul, Marie, Alain représenté par Eric et Clair)
let partParEnfantPremiereCategorie = partPremiereCategorie / 3; // 25% pour chaque enfant de la première catégorie
paul = partParEnfantPremiereCategorie; // 25% de l'héritage total
marie = partParEnfantPremiereCategorie; // Marie reçoit 25% de l'héritage total
eric = partParEnfantPremiereCategorie /2; // Eric reçoit 12.5% de l'héritage total
clair = partParEnfantPremiereCategorie /2; // Clair reçoit 12.5% de l'héritage total

// Répartition de la deuxième catégorie : 3 parts (Madame Mukuna , Joseph, Sarah)
let partDeuxiemeCategorie = partDeuxiemeCategorie / 3; 
madameMukuna = partDeuxiemeCategorieParPersonne; // madame Mukuna reçoit 8.33% de l'héritage total
joseph = partDeuxiemeCategorieParPersonne; // Joseph reçoit 8.33% de l'héritage total
sarah = partDeuxiemeCategorieParPersonne; // Sarah reçoit 8.33% de l'héritage total

let maisonFamiliale = 60000000
let terrains = 40000000
let liquidités = 20000000

//la somme total de l'heritage
let sommeHeritage = maisonFamiliale + terrains + liquidités

//Répartition de l'heritage
sommeTotalPremiereCategorie = sommeHeritage * 75 / 100
sommeTotalDeuxiemeCategorie = sommeHeritage * 25 / 100

//Premiere categorie
let premierePartEnfant = sommeTotalPremiereCategorie / 3

paul = premierePartEnfant
marie = premierePartEnfant
let alain = premierePartEnfant
eric = alain / 2
clair = alain / 2

//Deuxieme categorie
let deuxiemPartEnfant = sommeTotalDeuxiemeCategorie / 3

madameMukuna = deuxiemPartEnfant
joseph = deuxiemPartEnfant
sarah = deuxiemPartEnfant

//affichage a la console
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
