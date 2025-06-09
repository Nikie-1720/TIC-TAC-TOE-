let boxes = document.querySelectorAll(".box");
let resetBtn=document.querySelector(".reset");
let newGame = document.querySelector(".newGame");
let msgcontainer= document.querySelector(".msgContainer");
let msg= document.querySelector(".msg");
 
let turnX = true;//playerX,playerO

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];
const resetGame = ()=>{
    turnX = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
};


boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        console.log("box was clicked");
       if(turnX){
        box.innerText="X";
        turnX=  false;
       }
       else{
        box.innerText="O";
        turnX=true;
        }
        box.disabled = true;
        checkWinner();
    });

    });
    const enableBoxes = () =>{
       for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
       }
    }
    const disableBoxes = () =>{
        for (let box of boxes){
            box.disabled = true; 
        }
    }
    const showWinner = (Winner) =>{
        msg.innerText =`Congratulations the winner is ${Winner}`;
        msgcontainer.classList.remove("hide");
        disableBoxes();
       
    }


    const checkWinner = () =>{
      for(let pattern of winPatterns ){
        
        
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

      if(pos1Val != "" && pos2Val != "" && pos3Val != "")  {
        if(pos1Val == pos2Val &&
            pos2Val == pos3Val
            ){
                console.log("winner",pos1Val);
                 showWinner(pos1Val);
            }
            
      }
        
      }    

    }
 newGame.addEventListener("click",resetGame);
 resetBtn.addEventListener("click",resetGame);