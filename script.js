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
    document.getElementById("dayError").textContent = "";
    document.getElementById("monthError").textContent = "";
    document.getElementById("yearError").textContent = "";


    document.getElementById("ageyear").textContent = "";
    document.getElementById("agemonth").textContent = "";
    document.getElementById("ageday").textContent = "";

    // validate day
    if (day > 31) {
        document.getElementById("dayError").textContent = "Must be a valid day";
    }
    // validate month
    if (month > 12) {
        document.getElementById("monthError").textContent = "Must be a valid month";
    }
    // validate year
    if (year > todayYear) {
        document.getElementById("yearError").textContent = "Must be a valid year";
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
    }
    else {
        ageMonth = ageMonth - 1;
        ageDay = 31 - (day - today)
    }
    document.getElementById("ageday").textContent = ageDay;

}