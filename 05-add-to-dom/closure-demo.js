let fruits = ['apples', 'bananas', 'cherries', 'pineapples', 'mangosteen'];

let arr = [];

for (let f of fruits) {
  // function is a REFERENCE
  // the real secret is:
  // a function is actually an OBJECT (dum dum dum!)
  arr.push(function(){
    console.log(f);
  })
}

console.dir(arr);
arr[3]();