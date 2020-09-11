// let val;

// val = document;
// val = document.all;
// val = document.all[0];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.contentType;
// val = document.all[0];


// // val = document.forms;
// // val = document.forms[0].id;
// // val = document.forms[0].action;
// // val = document.forms[0].method;


// // val = document.links;
// // val = document.links[0];
// // val = document.links[0].id;
// // val = document.links[0].className;
// // val = document.links[0].classList[0];

// val = document.images;
// val = document.scripts[0].getAttribute('src');

// let scripts = document.scripts;
// let arrayScript = Array.from(scripts);
// arrayScript.forEach(function (s) {
//     console.log(s);
// })


// val = document.title;
// val = "sunny"

// console.log(val);



let title = document.getElementById("title");

title.style.margin = "20px";
title.style.padding = "24px";
title.style.color = "white";
title.style.background = "green";
title.style.textAlign = "center";
title.style.display = "initial";


// console.log(document.getElementById("title").id);

// console.log(document.getElementById("title").className);
// console.log(document.getElementById("title").innerText);


let button = document.getElementById("click");
let input = document.getElementById('input');

button.addEventListener('click', function (e) {

e.preventDefault(); 

    title.innerText = "SUNNY GO AND BUY YEARN.FINNANCE";
    title.style.margin = "20px";
    title.style.padding = "24px";
    title.style.color = "white";
    title.style.background = "blue";
    title.style.textAlign = "center";
    title.style.display = "initial";




});


input.addEventListener('keyup', (e)=>{
e.preventDefault();

title.innerText = e.target.value;


})