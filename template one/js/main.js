let list = document.getElementById('list');
console.log(list);

function press() {
    list.style.display = 'block';
    setTimeout(() => {
        list.style.display = 'none';
    }, 3000); 
}

function scrollDown() {
    window.scrollTo({
        top: 1340,
        behavior: 'smooth'
    });
    // Optionally delay hiding the list to allow smooth scroll effect
    setTimeout(() => {
        list.style.display = 'none';
    }, 600); 
}

function scrollDown1() {
    window.scrollTo({
        top: 1900,
        behavior: 'smooth'
    });
    // Optionally delay hiding the list to allow smooth scroll effect
    setTimeout(() => {
        list.style.display = 'none';
    }, 600); 
}

function scrollDown2() {
    window.scrollTo({
        top: 3340,
        behavior: 'smooth'
    });
    // Optionally delay hiding the list to allow smooth scroll effect
    setTimeout(() => {
        list.style.display = 'none';
    }, 600); 
}

function scrollDown3() {
    window.scrollTo({
        top: 4000,
        behavior: 'smooth'
    });
    // Optionally delay hiding the list to allow smooth scroll effect
    setTimeout(() => {
        list.style.display = 'none';
    }, 600); 
}
