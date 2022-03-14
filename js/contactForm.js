function recieveContactEmail(){
    let userName = document.getElementById('contactFullName').value;

    let userEmail = document.getElementById('contactEmail').value;

    let userMessage = document.getElementById('contactMessage').value;

    if ((userName == '') || (userEmail == '') || (userMessage == '')) {
        Toastify({
            text: "Please complete the empty fields",
            duration: 2500,
            style: {background: "#FC5E59",}
        }).showToast();
    } else {
        emailjs.send("service_a81pd16","template_jkifjby",{
            user_name: userName,
            user_email: userEmail,
            user_message: userMessage,
            });
    
        Toastify({
            text: "Form submitted, Thank you!",
            duration: 3000,
            style: {background: "#fdbd2d",}
        }).showToast();
    }
}