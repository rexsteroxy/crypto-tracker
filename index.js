(function () {


    // geting the table body
    let tableBody = document.getElementById('table-body');
    let form = document.querySelector('form');
    let cryptoName = document.getElementById('nametxt');
    let cryptoAmount = document.getElementById('amt');
    let transactionDate = document.getElementById('dt');

    // let displayRegulator = document.getElementById('submit-button');








    form.addEventListener('submit', addCrypyto);

    function addCrypyto(e) {
        e.preventDefault();

        if (cryptoName.value == '') {

            alert("input all fields");

        } else if (cryptoAmount.value == '') {
            alert("input all fields");

        } else if (transactionDate.value == '') {
            alert("input all fields");

        } else {



            let tableRow = document.createElement('tr');
            tableRow.id = 'table-row';
            let tableData1 = document.createElement('td');
            let tableData2 = document.createElement('td');
            let tableData3 = document.createElement('td');
            tableData1.innerText = cryptoName.value;
            tableData2.innerText = cryptoAmount.value;
            tableData3.innerText = transactionDate.value;
            tableRow.appendChild(tableData1);
            tableRow.appendChild(tableData2);
            tableRow.appendChild(tableData3);
            tableBody.appendChild(tableRow);

        }



    }





    // get the button elements
    let prev = document.getElementById('prev');
    let next = document.getElementById('next');







    // get the card body element
    let card = document.getElementById('bg-card-body');


    // get and store images in an arrray

    let images = [
        "url(./img/bitcoin3.jpg)",
        "url(./img/bitcoin4.jpg)",
        "url(./img/crypto.jpg)",
        "url(./img/ethereum.jpg)"
    ]

    // to check mate the image value in the above array
    let count = 0;


    // animation with timeout

    setInterval(function () {

        if (images.length - 1 == count) {
            if (count <= 0) {
                count += 1;
                card.style.backgroundImage = images[count];
            } else {
                count = 0;
                card.style.backgroundImage = images[count];

            }
        } else {
            count += 1;
            card.style.backgroundImage = images[count];
        }
    }, 3500)



    // add even listener to the selected buttons

    prev.addEventListener("click", previouspage);

    next.addEventListener('click', nextpage);



    // function for previous page

    function previouspage(e) {
        e.preventDefault();

        if (count <= 0) {
            alert("please click next button")
        } else {
            count -= 1;
            card.style.backgroundImage = images[count];

        }



    }

    //function for next page

    function nextpage(e) {
        e.preventDefault();

        if (images.length - 1 == count) {
            alert("No more images to view")
        } else {
            count += 1;
            card.style.backgroundImage = images[count];
        }



    }


}());