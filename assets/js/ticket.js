

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


function loadTickets(){


let table =
document.getElementById("ticketTable");


if(!table)
return;



let tickets =
JSON.parse(
localStorage.getItem("tickets")
) || [];



table.innerHTML="";



tickets.forEach(t=>{


table.innerHTML += `


<tr>


<td>${t.id}</td>


<td>${t.date}</td>


<td>${t.customer}</td>


<td>${t.device}</td>


<td>${t.category}</td>


<td>${t.priority}</td>


<td>


<select 
onchange="updateStatus('${t.id}',this.value)"
class="form-control">


<option ${t.status=="New"?"selected":""}>
New
</option>


<option ${t.status=="In Progress"?"selected":""}>
In Progress
</option>


<option ${t.status=="Pending"?"selected":""}>
Pending
</option>


<option ${t.status=="Completed"?"selected":""}>
Completed
</option>


</select>


</td>


<td>


<button
class="btn btn-warning btn-sm"
onclick="editTicket('${t.id}')">

Edit

</button>



<button
class="btn btn-danger btn-sm"
onclick="deleteTicket('${t.id}')">

Delete

</button>



</td>


</tr>


`;


});


}



loadTickets();



function deleteTicket(id){


let tickets =
JSON.parse(
localStorage.getItem("tickets")
);



tickets =
tickets.filter(
x=>x.id != id
);



localStorage.setItem(
"tickets",
JSON.stringify(tickets)
);



location.reload();


}


function updateStatus(id,status){


let tickets =
JSON.parse(
localStorage.getItem("tickets")
);



let ticket =
tickets.find(
x=>x.id==id
);



ticket.status=status;



localStorage.setItem(
"tickets",
JSON.stringify(tickets)
);


alert("Status Updated");


}


document
.getElementById("search")
?.addEventListener(
"keyup",
function(){


let value =
this.value.toLowerCase();



let rows =
document.querySelectorAll(
"#ticketTable tr"
);



rows.forEach(row=>{


row.style.display =
row.innerText
.toLowerCase()
.includes(value)
?
""
:
"none";


});


});




