'use strict'; //Enables The Strict mode of JS
setTimeout(() => {
    // Variables Declairations
    let job = document.getElementById('profession');
    let uname = document.getElementById('name');
    let gender = document.getElementById('gender');
    let father = document.getElementById('father');
    let dob = document.getElementById('dob');
    let blood = document.getElementById('blood');
    let adhaar = document.getElementById('adhaar');
    let ph1 = document.getElementById('ph1');
    let ph2 = document.getElementById('ph2');
    let address = document.getElementById('address');

    // Creating Function to check Gender
    function sex() {
        let i = prompt("What is your Gender? male(m) female(f)");
        let input = i.toLowerCase();
        if (input == "m" || input == "f") { return input; }
        else { alert("Please Enter Currect Keys!"); sex(); }
    };

    // Showing Outputs
    job.innerText = prompt("What is your Profession? ");
    uname.innerText = prompt("What is your Name?");
    gender.innerText = sex() == "m" ? "S/O: " : "D/O: ";
    father.innerText = prompt("Enter your Father's name");
    dob.innerText = prompt("Enter your DOB");
    blood.innerText = prompt("What is your Blood Group?");
    adhaar.innerText = prompt("Enter your Adhaar no.");
    ph1.innerText = prompt("Enter your Phone no.")
    ph2.innerText = prompt("Enter your Alternative Phone no. (Optional)")
    address.innerText = prompt("Enter your Full Address..");

    // Alerting Process to make Suspence
    alert("Proccessing Data.");
    alert("Proccessing Data..");
    alert("Proccessing Data...");
}, 3000);