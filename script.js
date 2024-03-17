
function calc() {
    let day = document.getElementById('day').value;
    let month = document.getElementById('month').value;
    let year = document.getElementById('year').value;
    let date = new Date();
    let today = date.getDate()
    let todayYear = date.getFullYear();
    let todayMonth = date.getMonth() + 1;
    let age = todayYear - year;
    let ageMonth = 0;
    let ageDay = 0;
   
    

    //  error handling
    document.getElementsByClassName("result").textContent = "";
    document.getElementById("dayError").textContent = "";
    document.getElementById("monthError").textContent = "";
    document.getElementById("yearError").textContent = "";
    document.getElementById("ageyear").textContent = "";
    document.getElementById("agemonth").textContent = "";
    document.getElementById("ageday").textContent = "";

    // Check if input fields are empty 

    if (!day || !month || !year){
        document.getElementById('dayError').innerText = 'this field is required.';
        document.getElementById('monthError').innerText = 'this field is required.';
        document.getElementById('yearError').innerText = 'this field is required.';
    }


    // validate day, month, and year
    if (day > 31 || month > 12 || year > todayYear) {
    document.getElementById("dayError").textContent = "must be a valid day";
    document.getElementById("monthError").textContent = "must be a valid month";
    document.getElementById("yearError").textContent = "must be a valid year";
    }

    // calculate age year
    document.getElementById("ageyear").textContent = age;

    // calculate age months 
    if (month <= todayMonth) {
        ageMonth = todayMonth - month;
    } else {
        ageMonth = 12 - Math.abs(todayMonth - month);
    }
    document.getElementById("agemonth").textContent = ageMonth;

    //  calculate age days
    if (day <= today) {
        ageDay = today - day
    } else {
        ageMonth = ageMonth - 1;
        ageDay = 31 - (day - today)
    }
    document.getElementById("ageday").textContent = ageDay;
}
