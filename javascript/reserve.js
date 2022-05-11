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

//output book and dates from availability.html 

//read data from stored in bookDateData
let bookDateReserve = localStorage.getItem("bookDateReserve");

if (bookDateReserve) { //check if data from availability.html was stored in local storage
    //read book and date data using access key
    keyBookDate = "bookDateData" + bookDateReserve;
    let bookDateString = localStorage.getItem(keyBookDate);
    //convert the string into an object to get individual data
    let bookDateObj = JSON.parse(bookDateString);

    //display each of user's input from the object bookDateObj
    result_book.innerHTML = bookDateObj.book_title;
    result_sdate.innerHTML = bookDateObj.sDate;
    result_edate.innerHTML = bookDateObj.eDate;
}
else {
    alert("No response has been submitted.");
}

//go back to availability.html. acts as onclick 
prev.addEventListener("click", function() {
    window.open("availability.html","_self")
});

//storing the form inputs to local storage

//check the number of form reservations made
//check if there are submitted inputs that were saved
let contactInfo = localStorage.getItem("contactInfo");

if (contactInfo) {
    contactInfo = parseInt(contactInfo) + 1;
}
else {
    contactInfo = "1";
    localStorage.setItem("contactInfo", contactInfo);
}

let reserveForm = document.forms[0];

//acts as the handler onsubmit. will save the data in local storage then proceed to the next page
reserveForm.addEventListener("submit", function(event) {
    event.preventDefault();
    if (confirm('Submit Reservation Form?')) {
        //stores the entries to the local storage, see line 65 for the actual function
        saveContactInfo();
        //submits the form and opens the confirmation.html
        reserveForm.submit();
    }
});

reserveForm.addEventListener("reset", function(event) {
    if (confirm('Delete Form Entries?')) {
        //deletes all entries in the form. acts as onreset
        reserveForm.reset();
    }
    else {
        event.preventDefault();
    }
});

//reads all entered inputs from the form and places them in contactInfoData
function saveContactInfo() {
    //determine which mode of delivery the user selected
    let modeofDelivery = document.getElementsByName('mode_delivery');
    let deliveryMode = modeofDelivery[0].value;

    if (modeofDelivery[1].checked) {
        deliveryMode = modeofDelivery[1].value;
    }
    else {
        deliveryMode = modeofDelivery[0].value;
    }

    //saves all the inputs in object contactInfoData using the deliveryMode and values from inputs of specified ids
    contactInfoData = {
        fullname: fullname.value,
        email: email.value,
        phoneNumber: phone_number.value,
        deliMode: deliveryMode,
        deliAddress: deliveryAddress.value,
        requests: requests.value
    }

    //converts object to string
    let contactInfoString = JSON.stringify(contactInfoData);

    //saves string in local storage
    //keyContactInfo will serve as our access key in local storage to get user inputs
    let keyContactInfo = "contactInfoData" + contactInfo;
    localStorage.setItem( keyContactInfo, contactInfoString);

    //saves total number of entries
    localStorage.setItem( "contactInfo", contactInfo);

}