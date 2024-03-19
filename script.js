
function calc() {
    
        let day = document.getElementById('day').value;
        let month = document.getElementById('month').value;
        let year = document.getElementById('year').value;
       
        let totalDays = new Date(year, month, 0).getDate(); // Declaration added
        let totalMonths = 12;
        let today = new Date(); // Declaration moved up
        let thisYear = today.getFullYear();
        let thisMonth = today.getMonth() + 1;
        let thisDay = today.getDate();
        let totalDaysPM = new Date(thisYear, (thisMonth - 1), 0).getDate(); // Declaration moved down
        let beforeRDay = totalDaysPM - day;
        let beforeRDay0 = beforeRDay + thisDay;
    
        let dayR = document.querySelector(".daysResult");
        let monthR = document.querySelector(".monthResult");
        let yearR = document.querySelector(".yearResult");
    
        // Missing variable declarations added here
        let resultDay, resultMonth, resultYear;


    // Check if input fields are empty 

     if (year == null && month == null && day == null || year == "" && month == "" && day == "") {
        for (var i = 0; i < 3; i++) {
            document.querySelectorAll(".empty__string__text")[i].style.display = "block";
            document.querySelectorAll("label")[i].classList.add("empty__string-label");
            document.querySelectorAll("input")[i].classList.add("empty__string-input");
        }
        document.querySelector(".invalid__string__year").style.display = "none";
        document.querySelector(".invalid__string__month").style.display = "none";
        document.querySelector(".invalid__string__day").style.display = "none";
        refresh();
        return;
    }

     //Checks if the year is equal to the current year
    else if (thisYear == year) {
        yearR.dataset.count = 0; //if yes renders 0
        // Removes error messages after form is entered correctly
        for (var i = 0; i < 3; i++) {
            document.querySelectorAll(".empty__string__text")[i].style.display = "none";
            document.querySelectorAll("label")[i].classList.remove("empty__string-label");
            document.querySelectorAll("input")[i].classList.remove("empty__string-input");
        }
        document.querySelector(".invalid__string__day").style.display = "none";
        document.querySelector(".invalid__string__month").style.display = "none";
        document.querySelector(".invalid__string__year").style.display = "none";
        //Checks if month number is between 1 and 12
        if (month > totalMonths || month <= 0) {
            if (day > totalDays || day <= 0) {
                document.querySelector(".invalid__string__whole").style.display = "block";
            }
            for (var i = 0; i < 3; i++) {
                document.querySelectorAll("label")[i].classList.add("empty__string-label");
                document.querySelectorAll("input")[i].classList.add("empty__string-input");
            }
            document.querySelector(".invalid__string__month").style.display = "block";
            refresh(); // refreshes the results section to empty
        }
        // Checks if month is equal to the current month
        else if (month == thisMonth) {
            monthR.dataset.count = 0;
            document.querySelector(".invalid__string__whole").style.display = "none";//Removes error messages after form submission is correct
            //Checks if day is between 1 and 31
            if (day > totalDays || day <= 0) {
                document.querySelector(".invalid__string__whole").style.display = "block";
                for (var i = 0; i < 3; i++) {
                document.querySelectorAll("label")[i].classList.add("empty__string-label");
                document.querySelectorAll("input")[i].classList.add("empty__string-input");
                }
                refresh();
            }
            // Checks if day is in the future
            else if (day > thisDay) {
                document.querySelector(".invalid__string__whole").style.display = "block";
                for (var i = 0; i < 3; i++) {
                document.querySelectorAll("label")[i].classList.add("empty__string-label");
                document.querySelectorAll("input")[i].classList.add("empty__string-input");
                }
                refresh();
            } 
            //checks if day is in the past
            else if (day < thisDay) {
                dayR.dataset.count = resultDay;
                updateDisplay();
                // console.log(dayR.dataset);
            } else {
                dayR.dataset.count = 0;
                updateDisplay();
            }
        }
        //checks if month is in the past
        else if (month < thisMonth) {
            document.querySelector(".invalid__string__whole").style.display = "none";// removes error message after correct submission
            //Checks if day is between 1 and 31
            if (day > totalDays || day <= 0) {
                document.querySelector(".invalid__string__whole").style.display = "block";
                for (var i = 0; i < 3; i++) {
                document.querySelectorAll("label")[i].classList.add("empty__string-label");
                document.querySelectorAll("input")[i].classList.add("empty__string-input");
                }
            }
             //checks if day is in the future
            else if (day > thisDay) {
                dayR.dataset.count = beforeRDay0;
                monthR.dataset.count = (resultMonth) - 1;
                updateDisplay();
            }
            //checks if day is in the past
            else if (day < thisDay) {
                if (beforeRDay0 >= 30) {
                    dayR.dataset.count = (beforeRDay0) - 30;
                    monthR.dataset.count = (resultMonth) + 1;
                    updateDisplay();
                } else {
                    monthR.dataset.count = (resultMonth) - 1;
                    dayR.dataset.count = beforeRDay0;
                    updateDisplay();
                }
           }
           else {
                monthR.dataset.count = resultMonth;
                dayR.dataset.count = 0;
                updateDisplay();
           }
        }
        // Checks if month is in the future
        else {
            if (day > totalDays || day <= 0) {
                document.querySelector(".invalid__string__whole").style.display = "block";
            }
            for (var i = 0; i < 3; i++) {
                document.querySelectorAll("label")[i].classList.add("empty__string-label");
                document.querySelectorAll("input")[i].classList.add("empty__string-input");
            }
            document.querySelector(".invalid__string__year").style.display = "block";
            refresh();
        }

    }
    
    //checks if year is in the past
    else if (year < thisYear) {
        // Removes error messages after form is entered correctly
        for (var i = 0; i < 3; i++) {
            document.querySelectorAll(".empty__string__text")[i].style.display = "none";
            document.querySelectorAll("label")[i].classList.remove("empty__string-label");
            document.querySelectorAll("input")[i].classList.remove("empty__string-input");
        }
        document.querySelector(".invalid__string__day").style.display = "none";
        document.querySelector(".invalid__string__month").style.display = "none";
        document.querySelector(".invalid__string__year").style.display = "none";
        //Checks if month number is between 1 and 12
        if (month > totalMonths || month <= 0) {
            // Checks if day is between 1 and 31
            if (day > totalDays || day <= 0) {
                document.querySelector(".invalid__string__whole").style.display = "block";
            }
            for (var i = 0; i < 3; i++) {
                document.querySelectorAll("label")[i].classList.add("empty__string-label");
                document.querySelectorAll("input")[i].classList.add("empty__string-input");
            }
            document.querySelector(".invalid__string__month").style.display = "block";
            refresh();
        }

        // Checks if month is equal to the current month
        else if (month == thisMonth) {
            // checks if day is between 1 and 31
            if (day > totalDays || day <= 0) {
                document.querySelector(".invalid__string__whole").style.display = "block";
                for (var i = 0; i < 3; i++) {
                document.querySelectorAll("label")[i].classList.add("empty__string-label");
                document.querySelectorAll("input")[i].classList.add("empty__string-input");
                }
                refresh();
            }
            else if (day > thisDay) {
                document.querySelector(".invalid__string__whole").style.display = "none";
                yearR.dataset.count = (resultYear) - 1;
                monthR.dataset.count = (totalMonths) - 1;
                let resultDayR = day - thisDay;
                if (resultDayR = 1) {
                    dayR.dataset.count = resultDayR + 1;
                }
                else {
                    dayR.dataset.count = resultDayR;
                }
                updateDisplay();
            } 
            else if (day < thisDay) {
                document.querySelector(".invalid__string__whole").style.display = "none";
                yearR.dataset.count = resultYear;
                monthR.dataset.count = 0;
                dayR.dataset.count = resultDay;
                updateDisplay();
            } else {
                document.querySelector(".invalid__string__whole").style.display = "none";
                yearR.dataset.count = resultYear;
                monthR.dataset.count = 0;
                dayR.dataset.count = 0;
                updateDisplay();
            }
        }
        // Checks if month is in the past
        else if (month < thisMonth) {
            if (day > totalDays || day <= 0) {
                document.querySelector(".invalid__string__whole").style.display = "block";
                for (var i = 0; i < 3; i++) {
                document.querySelectorAll("label")[i].classList.add("empty__string-label");
                document.querySelectorAll("input")[i].classList.add("empty__string-input");
                }
                refresh();
            }
            else if (day > thisDay) {
                document.querySelector(".invalid__string__whole").style.display = "none";
                yearR.dataset.count = resultYear;
                if (beforeRDay0 >= 30) {
                  monthR.dataset.count = (resultMonth) + 1;  
                  dayR.dataset.count = (beforeRDay0) - 30;
                } else {
                    monthR.dataset.count = (resultMonth) - 1;  
                    dayR.dataset.count = beforeRDay0;
                }
                updateDisplay();
            }
            else if (day < thisDay) {
                document.querySelector(".invalid__string__whole").style.display = "none";
                yearR.dataset.count = resultYear;
                monthR.dataset.count = resultMonth;
                dayR.dataset.count = resultDay;
                updateDisplay();
            } else {
                document.querySelector(".invalid__string__whole").style.display = "none";
                yearR.dataset.count = resultYear;
                monthR.dataset.count = resultMonth;
                dayR.dataset.count = 0;
                updateDisplay();
            }
        } 
        //checks if month is in the future
        else {
            if (day > totalDays || day <= 0) {
                document.querySelector(".invalid__string__whole").style.display = "block";
                for (var i = 0; i < 3; i++) {
                document.querySelectorAll("label")[i].classList.add("empty__string-label");
                document.querySelectorAll("input")[i].classList.add("empty__string-input");
                }
                refresh();
            }
            else if (day > thisDay) {
                document.querySelector(".invalid__string__whole").style.display = "none";
                yearR.dataset.count = (resultYear) - 1;
                monthR.dataset.count = (totalMonths - month) + (thisMonth - 1);
                dayR.dataset.count = beforeRDay0;
                updateDisplay();
            }
            else if (day < thisDay) {
                document.querySelector(".invalid__string__whole").style.display = "none";
                yearR.dataset.count = (resultYear) - 1;
                monthR.dataset.count = (totalMonths - month) + thisMonth;
                dayR.dataset.count = resultDay;
                updateDisplay();
            } else {
                document.querySelector(".invalid__string__whole").style.display = "none";
                yearR.dataset.count = (resultYear) - 1;
                monthR.dataset.count = (totalMonths - month) + thisMonth;
                dayR.dataset.count = 0;
                updateDisplay();
            }
        }
    } 
    
    //Checks if year is in the future
    else {
        if (month > totalMonths || month <= 0) {
            if (day > totalDays || day <= 0) {
                document.querySelector(".invalid__string__day").style.display = "block";
            }
            document.querySelector(".invalid__string__month").style.display = "block";
        }
        for (var i = 0; i < 3; i++) {
            document.querySelectorAll("label")[i].classList.add("empty__string-label");
            document.querySelectorAll("input")[i].classList.add("empty__string-input");
            document.querySelectorAll(".empty__string__text")[i].style.display = "none";
        }
        document.querySelector(".invalid__string__year").style.display = "block";
        refresh();

        
    }

    function updateDisplay() {
        const counters = document.querySelectorAll(".counter");
        counters.forEach(function(counter) {
            let initial_count = -1;
            const final_count = counter.dataset.count;
    
            const counting = setInterval(updateCounting, 40);
    
            function updateCounting() {
                initial_count++;
    
                counter.innerText = initial_count;
    
                if (initial_count == final_count) {
                    clearInterval(counting);
                }
            }
        });
    }
    
    // refresh function
    function refresh() {
        const yearR = document.querySelector(".yearResult");
        const monthR = document.querySelector(".monthResult");
        const dayR = document.querySelector(".daysResult");
    
        yearR.innerText = "- -";
        monthR.innerText = "- -";
        dayR.innerText = "- -";
    
}





}







