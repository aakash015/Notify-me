
showNotes();

// When users presses that Add Notes button we add the notes to the Local Storage 

document.getElementById("addBtn").addEventListener("click", function () {

    let addTxt = document.getElementById("addTxt");

    let notes = localStorage.getItem('note');

    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }

    if(addTxt.value!="")
    {
    notesobj.push(addTxt.value);

    addTxt.value = "";

    localStorage.setItem("note", JSON.stringify(notesobj));

    showNotes();
    }
    else
    alert("Blank Notes are not allowed ");
});


function showNotes() {
    let notes = localStorage.getItem('note');

    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }

    let html = "";
    notesobj.forEach(function (element, index) {
        html = html + `<div class="notecard my-2 mx-2" style="width : 18rem" >
        <div class="card-body" style = "background-color:white">
        <h5 class="card-title">Note${index + 1}</h5>
        <p class="card-text">${element}</p>
        <button type="button" id=${index} onclick="deleteNote(this.id)" class = "btn-primary">Delete Note </button>
        </div>
        </div>`
    });

    let mynote = document.getElementById('myNote')
    if (notesobj.length == 0)
        mynote.innerHTML = `<h4 style = "color : white" >Sorry!!!!<br> No notes here , please enter some notes<h4>`;
    else
        mynote.innerHTML = html;


}


//function to delete a node 

function deleteNote(index)
{
   
    let notes = localStorage.getItem('note');

    if (notes == null) 
    {
        notesobj = [];
    }
    else 
    {
        notesobj = JSON.parse(notes);
    }
    
    notesobj.splice(index,1);

    localStorage.setItem('note',JSON.stringify(notesobj));

    showNotes();
   
}



let mysearch = document.getElementById("searchTxt");

mysearch.addEventListener("input",function(){
   
   let mynotes = document.getElementsByClassName("notecard");
  let text;
  let textForSearch = mysearch.value;
   Array.from(mynotes).forEach(function(element){
        console.log(element);
       text = element.getElementsByTagName("p")[0].innerText;

       if(text.toLowerCase().includes(textForSearch.toLowerCase()))
       {
        element.style.display = "block";
       }
       else
       {
        element.style.display = "none";
       }   
   })


})