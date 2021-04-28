let inputBox = document.querySelector(".input_box");
console.log("Before");
//async code
console.log("ip val",inputBox.value);
inputBox.addEventsListener("keypress",function(e){
    console.log("key press was called");
    if(e.code=="Enter"){
        console.log(inputBox.value);
      let task =  document.createElement("li");
      //attribute
      taskElem.setAttribute("class","task");
      taskElem.innerText=task;
      taskList.appendChild(taskElem);
      inputBox.value="";
      //element features
      taskElem.addEventListener("dbclick",function(){
takElem.remove();
      })
    }
})

console.log("after");