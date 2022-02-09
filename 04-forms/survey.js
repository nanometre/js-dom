let btn = document.querySelector('#btn')

// add an event listener to the button element, such that when it clickes 
// it will run the function defined as the second parameter
btn.addEventListener('click', function(){
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    // let rating = document.querySelector('.rating:checked').value;
    let rating = null; // before we run the for-loop, we don't
                       // know which one has been selected

    // get all the radio buttons with .rating in one array
    let rb = document.querySelectorAll('.rating');
    for (let eachRating of rb) {
        // for each rating radio button, check if its .checked
        // is true
        if (eachRating.checked == true) {
            rating = eachRating.value;
            break;
        }
    }
    console.log(name, email, rating);
})