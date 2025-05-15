let salaireMensuel,
  loyer,
  nourriture,
  transport,
  autresDepenses,
  totalDepenses,
  reste;
// Ecrivez votre code ici
salaireMensuel= 500;
loyer = 0.30 *salaireMensuel;
nourriture = 0.20 * salaireMensuel;
transport = 0.10 * salaireMensuel;
autresDepenses = 50;
autresDepenses += 25;
totalDepenses = (loyer + nourriture + transport + autresDepenses);
reste = salaireMensuel - totalDepenses;
if (reste=> 100){
console.log("Budget bien géré")
}
else{
  console.log("Attention, budget serré")
}

let loisirs=0.15*salaireMensuel;
totalDepenses+=loisirs;
reste = salaireMensuel - totalDepenses;

pourcentageLoyer = (loyer / salaireMensuel) * 100;
pourcentageNourriture = (nourriture / salaireMensuel) * 100;
pourcentageTransport = (transport / salaireMensuel) * 100;
pourcentageAutres = (autresDepenses / salaireMensuel) * 100;
pourcentageLoisirs = (loisirs / salaireMensuel) * 100;

console.log("\n--- Détail des pourcentages de dépenses ---");
console.log("Loyer :", pourcentageLoyer.toFixed(2), "%");
console.log("Nourriture :", pourcentageNourriture.toFixed(2), "%");
console.log("Transport :", pourcentageTransport.toFixed(2), "%");
console.log("Autres dépenses :", pourcentageAutres.toFixed(2), "%");
console.log("Loisirs :", pourcentageLoisirs.toFixed(2), "%");
console.log("Total des dépenses :", totalDepenses);
console.log("Reste après dépenses :", reste);

salaireMensuel *= 1.10;

loyer = 0.30 * salaireMensuel;
nourriture = 0.20 * salaireMensuel;
transport = 0.10 * salaireMensuel;
autresDepenses = 75;
loisirs = 0.15 * salaireMensuel;

totalDepenses = loyer + nourriture + transport + autresDepenses + loisirs;
reste = salaireMensuel - totalDepenses;

if (totalDepenses > 0.90 * salaireMensuel) {
  console.log("\nDépenses trop élevées, réduisez vos charges");
} else {
  console.log("\nVos dépenses sont sous contrôle");
}

// Ne pas modifier le code ci-dessous
module.exports = {
  salaireMensuel,
  loyer,
  nourriture,
  transport,
  autresDepenses,
  totalDepenses,
  reste,
};
