const broomCupboard = [2, 4, 1, 3, 7, 5, 8, 6, 10, 9, 0];

function compareNumbers(a, b) {
  return a - b;
}
broomCupboard.sort(compareNumbers);

const potions = [
  { name: "polyjuice potion", shelf: 2 },
  { name: "draught of living death", shelf: 4 },
  { name: "pepperup potion", shelf: 1 },
  { name: "veritaserum", shelf: 3 },
];

function compareNumbers(a, b) {
  return b.shelf-a.shelf;
}

potions.sort(compareNumbers)

const students = [
  "Cedric Diggory",
  "Padma Patil",
  "Lucius Malfoy",
  "Seamus Finnigan",
  "Lavender Brown",
  "Luna Lovegood",
  "Gregory Goyle",
];


const compare = (a, b) => {
  const splitA = a.split(" ");
  const splitB = b.split(" ");
  const lastA = splitA[splitA.length - 1];
  const lastB = splitB[splitB.length - 1];

  return lastA === lastB ?
    compareStrings(splitA[0], splitB[0]) :
    compareStrings(lastA, lastB);
}

console.log(students.sort(compare));