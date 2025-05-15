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
