let val;

val = document;
val = document.all;
val = document.all[0];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.contentType;
val = document.all[0];


// val = document.forms;
// val = document.forms[0].id;
// val = document.forms[0].action;
// val = document.forms[0].method;


// val = document.links;
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].className;
// val = document.links[0].classList[0];

val = document.images;
val = document.scripts[0].getAttribute('src');

let scripts = document.scripts;
let arrayScript = Array.from(scripts);
arrayScript.forEach(function (s) {
    console.log(s);
})


val = document.title;
val = "sunny"

console.log(val);