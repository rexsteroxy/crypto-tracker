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