// const content = document;
// const form = content.querySelector('form');
// const nameOfcrypto = content.getElementById('nametxt');
// const amount = content.querySelector('#amt');
// const newDate = content.getElementById('date');

// const newCryptoName = content.getElementById('crypto-name');
// const newCryptAmount = content.getElementById('crypto-amount');
// const newCryptoDate = content.getElementById('dt');





// nameOfcrypto.value = '';
// amount.value = '';
// newDate.value = '';


// getting events from each input
// nameOfcrypto.addEventListener('keydown', runEvent);

// function runEvent(e) {
//     newCryptoName.innerText = e.target.value;
// }

// // getting for amount
// amount.addEventListener('keyup', amountEvent);

// function amountEvent(e) {
//     newCryptAmount.innerText = e.target.value;
// }


// Getting the user input from the form
// form.addEventListener('submit', onClicked);

// function onClicked(e) {
//     e.preventDefault();
//     const tableRow = content.createElement('tr');
//     const tabledata = content.createElement('td');
//     const input = tableRow.appendChild(tabledata);
//     input.innerText = nameOfcrypto.value;

//     document.getElementById('table-body').appendChild(input);
//     newCryptAmount.innerText = amount.value;
//     newCryptoName.innerText = input.innerText;
//     newCryptoDate.innerText = newDate.value;
// }

// creating new elements







const tableRow = document.createElement('tr');
for (let i = 1; i <= 5; i++) {
    tableData = document.createElement('td');

    tableRow.appendChild(tableData);
}

console.log(tableRow);

const form = document.querySelector('form');