const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    const email =
        document.getElementById("contactEmail").value.trim();

    const emailPattern =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    if (!emailPattern.test(email)) {

        event.preventDefault();

        alert("Please enter a valid email address!");

        return;

    }
    const phone =
    document.getElementById("contactPhone").value.trim();

if (!/^[0-9]{10}$/.test(phone)) {

    event.preventDefault();

    alert("Please enter exactly 10 digit phone number!");

    return;
}

});


function ClearForm() {

    document.getElementById("contactForm").reset();

}
    function ClearForm(){
        document.getElementById("contactForm").reset();
    }
