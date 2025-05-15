let paul, marie, eric, clair, madameMukuna, joseph, sarah;
// Ecrivez votre code ici

let maison = 60000000;
let terrains = 40000000;
let liquidites = 20000000;
totalHeritage = maison + terrains + liquidites;

let partEnfants = 0.75 * totalHeritage; 
let partConjointEtFreres = 0.25 * totalHeritage

// Enfants (Paul, Marie, Alain)

let partParEnfant = partEnfants / 3;

partPaul = partParEnfant;
partMarie = partParEnfant;

// Alain est décédé → sa part va à Éric et Claire

partEric = partParEnfant / 2;
partClaire = partParEnfant / 2;

// Conjoint + frères

let partConjointFrereNiece = partConjointEtFreres / 3;

partMadameMukuna = partConjointFrereNiece;
partJoseph = partConjointFrereNiece;
partSarah = partConjointFrereNiece;

console.log("=== RÉPARTITION DE L'HÉRITAGE DE JEAN MUKUNA ===");
console.log("Total du patrimoine :", totalHeritage.toLocaleString("fr-CD"), "CDF\n");

console.log("--- Enfants (75%) ---");
console.log("Paul :", partPaul.toLocaleString("fr-CD"), "CDF");
console.log("Marie :", partMarie.toLocaleString("fr-CD"), "CDF");
console.log("Éric :", partEric.toLocaleString("fr-CD"), "CDF");
console.log("Claire :", partClaire.toLocaleString("fr-CD"), "CDF");

console.log("\n--- Conjoint et frères (25%) ---");
console.log("Madame MUKUNA :", partMadameMukuna.toLocaleString("fr-CD"), "CDF");
console.log("Joseph :", partJoseph.toLocaleString("fr-CD"), "CDF");
console.log("Sarah :", partSarah.toLocaleString("fr-CD"), "CDF");

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
