let boxes=document.querySelectorAll(".btn");
let h1=document.querySelector("#h1");
let turnO=true;
console.log(boxes);
boxes.forEach((button)=>{
  button.addEventListener("click",()=>{
    if(turnO){
      button.innerText="X"
      button.style.backgroundColor = "yellow";
      button.disabled=true;
      turnO=false;
    }else{
      button.innerText="O";
      button.style.backgroundColor="red";
      button.disabled=true;
      turnO=true;
    }
    let x,y,z;
    if(boxes[x=0].innerText=="X" && boxes[y=1].innerText=="X" && boxes[z=2].innerText=="X" || boxes[x=0].innerText=="X" && boxes[y=3].innerText=="X" && boxes[z=6].innerText=="X" || boxes[x=0].innerText=="X" && boxes[y=4].innerText=="X" && boxes[z=8].innerText=="X" || boxes[x=3].innerText=="X" && boxes[y=4].innerText=="X" && boxes[z=5].innerText=="X" || boxes[x=6].innerText=="X" && boxes[y=7].innerText=="X" && boxes[z=8].innerText=="X" || boxes[x=1].innerText=="X" && boxes[y=4].innerText=="X" && boxes[z=7].innerText=="X" || boxes[x=2].innerText=="X" && boxes[y=5].innerText=="X" && boxes[z=8].innerText=="X" ||  boxes[x=2].innerText=="X" && boxes[y=4].innerText=="X" && boxes[z=6].innerText=="X" ){
      console.log("in X : x = ", x ," y =  ",y," z = ",z);
      boxes[x].style.backgroundColor="pink";
      boxes[y].style.backgroundColor="pink";
      boxes[z].style.backgroundColor="pink";
      var popup = document.querySelector("#popupContainer");
      document.querySelector("#poph2").innerText="Player X is the Winner";
      document.querySelector("#popp").innerText="You can  reset and play again";
      popup.style.display="block";
    }else if(boxes[x=0].innerText=="O" && boxes[y=1].innerText=="O" && boxes[z=2].innerText=="O" || boxes[x=0].innerText=="O" && boxes[y=3].innerText=="O" && boxes[z=6].innerText=="O" || boxes[x=0].innerText=="O" && boxes[y=4].innerText=="O" && boxes[z=8].innerText=="O" || boxes[x=3].innerText=="O" && boxes[y=4].innerText=="O" && boxes[z=5].innerText=="O" || boxes[x=6].innerText=="O" && boxes[y=7].innerText=="O" && boxes[z=8].innerText=="O" || boxes[x=1].innerText=="O" && boxes[y=4].innerText=="O" && boxes[z=7].innerText=="O" || boxes[x=2].innerText=="O" && boxes[y=5].innerText=="O" && boxes[z=8].innerText=="O" || boxes[x=2].innerText=="O" && boxes[y=4].innerText=="O" && boxes[z=6].innerText=="O"  ){
      console.log("in O : x = ", x ," y =  ",y," z = ",z);
      boxes[x].style.backgroundColor="pink";
      boxes[y].style.backgroundColor="pink";
      boxes[z].style.backgroundColor="pink";
      var popup = document.querySelector("#popupContainer");
      document.querySelector("#poph2").innerText="Player O is the Winner";
      document.querySelector("#popp").innerText="You can  reset and play again";
      popup.style.display="block";
    }else{
      let tie=true;
      for(let box of boxes){
        if(box.innerText==""){
          tie=false;
          break;
        }
      }
      if(tie){
        var popup = document.querySelector("#popupContainer");
      document.querySelector("#poph2").innerText="Tie!🤔";
      document.querySelector("#popp").innerText="You can  reset and play again";
      popup.style.display="block";
      }
    }

  })
} )

let resetbtn=document.querySelector("#reset");
resetbtn.addEventListener("click",()=>{
  boxes.forEach((btn)=>{
    btn.innerText="";
    btn.style.backgroundColor = "";
    btn.disabled=false;
    turnO=true;
    document.getElementById("popupContainer").style.display = "none";
  })
})
