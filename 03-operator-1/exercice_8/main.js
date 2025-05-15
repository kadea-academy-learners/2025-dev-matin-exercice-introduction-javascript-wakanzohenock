let salaireMensuel = 500
let loyer
let nourriture
let transport
let autresDepenses = 50
    autresDepenses = 25
let loisirs
let totalDepenses
let reste
// Ecrivez votre code ici
loyer (salaireMensuel*30/100)
nourriture (salaireMensuel*20/100)
transport (salaireMensuel*10/100)
loisirs (salaireMensuel*15/100)
totalDepenses(loyer+nourriture+transport+autresDepenses+loisirs)
reste(salaireMensuel-totalDepenses)

if (reste=>100){
  console.log("Budget bien géré")
}
else{
  console.log("Budget serré")
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
