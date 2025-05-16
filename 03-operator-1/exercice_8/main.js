let salaireMensuel = 500,
  loyer = 0.3 * salaireMensuel,
  nourriture = 0.2 * salaireMensuel,
  transport = 0.1 * salaireMensuel,
  autresDepenses = 25 + 50,
  totalDepenses = loyer + nourriture + transport + autresDepenses,
  reste = salaireMensuel - totalDepenses;

if (reste >= 100) {
  console.log("Budget bien géré");
} else {
  console.log("Attention, budget serré");
}
let loisirs = 0.15 * salaireMensuel;
(totalDepenses = loyer + nourriture + transport + autresDepenses),
  (reste = salaireMensuel - totalDepenses),
  // Ecrivez votre code ici

  // Ne pas modifier le code ci-dessous
  (module.exports = {
    salaireMensuel,
    loyer,
    nourriture,
    transport,
    autresDepenses,
    totalDepenses,
    reste,
  });
