let salaireMensuel, loyer , nourriture, transport, loisirs, totalDepenses, reste;
// Ecrivez votre code ici
salaireMensuel = (500*10)/100;
let autresDepenses = 50;
  autresDepenses = autresDepenses+25;
loyer = (salaireMensuel*30/100);
nourriture = (salaireMensuel*20/100);
transport = (salaireMensuel*10/100)
loisirs = (salaireMensuel*15/100);
totalDepenses = (loyer+nourriture+transport+autresDepenses+loisirs);
reste = (salaireMensuel-totalDepenses);
let pourcentage = (salaireMensuel*70)/100;
console.log(pourcentage);

if (reste=>100){
  console.log("Budget bien géré")
}
else{
  console.log("Attention, budget serré")
}
if (totalDepenses>90){
  console.log("Dépenses trop élevées, réduisez vos charges");
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
