// BRUTE FORCE METHOD

document.querySelector('#page1-btn')
    .addEventListener('click', function () {
        let pages = document.querySelectorAll('.page');
        // hide all the pages
        for (let p of pages) {
            // it is ok to attempt to remove a class
            // from an element even if that element does not have it
            p.classList.remove('show');
            p.classList.add('hidden');
        }

        // show page 1
        let page1 = document.querySelector('#page-1');
        page1.classList.remove('hidden');
        page1.classList.add('show');
    })

document.querySelector('#page2-btn')
    .addEventListener('click', function () {
        let pages = document.querySelectorAll('.page');
        // hide all the pages
        for (let p of pages) {
            // it is ok to attempt to remove a class
            // from an element even if that element does not have it
            p.classList.remove('show');
            p.classList.add('hidden');
        }

        // show page 2
        let page2 = document.querySelector('#page-2');
        page2.classList.remove('hidden');
        page2.classList.add('show');
    })

document.querySelector('#page3-btn')
    .addEventListener('click', function () {
        let pages = document.querySelectorAll('.page');
        // hide all the pages
        for (let p of pages) {
            // it is ok to attempt to remove a class
            // from an element even if that element does not have it
            p.classList.remove('show');
            p.classList.add('hidden');
        }

        // show page 3
        let page3 = document.querySelector('#page-3');
        page3.classList.remove('hidden');
        page3.classList.add('show');
    })