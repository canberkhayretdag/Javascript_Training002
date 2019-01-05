//Get input
let filterInput = document.getElementById('filterInput');
//Add event listener
filterInput.addEventListener('keyup', filterNames);

function filterNames(){
    // Get value from input
    let filterValue = document.getElementById('filterInput').value.toUpperCase();
    
    let names = document.getElementById('names');
    let name = names.querySelectorAll('li.collection-item');
    

    for (let i = 0; i < name.length; i++) {
        let a = name[i].getElementsByTagName('a')[0];
        
        if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            name[i].style.display = '';
        } else {
            name[i].style.display = 'none';
        }
    }
}
