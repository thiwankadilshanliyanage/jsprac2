// Select Update DOM Element

// Examine the document object

console.dir(document);

//get properties
console.log(document.URL);
console.log(document.charset);
console.log(document.lastModified);
console.log(document.title);
console.log(document.doctype);

console.log(document.head);
console.log(document.body);

console.log(document.all);

console.log(document.forms[0]);
console.log(document.links);
console.log(document.images);

//--Change Values--
console.log(document.title);
document.title = "Document Object Model";
console.log(document.title);

console.log(document.all[11]);
document.all[11].textContent = "Shopping Item List";
console.log(document.all[11]);


//select elements using ID
console.log(document.getElementById('frmt'));