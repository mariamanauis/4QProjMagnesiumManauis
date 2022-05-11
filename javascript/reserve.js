//output book and dates from availability.html 
let bookDateReserve = localStorage.getItem("bookDateReserve");

if (bookDateReserve) {
    keyBookDate = "bookDateData" + bookDateReserve;
    let bookDateString = localStorage.getItem(keyBookDate);
    let bookDateObj = JSON.parse(bookDateString);

    result_book.innerHTML = bookDateObj.book_title;
    result_sdate.innerHTML = bookDateObj.sDate;
    result_edate.innerHTML = bookDateObj.eDate;
}
else {
    alert("No response has been submitted.");
}

prev.addEventListener("click", function() {
    window.open("availability.html","_self")
});

//storing the form inputs to local storage

let contactInfo = localStorage.getItem("contactInfo");

if (contactInfo) {
    contactInfo = parseInt(contactInfo) + 1;
}
else {
    contactInfo = "1";
    localStorage.setItem("contactInfo", contactInfo);
}

let reserveForm = document.forms[0];

reserveForm.addEventListener("submit", function(event) {
    event.preventDefault();
    if (confirm('Proceed to submit?')) {
        saveContactInfo();
        reserveForm.submit();
    }
});

reserveForm.addEventListener("reset", function(event) {
    if (confirm('Delete Entries?')) {
        reserveForm.reset();
    }
    else {
        event.preventDefault();
    }
});

function saveContactInfo() {
    let modeofDelivery = document.getElementsByName('mode_delivery');
    let deliveryMode = modeofDelivery[0].value;

    if (modeofDelivery[1].checked) {
        deliveryMode = modeofDelivery[1].value;
    }
    else {
        deliveryMode = modeofDelivery[0].value;
    }

    contactInfoData = {
        fullname: fullname.value,
        email: email.value,
        phoneNumber: phone_number.value,
        deliMode: deliveryMode,
        deliAddress: deliveryAddress.value,
        requests: requests.value
    }

    let contactInfoString = JSON.stringify(contactInfoData);

    let keyContactInfo = "contactInfoData" + contactInfo;
    localStorage.setItem( keyContactInfo, contactInfoString);
    localStorage.setItem( "contactInfo", contactInfo);

}