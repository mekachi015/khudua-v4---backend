document.getElementById("sendEnquiry").addEventListener("submit-button", function (event){
    event.preventDefault();

    const fullname = document.getElementById("fullname").value;
    const cellphone = document.getElementById("cellphone").value;
    const email = document.getElementById("email").value;
    const question = document.getElementById("question").value;

    const formData = {
        fullname : fullname,
        cellphone: cellphone,
        email: email,
        question: question
    };

    fetch("/subitEnquiry", {
        method: "POST",
        
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(formData)
    })

    .then (response => {
        if (response.ok) {
            alert("Enquiry Submitted Successfully !");
        } else {
            alert("Error submitting query")
        }
    })

    .catch(error => {
        console.error("Error:", error);
        alert("Error submitting enquiry.")
    });
});




