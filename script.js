//issikviesti elementus, i kintamuosius
const subject = document.getElementById("subject");
const priority = document.getElementById("priority");
const duedate = document.getElementById("duedate");
const status = document.getElementById("status");
const percentcompl = document.getElementById("percentcompl");
const modifydate = document.getElementById("modifydate");
const addtask = document.getElementById("addtask");
const table = document.getElementById("table");
const remove = document.getElementsByClassName("remove");
//prideda taska
addtask.addEventListener("click", submitt);
//panaikina
for (let i = 0; i < remove.length; i++) {
    remove[i].addEventListener('click', removed, false);
}

function removed() {
  this.parentNode.parentNode.removeChild(this.parentNode);
}

function submitt(){
  if ((subject.value) &&(duedate.value)&& (percentcompl)){
  const row = document.createElement("tr");
  table.appendChild(row);

  const subtype = document.createElement("td");
  subtype.innerText=":(";

  const subsub = document.createElement("td");
  subsub.innerText=subject.value;

  const subprio = document.createElement("td");
  subprio.innerText=priority.value;

  const subddate = document.createElement("td");
  subddate.innerText=duedate.value;

  const substatus = document.createElement("td");
  substatus.innerText=status.value;

  const subpercent = document.createElement("td");
  subpercent.className="item";

  const progber = document.createElement("div");
  progber.className="progress";
  
  progber.innerHTML="<div class='progress-bar progress-bar-striped bg-danger' role='progressbar' style='width:"+ percentcompl.value +"%' aria-valuenow='100' aria-valuemin='0' aria-valuemax='100'>"+ percentcompl.value + "%</div>";
  // data, ir taip aisku
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  let yy = today.getFullYear();
  today = mm + '-' + dd + '-' + yy;
  //prideda prie row viska
  const subctime = document.createElement("td");
  subctime.innerText=today;
  const subremove = document.createElement("td");
  subremove.innerText="REMOVE";
  let Colors=priority.value;
  
  if(Colors==="High"){
    Colors.innerHTML="<td class='item text-center border rounded-pill bg-danger>"+Colors+"</td>"
  }
  else if (Colors==="Medium"){
    Colors.innerHTML="<td class='item text-center border rounded-pill bg-success>"+Colors+"</td>"
    
  }
  else if (Colors==="Low"){
    Colors.innerHTML="<td class='item text-center border rounded-pill bg-primary>"+Colors+"</td>"
  }
  row.appendChild(subtype).className = "item";
  row.appendChild(subsub).className = "item";
  row.appendChild(subprio).className = "item";
  row.appendChild(subddate).className = "item";
  row.appendChild(substatus).className = "item";
  row.appendChild(subpercent);
  subpercent.appendChild(progber);
  row.appendChild(subctime).className = "item";
  row.appendChild(subremove).className = "item remove removeblock btn btn-danger";

//tiesa sakant nezinau kodel antra karta sitas yra
  for (let i = 0; i < remove.length; i++) {
    remove[i].addEventListener('click', removed, false);
}
}
}