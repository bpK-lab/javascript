
function toggle(id) {
    const compSection = document.getElementById(id);
    compSection.style.display =
        compSection.style.display === 'none' ? 'block' : 'none';
}


function toggledark(){
    document.body.classList.toggle("dark");
}


/*
function darkMode(){
    const theme = document.getElementById();
    theme = theme === dark?none:dark;
}
*/