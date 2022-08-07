
//cliquer sur le  button ajouter
document.getElementById("entry1").addEventListener("click",function(e){
   e.preventDefault();
    document.querySelector(".bg-modal").style.display='flex';
   
})

const nom=document.getElementById("nom");
const marque=document.getElementById("marque");
const modele=document.getElementById("modele");
const version=document.getElementById("version");
const ref=document.getElementById("ref");


 

var selectedRow=null;

//cliquer sur submit
document.getElementById("entry").addEventListener("click",AjoutData);

function AjoutData(e){
 e.preventDefault();
 var formData=readData();
 
      
       insertdata(formData);
       reset();  
        
    
   
    document.getElementById("entryUp").addEventListener("click",update);
  
}







function insertdata(formData){
    
    var tr=document.createElement('tr');
    var td1=tr.appendChild(document.createElement('td'));
    var td2=tr.appendChild(document.createElement('td'));
    var td3=tr.appendChild(document.createElement('td'));
    var td4=tr.appendChild(document.createElement('td'));
    var td5=tr.appendChild(document.createElement('td'));
    var td6=tr.appendChild(document.createElement('td'));
    var td7=tr.appendChild(document.createElement('td'));
    var td8=tr.appendChild(document.createElement('td'));
    var td9=tr.appendChild(document.createElement('td'));

    td1.innerHTML=formData.Nom;
    td2.innerHTML=formData.Marque;
    td3.innerHTML=formData.Modele;
    td4.innerHTML=formData.Type;
    td5.innerHTML=formData.version;
    td6.innerHTML=formData.ref;
    td7.innerHTML=`<a><i class="fa-solid fa-circle-xmark"></i></a>
    <a><i class="fa-solid fa-circle-check"></i></a>`;
    td8.innerHTML=`<a> <i class="fas fa-edit"></i></a>`;
    td9.innerHTML=`<i class="fa-solid fa-trash-can" onclick="deleterow(this)"></i>
    <i class="fa-solid fa-pen-to-square" onclick="Edit(this)" ></i>`;
    
    var table=document.getElementById("storelist").getElementsByTagName("tbody")[0];
    
    table.appendChild(tr);
    
    
    for(var i=0;i<table.rows.length;i++){
      
        table.rows[i].cells[7].onclick=function(){
            
            document.querySelector(".modal1").style.display='flex';
        
            rIndex=this.parentElement.rowIndex;
            
        };
      
    } 
    

 
    document.querySelector(".bg-modal").style.display='none';
}

var ce=document.getElementById("ce");
var mdf=document.getElementById("mdf");
var cef=document.getElementById("cef");

 
//function update
function Edit(element){
    document.querySelector(".bg-modal1").style.display='flex';
   selectedRow=element.parentElement.parentElement;
   //console.log(selectedRow);
   document.getElementById("nom1").value=selectedRow.cells[0].innerHTML;
   document.getElementById("marque1").value=selectedRow.cells[1].innerHTML;
   document.getElementById("modele1").value=selectedRow.cells[2].innerHTML;

   var check1=document.getElementById("check1").getElementsByTagName("input");
    
    
     for(let i=0;i<=2;i++)
     {
         if(check1[i].value===selectedRow.cells[3].innerHTML)

            {
                check1[i].checked=true;
            }
     }
    document.getElementById("version1").value=selectedRow.cells[4].innerHTML;
    document.getElementById("ref1").value=selectedRow.cells[5].innerHTML;
   
}

// function update
function update(e){
    e.preventDefault();
    selectedRow.cells[0].innerHTML=document.getElementById("nom1").value;
    selectedRow.cells[1].innerHTML=document.getElementById("marque1").value;
    selectedRow.cells[2].innerHTML=document.getElementById("modele1").value;

    var check1=document.getElementById("check1").getElementsByTagName("input");
    
    
    for(let i=0;i<=2;i++)
    {
        if(check1[i].checked==true)

           {
            selectedRow.cells[3].innerHTML=check1[i].value;
               
           }
    }

    selectedRow.cells[4].innerHTML= document.getElementById("version1").value;
    selectedRow.cells[5].innerHTML=document.getElementById("ref1").value;

     document.querySelector(".bg-modal1").style.display='none';
}


