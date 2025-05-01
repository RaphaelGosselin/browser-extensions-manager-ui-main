// Event Listener 
document.querySelector('.barre_haut__btn').addEventListener('click', darkModeLightMode);
document.querySelector('.btn_all').addEventListener('click', trieAll);
document.querySelector('.btn_active').addEventListener('click', trieActive);
document.querySelector('.btn_inactif').addEventListener('click', trieInactive);



function darkModeLightMode(){
    //References
    const refSections = document.querySelectorAll('section');
    const refBody = document.querySelector('body');
    const allTextElements = document.querySelectorAll('*');
    const refBtnHaut = document.querySelector('.barre_haut__icon');
    
    //Passage au light mode 
    if(refBody.classList.contains('body_couleur_dark_mode')){
        for(i = 0; i < refSections.length; i++){
            refSections[i].classList.remove('section_couleur_dark_mode');
            refSections[i].classList.add('section_couleur_light_mode');
        }
        refBody.classList.remove('body_couleur_dark_mode');
        refBody.classList.add('body_couleur_light_mode');
        //Changement Icon
        refBtnHaut.src = "assets/images/icon-moon.svg"
        //Pour le texte
        allTextElements.forEach(e => {
            if(e.textContent.trim() !== ''){
                e.style.color = 'black';
            }
        });
    }
    //Passage au Dark mode 
    else if(refBody.classList.contains('body_couleur_light_mode')){
        for(i = 0; i < refSections.length; i++){
            refSections[i].classList.remove('section_couleur_light_mode');
            refSections[i].classList.add('section_couleur_dark_mode');
        }
        refBody.classList.remove('body_couleur_light_mode');
        refBody.classList.add('body_couleur_dark_mode');
        //Changement Icon
        refBtnHaut.src = "assets/images/icon-sun.svg"
        //Pour le texte
        allTextElements.forEach(e => {
            if(e.textContent.trim() !== ''){
                e.style.color = 'white';
            }
        });

    }
}
function trieAll() {
    const extensions = document.querySelectorAll('.sec');
    extensions.forEach(extension => {
        extension.style.display = ''; // Show all extensions
    });
}

function trieActive() {
    const extensions = document.querySelectorAll('.sec');
    extensions.forEach(extension => {
        const checkbox = extension.querySelector('input[type="checkbox"]');
        if (checkbox && checkbox.checked) {
            extension.style.display = ''; // Show active extensions
        } else {
            extension.style.display = 'none'; // Hide inactive extensions
        }
    });
}

function trieInactive() {
    const extensions = document.querySelectorAll('.sec');
    extensions.forEach(extension => {
        const checkbox = extension.querySelector('input[type="checkbox"]');
        if (checkbox && !checkbox.checked) {
            extension.style.display = ''; // Show inactive extensions
        } else {
            extension.style.display = 'none'; // Hide active extensions
        }
    });
}