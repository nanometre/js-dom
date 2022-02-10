    // the DOMContentLoaded event happens to the window
// when the DOM tree is ready. This makes it perfect
// starting place for your web application
window.addEventListener("DOMContentLoaded", async function(){
    let response = await axios.get('dom-revision-students.json');
    let students = response.data;

    // THE MOST BASIC WAY: INNER HTML
    // SIMPLE
    // for (let eachStudent of students) {
    //     let studentList = document.querySelector('#students');
    //     studentList.innerHTML += 
    //         `<li class="list-group-item">${eachStudent.name}</li>`
    // }

    // SECOND METHOD; USING APPEND CHILD
    // MOST FLEXIBLE
    // for (let eachStudent of students) {
    //     // create an li
    //     let studentElement = document.createElement('li');
        
    //     let spanElement = document.createElement('span');
    //     spanElement.innerText = eachStudent.name;
    //     spanElement.className="mx-3";

    //     let buttonElement = document.createElement('button');
    //     buttonElement.innerText = "Show GPA";
    //     buttonElement.className = "btn btn-primary";
    //     buttonElement.addEventListener('click', function(){
    //         alert("GPA = " + eachStudent.gpa); // alert only works with + when joining string. cannot work with ,
    //     })

    //     // add the span element and the button element
    //     // into the student element
    //     studentElement.appendChild(spanElement);
    //     studentElement.appendChild(buttonElement);
     
    //     studentElement.className = "list-group-item";  // eqv. <li class="list-group-item">...</li>

    //     let studentList = document.querySelector('#students');
    //     studentList.appendChild(studentElement);
    // }

    // THIRD METHOD: HYBRID
    for (let eachStudent of students) {
        let studentElement = document.createElement('li');
        studentElement.innerHTML = `
            <span class="mx-3">${eachStudent.name}</span>
            <button class="btn btn-primary">Show GPA</button>
        `;
        studentElement.className = "list-group-item";

        // queryselector only applied to the element.
        // studentElement.querySelector applies to the li element only
        // document.xxxxxx applies to the whole html document.
        let showGPAButton = studentElement.querySelector('button');
        showGPAButton.addEventListener("click", function(){
            alert("GPA = " + eachStudent.gpa);
        })
        document.querySelector('#students')
                .appendChild(studentElement);
    }
});