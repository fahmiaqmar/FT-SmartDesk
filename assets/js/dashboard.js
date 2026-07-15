let tickets =
JSON.parse(localStorage.getItem("tickets")) || [];


document.getElementById("total").innerHTML =
tickets.length;


document.getElementById("pending").innerHTML =
tickets.filter(
x=>x.status=="Pending"
).length;


document.getElementById("completed").innerHTML =
tickets.filter(
x=>x.status=="Completed"
).length;
