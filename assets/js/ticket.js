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
