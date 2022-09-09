document.querySelector("#contact").addEventListener("submit", (event) => {
    event.preventDefault();

    let email = document.querySelector("#email");
    let name = document.querySelector("#name");
    var date = new Date();

    date.getDay();

    //removing whitespaces
    function removeWS() {
        email.replace(/\s/g,'');
        name.replace(/\s/g,'');
    }

    //validating email

    if (date.getDay() > 4) {
        console.log("Sorry, the business is closed friday to sunday");
    } else {
        console.log("We have received your message and will reply shortly");
    }
});