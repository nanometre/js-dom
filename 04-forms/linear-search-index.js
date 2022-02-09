let food = ['duck rice', 'rojak', 'satay', 'steamed chicken'];

// linear search:
// check if an element exists in an array
// or returns the index where the element is
let target = 'satay';

// if foundIndex remains as -1,
// then the target is not in the array
let foundIndex = -1;
for (let i =0; i < food.length; i++) {
  if (food[i] == target) {
    foundIndex = i;
  }
}

if (foundIndex > -1) {
  console.log(target, "is found at index", foundIndex);
} else {
  console.log(target,"is not in the array")
}