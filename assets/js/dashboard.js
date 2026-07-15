<script src="assets/js/checklogin.js"></script>



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



new Chart(
document.getElementById("ticketChart"),
{

type:"bar",

data:{

labels:[
"Hardware",
"Software",
"Network",
"Device"
],

datasets:[{

label:"Ticket",

data:[5,8,3,10]

}]

}

});
