let food = ['duck rice', 'rojak', 'satay', 'steamed chicken'];

//linear search
//check if an element exists in an array
//or returns the index where the element is
let target = 'satay';
// isFound is a flag to remember if something have happened.
let isFound = false;

for (let eachFood of food) {
    if (eachFood == target) {
        isFound = true;
    }
}

if (isFound) {
    console.log(target, 'is found')
}