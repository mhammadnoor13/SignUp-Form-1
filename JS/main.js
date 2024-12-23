document.addEventListener("DOMContentLoaded",()=>{
    const form = document.querySelector("form");
    const password = form.querySelector('input[name="password"]');
    const confirmPassword = form.querySelector('input[name="confirm-password"]');
    const submitBtn = form.querySelector('#submit-btn');

    confirmPassword.addEventListener("input",()=>{
        if(confirmPassword.value != password.value)
        {
            confirmPassword.setCustomValidity("Passwords do not match.");
        }
        else{
            confirmPassword.setCustomValidity("");
        }
    })

    form.addEventListener("submit",(event) =>{
        if(confirmPassword.value !== password.value){
            event.preventDefault();
            alert("Passwords do not match. Please correct them before submitting.")
        }
    })

})