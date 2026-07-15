
let form =
document.getElementById("ticketForm");



if(form){


form.addEventListener(
"submit",
function(e){


e.preventDefault();



let tickets =
JSON.parse(
localStorage.getItem("tickets")
) || [];



let number =
tickets.length + 1;



let ticketID =
"FT-2026-" +
String(number).padStart(5,"0");



let ticket = {


id:ticketID,

customer:
document.getElementById("customer").value,


company:
document.getElementById("company").value,


device:
document.getElementById("device").value,


category:
document.getElementById("category").value,


priority:
document.getElementById("priority").value,


problem:
document.getElementById("problem").value,


technician:
document.getElementById("technician").value,


status:
"New",


date:
new Date().toLocaleDateString()



};



tickets.push(ticket);



localStorage.setItem(
"tickets",
JSON.stringify(tickets)
);



alert(
"Ticket berjaya disimpan\n" 
+ ticketID
);



window.location=
"tickets.html";



});


}
