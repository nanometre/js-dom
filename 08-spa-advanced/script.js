let allButtons = document.querySelectorAll('#navbar button')

for (let btn of allButtons) {
   btn.addEventListener('click', function (event) {

        let selectedBtn = event.target;
        let pageNumber = selectedBtn.dataset.page;

        let pages = document.querySelectorAll('.page');
        // hide all the pages
        for (let p of pages) {
            // it is ok to attempt to remove a class
            // from an element even if that element does not have it
            p.classList.remove('show');
            p.classList.add('hidden');
        }

        let page = document.querySelector('#page-'+pageNumber);
        page.classList.remove('hidden');
        page.classList.add('show');
    })



}

