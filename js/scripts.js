var myModal = new bootstrap.Modal(document.getElementById('loginModal'))
var loginLink = document.getElementById('loginButton')

loginLink.addEventListener('click', function(){
    myModal.show();
});

