let bookDateReserve = localStorage.getItem("bookDateReserve");

if (bookDateReserve) {
    bookDateReserve = parseInt(bookDateReserve) + 1;
}
else {
    bookDateReserve  = "1";
    localStorage.setItem("bookDateReserve", bookDateReserve);
}

let bookDate = document.forms[0]

bookDate.addEventListener("submit", function(event) {
    event.preventDefault();
    if (confirm('Proceed to submit?')) {
        saveBookDate();
        bookDate.submit();
    }
});

bookDate.addEventListener("reset", function(event) {
    if (confirm('Delete Entries?')) {
        bookDate.reset();
    }
    else {
        event.preventDefault();
    }
});

function saveBookDate() {
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

    bookDateData = {
        book_title: bookTitle,
        sDate: start_date.value,
        eDate: end_date.value
    }

    let bookDateString = JSON.stringify(bookDateData);

    let keyBookDate = "bookDateData"+bookDateReserve;
    localStorage.setItem(keyBookDate, bookDateString);
    localStorage.setItem("bookDateReserve", bookDateReserve);
}