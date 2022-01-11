showtask();

let are = document.getElementById("are");
let add = document.getElementById("add");

add.addEventListener("click",function(){
  areval = are.value; 
  if(areval.trim()!=0){
  let ab = localStorage.getItem("localtask");
  if(ab == null){
      obj = [];
  }
  else{
      obj = JSON.parse(ab);
  } 
  obj.push(areval);
  localStorage.setItem("localtask", JSON.stringify(obj));   
  are.value='';
}
  showtask(); 

}) 

function showtask(){
    let ab = localStorage.getItem("localtask");
  if(ab == null){
      obj = [];
  }
  else{
      obj = JSON.parse(ab);
  }
  let html = ``;
  let adlist = document.getElementById("adlist");
  obj.forEach((item,index) => { 
      html += `<tr>
                    <th scope = "row">${index+1}</th>
                    <td class="ite" >${item}</td>
                    <td>
                    <button type="button" onclick = "editt(${index})"  class = "bt"><i class = "fa fa-edit"></i>EDIT</button></td> 
                    <td><button type="button" onclick = "delet(${index})"  class = "dlt"><i class = "fa fa-trash"></i>DELETE</button></td>   
                    </th>
                    </tr> `;
      
  });   
  adlist.innerHTML = html;
} 

function editt(index){ 
    let savei = document.getElementById("savei"); 
    let add = document.getElementById("add"); 
    let save = document.getElementById("save");
    savei.value= index;
    let ab = localStorage.getItem("localtask");
    let obj =JSON.parse(ab); 

    are.value = obj[index]; 
   add.style.display="none"; 
   save.style.display="inline";
  
} 
let save = document.getElementById("save"); 
save.addEventListener("click",function(){
    let add = document.getElementById("add"); 
    let ab = localStorage.getItem("localtask");
    let obj =JSON.parse(ab);  
    let savei = document.getElementById("savei").value;  
    obj[savei]=are.value; 
    save.style.display="none";
    add.style.display="inline"; 
    localStorage.setItem("localtask", JSON.stringify(obj));  
    showtask();

}) 
function delet(index){ 
    let ab = localStorage.getItem("localtask");
    let obj =JSON.parse(ab);  
    obj.splice(index,1);
    var newmu = new Audio('del.wav');
    newmu.play();
    localStorage.setItem("localtask", JSON.stringify(obj));  
    showtask();
}


let del = document.getElementById("del"); 
del.addEventListener("click", function(){  
    let save = document.getElementById("save");  
    let add = document.getElementById("add");  
    let ab = localStorage.getItem("localtask");
    let obj =JSON.parse(ab); 
    if(ab == null){
        obj = [];
    }
    else{
        obj = JSON.parse(ab);
        obj = [];
    } 
    save.style.display="none";
    add.style.display="inline"; 
    localStorage.setItem("localtask", JSON.stringify(obj));  
    showtask();
})
function addmusic(){
    var newsound = new Audio('musicdelete.wav');
    newsound.play();
    }
    function deletemusic(){
        var newmusic = new Audio('delete.mp3');
        newmusic.play();
        }   
    