// function delete
 function deleterow(element){
    
    element.parentElement.parentElement.remove();
 }

//fonction read data

function readData(){
    var formData={};
    
    //get value from the form
    formData["Nom"]=document.getElementById("nom").value;
    formData["Marque"]=document.getElementById("marque").value;
    formData["Modele"]=document.getElementById("modele").value;
    
    var check=document.getElementById("check").getElementsByTagName("input");
    
    
     for(let i=0;i<=2;i++)
     {
         if(check[i].checked===true)
         formData["Type"]=check[i].value;
     }
    
    
    
    formData["version"]=document.getElementById("version").value;
    formData["ref"]=document.getElementById("ref").value;
 
    return formData;
}


//choix valide ou invalide

const valide=document.getElementById("valid");
const invalide=document.getElementById("invalid");
const element4 = document.getElementById('entry2');
var rIndex; 

//localstorage
var DataArray1=[];



var element3=document.querySelector(".close1");

element3&&element4.addEventListener('click',function(){
    var table=document.getElementById("storelist").getElementsByTagName("tbody")[0];
    document.querySelector(".modal1").style.display='none';
            
            var formData1={};
            formData1["nom"]=table.rows[rIndex-1].cells[0].innerHTML;
            formData1["marque"]=table.rows[rIndex-1].cells[1].innerHTML;
            formData1["model"]=table.rows[rIndex-1].cells[2].innerHTML;
            formData1["type"]=table.rows[rIndex-1].cells[3].innerHTML;
            formData1["version"]=table.rows[rIndex-1].cells[4].innerHTML;
            formData1["ref"]=table.rows[rIndex-1].cells[5].innerHTML;

           
                 
            if(valide.checked){
                formData1["etat"]=valide.value;
               // console.log(formData1);
                 DataArray1.push(formData1);
               //  console.log(DataArray1); 
                 localStorage.setItem("Etat",JSON.stringify(DataArray1));
                
                document.querySelectorAll(".fa-circle-check")[rIndex-1].style.visibility='visible';
                document.querySelectorAll(".fa-circle-xmark")[rIndex-1].style.visibility='hidden';
            } 
          else if(invalide.checked){  
            formData1["etat"]=invalide.value;
           // console.log(formData1);
            DataArray1.push(formData1);
           // console.log(DataArray1); 
            localStorage.setItem("Etat",JSON.stringify(DataArray1));
           document.querySelectorAll(".fa-circle-check")[rIndex-1].style.visibility='hidden';
           document.querySelectorAll(".fa-circle-xmark")[rIndex-1].style.visibility='visible';
          }  
          
       invalide.checked=true;
       valide.checked=false; 
               
})

function reset(){
  
    document.getElementById("nom").value="";
    document.getElementById("marque").value="";
    document.getElementById("modele").value="";

    var check=document.getElementById("check").getElementsByTagName("input");
   
      
    for(let i=0;i<=2;i++)
    {
        if(check[i].checked===true)
        {
             check[i].checked=false;
           
        }
        
    }
    
    document.getElementById("version").value="";
    document.getElementById("ref").value="";
   


}




//cliquer sur close
document.querySelector(".close").addEventListener("click",function(){
    document.querySelector(".bg-modal").style.display='none';
})
//cliquer sur close1

element3.addEventListener("click",function(){
    document.querySelector(".modal1").style.display='none';
})


var close2=document.querySelector(".close2");
var upd=document.getElementById("entryUp");


//cliquer sur close2 et Update
close2&&upd.addEventListener("click",function(){
    document.querySelector(".bg-modal1").style.display='none';
})

close2.addEventListener("click",function(){
    document.querySelector(".bg-modal1").style.display='none';
})







