let queue = [
  "catHorse",
  "dogPig",
  "catHorse",
  "dogPig",
  "kangarooBear",
  "dogPig",
  "catHorse",
  "catHorse",
  "dogPig",
];

 let catHorse = queue.push("catHorse");
 let removeAnimal = queue.shift("");
let owlDonkey = queue.unshift("owlDonkey");
let catHorseRemove= queue.splice(6,1);
let kangarooBearRemove=queue.splice(4,1)
const unofficialQueue = [
  "rabbitSalmon",
  "rabbitSalmon",
  "rabbitSalmon",
  "rabbitSalmon",
];

let mergeArray = queue.concat(unofficialQueue)