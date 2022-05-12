//onblur and onfocus handlers
function focusBorder(formEle) {
    var x = formEle.value;
    if (x != "") {
        formEle.style.border = "solid green";
    }
    else {}
}
function blurBorder(formEle) {
    var x = formEle.value;
    if (x == "") {
        formEle.style.border = "solid red";
    }
    else {}
}

//date validation. function to see if someone already reserved the book at an overlapping date will be added on the final project :)

function checkDate() {
    var currentDate = new Date();
    var givenStartDate = document.getElementById("start_date").value;
    var givenEndDate = document.getElementById("end_date").value;
    var startDate = new Date(givenStartDate); //sets format do dd-mm-yy to match with currentDate
    var endDate = new Date(givenEndDate);

    if (startDate > currentDate) {
        if (startDate < endDate) {
            if ((endDate.getDate() - startDate.getDate()) <= 7) {
                alert("The book you have requested is available. You can now click Submit Entries to proceed.")
            }
            else {
                alert("Borrowing periods have a maximum of seven days. Please enter another ending date.");
                document.getElementById("end_date").value = "";
            }
        }
        else {
            alert("Please ensure that your ending date is later than your starting date.");
            document.getElementById("end_date").value = "";
        }
    }
    else {
        alert("Please enter a start dater later than today's date.");
        document.getElementById("start_date").value = "";
    }
}

//store inputs in local storage

//check the number of book and date selections made
//check if there are submitted inputs that were saved
let bookDateReserve = localStorage.getItem("bookDateReserve");

if (bookDateReserve) {
    bookDateReserve = parseInt(bookDateReserve) + 1;
}
else {
    bookDateReserve  = "1";
    localStorage.setItem("bookDateReserve", bookDateReserve);
}

let bookDate = document.forms[0];

//acts as the handler onsubmit. will save the data in local storage then proceed to the next page
bookDate.addEventListener("submit", function(event) {
    event.preventDefault();
    if (confirm('Proceed to Reservation Form?')) {
        //stores the entries to the local storage, see line 85 for the actual function
        saveBookDate();
        //submits the form and opens the reserve.html
        bookDate.submit();
    }
});

bookDate.addEventListener("reset", function(event) {
    if (confirm('Delete Entries?')) {
        //deletes all entries in the form. acts as onreset
        bookDate.reset();
    }
    else {
        event.preventDefault();
    }
});

//reads all entered inputs from the form and places them in bookDateData
function saveBookDate() {
    //determine which book the user selected
    let bookRadio = document.getElementsByName('book');
    let bookTitle = bookRadio[0].value;

    if (bookRadio[1].checked) {
        bookTitle = bookRadio[1].value;
    }
    else if (bookRadio[2].checked) {
        bookTitle = bookRadio[2].value;
    }
    else if (bookRadio[3].checked) {
        bookTitle = bookRadio[3].value;
    }
    else if (bookRadio[4].checked) {
        bookTitle = bookRadio[4].value;
    }
    else if (bookRadio[5].checked) {
        bookTitle = bookRadio[5].value;
    }
    else if (bookRadio[6].checked) {
        bookTitle = bookRadio[6].value;
    }
    else if (bookRadio[6].checked) {
        bookTitle = bookRadio[6].value;
    }
    else if (bookRadio[7].checked) {
        bookTitle = bookRadio[7].value;
    }
    else if (bookRadio[8].checked) {
        bookTitle = bookRadio[8].value;
    }
    else if (bookRadio[9].checked) {
        bookTitle = bookRadio[9].value;
    }

    //saves all the inputs in object bookDateData using the var bookTitle and values from inputs of specified ids
    bookDateData = {
        book_title: bookTitle,
        sDate: start_date.value,
        eDate: end_date.value
    }

    //converts object to string
    let bookDateString = JSON.stringify(bookDateData);

    //saves string in local storage
    //keyBookDate will serve as our access key in local storage to get user inputs
    let keyBookDate = "bookDateData"+bookDateReserve;
    localStorage.setItem(keyBookDate, bookDateString);

    //saves total number of entries
    localStorage.setItem("bookDateReserve", bookDateReserve);
}
