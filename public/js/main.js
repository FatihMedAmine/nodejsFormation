const  sidebareId = document.getElementById('SidebarId');

if(localStorage.getItem('isSmall') === 'true'){
    sidebareId.classList.add('small-sidebar');

}
else{
    sidebareId.classList.remove('small-sidebar');

}

const toggleSidebar  = () => {
    if(localStorage.getItem('isSmall') === 'true'){
        localStorage.setItem('isSmall', 'false');
        sidebareId.classList.remove('small-sidebar');

    }
    else{
        localStorage.setItem('isSmall', 'true');
        sidebareId.classList.add('small-sidebar');

    }

}