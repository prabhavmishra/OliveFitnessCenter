
function sendMail(){
    const form = document.getElementById("myform");
form.addEventListener("submit", sendMail);
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        number : document.getElementById("number").value,
        Message : document.getElementById("Message").value,
    }
    emailjs.send("service_t1kou22","template_24cychr",parms).then(alert("Email Sent!"))
}