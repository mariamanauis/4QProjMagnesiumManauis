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

//output contact info from reserve.html

//read data from stored in contactInfoData
let contactInfo = localStorage.getItem("contactInfo");

if (contactInfo) { //check if data from reserve.html was stored in local storage
    //read contact data using access key
    keyContactInfo = "contactInfoData" + contactInfo;
    let contactInfoString = localStorage.getItem(keyContactInfo);
    //convert the string into an object to get individual data
    let contactInfoObj = JSON.parse(contactInfoString);

    //display each of user's input from the object contactInfoObj
    result_name.innerHTML = contactInfoObj.fullname;
    result_email.innerHTML = contactInfoObj.email;
    result_phone.innerHTML = contactInfoObj.phoneNumber;
    result_deli.innerHTML = contactInfoObj.deliMode;
    result_address.innerHTML = contactInfoObj.deliAddress;
    result_requests.innerHTML = contactInfoObj.requests;
}

//go back to reserve.html. acts as onclick
goBack.addEventListener("click", function(){
    window.open("reserve.html","_self")
});