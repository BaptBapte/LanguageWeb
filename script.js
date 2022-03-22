

var sectionLogin = document.querySelector('#section-login');

var myForm = document.querySelector('.form-email');
var userEmail = document.querySelector('#user-email');
var formIsValid = undefined;
//

/* Faire parvenir événement au formulaire */
myForm.addEventListener('submit', function(event){
    // Arrêter l'événement
    event.preventDefault();

    // Validation du formulaire
    formIsValid = true;

    // L'adresse email est valide
    if( !userEmail.value.includes('@') || !userEmail.value.includes('.') ){ formIsValid = false }


    // Validation final du formulaire
    if(formIsValid){
        console.log( 'Email OK', userEmail.value )
        
    // Stocker l'email dans localStorage
        localStorage.setItem('user', userEmail.value);

    // Voir mise à jour
        sectionLogin.classList.remove('active')
        sectionLogged.classList.add('active')

    }

    else{
        console.log( "Le formulaire n'est pas valide" )
    }
})


