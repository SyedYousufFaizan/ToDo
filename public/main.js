var inpValue = document.getElementById('inputt').value.trim()
let btn = document.querySelector("#input-btn")

var addlist = ()=>{
    console.log(inpValue)
}





var nodeList = document.getElementsByTagName('LI');
var i;
 //this appends the 'x' close symble to the end of each list item 
for(i=0; i <nodeList.length;i++){
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = 'close';
    span.appendChild(txt);
    nodeList[i].appendChild(span)
}

//deleting the task on clicking the 'x' symble

var close = document.getElementsByClassName('close')
var i;
//checks for active event click on each item with the span close class name
for(i=0; i<close.length; i++){
    close[i].onclick = function(){
        var list = this.parentElement;
        
        list.style.display = 'none'
    }
}


//adding tasks
btn.addEventListener("click", function () {
    var inpValue = document.getElementById('inputt').value.trim();
    
    if (inpValue !== "") {
        var ulList = document.querySelector("#myUl");
            var nodeList = document.getElementsByTagName('LI');
            ulList.innerHTML += `<li class="listBorder">${inpValue} <button name="check-btn" id="check-btn" class="mr-2 hover:bg-white rounded-full "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          </button></li>`
           // adding the 'x' close icon on new added tasks
            document.getElementById('inputt').value = ""; // Clear input after adding task
            var span = document.createElement("SPAN");
            var txt = document.createTextNode("\u00D7");
            span.className = 'close';
            span.appendChild(txt);

            
            nodeList[nodeList.length-1].appendChild(span)
            console.log(nodeList[nodeList.length-1])
            //adding close task function on the new elements
            for(i=0; i<close.length; i++){
                close[i].onclick = function(){
                    var list = this.parentElement;
                    list.style.display = 'none'
                }
            }
            
            //checking for isChcked on each new element
            for(j=0;j<checkBtn.length; j++){
                // console.log(checkBtn[j].parentElement)
                 let listss = checkBtn[j] 
                 console.log(listss.parentElement)
                 listss.addEventListener("click", function(){
                    let areCompleted = listss.parentElement;
                    areCompleted.classList.add('completed')
                 })
             }
    
        } else if(inpValue === ""){
            alert('Add a task first you dumb idiot!')
        }
    });
           

//adding checked class on click
 var ullist = document.querySelector('#myUl')
  function isChecked(){
    nodeList.classList.add("completed")
 }

var checkBtn = document.getElementsByName("check-btn")
var j;

for(j=0;j<checkBtn.length; j++){
    let listss = checkBtn[j] 
    console.log(listss.parentElement)
    listss.addEventListener("click", function(){
       let areCompleted = listss.parentElement;
       areCompleted.classList.add('completed')
    })
}
  
