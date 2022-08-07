var selectedRow=null;
//cliquer sur submit
document.getElementById("submit").addEventListener("click",Ajout);
function Ajout(event){
    event.preventDefault();
    var form1=GetData();
    if(selectedRow==null){
        Insert(form1);
    }else{
        Update1();
    }
   
    reset();
   
}





//read data from the form
function GetData(){
   var form1={};
    form1["nom"]=document.getElementById("nom").value;
    form1["email"]=document.getElementById("email").value;
    form1["tel"]=document.getElementById("tel").value;
    form1["ref"]=document.getElementById("ref").value;
    return form1;
}

//insert data into table
function Insert(x){
    var table=document.getElementById("storelist").getElementsByTagName("tbody")[0];
    var newRow=table.insertRow(table.length);
    var cell1=newRow.insertCell(0);
    cell1.innerHTML=x.nom;
    var cell2=newRow.insertCell(1);
    cell2.innerHTML=x.email;
    var cell3=newRow.insertCell(2);
    cell3.innerHTML=x.tel;
    var cell4=newRow.insertCell(3);
    cell4.innerHTML=x.ref;
    var cell5=newRow.insertCell(4);
    cell5.innerHTML=`<i class="fa-solid fa-square-xmark" onclick="supp(this)"></i>
    <i class="fa-solid fa-pencil" onclick="Edit1(this)"></i>`

}

//remove data
function supp(element1){
    element1.parentElement.parentElement.remove();

}

//reset data

function reset(){
    document.getElementById("nom").value="";
    document.getElementById("email").value="";
    document.getElementById("tel").value="";
    document.getElementById("ref").value="";
}



//edit data

function Edit1(element){

   selectedRow=element.parentElement.parentElement;
    //console.log(selectedRow);
    document.getElementById("nom").value=selectedRow.cells[0].innerHTML;
    document.getElementById("email").value=selectedRow.cells[1].innerHTML;
    document.getElementById("tel").value=selectedRow.cells[2].innerHTML;
    document.getElementById("ref").value=selectedRow.cells[3].innerHTML;
}


//update data

function Update1(){
    
    selectedRow.cells[0].innerHTML=document.getElementById("nom").value;
    selectedRow.cells[1].innerHTML=document.getElementById("email").value;
    selectedRow.cells[2].innerHTML=document.getElementById("tel").value;
    selectedRow.cells[3].innerHTML=document.getElementById("ref").value;

}