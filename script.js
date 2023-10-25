let btns = [...document.querySelectorAll("button")];
let result = document.querySelector(".result");
let yourScore = document.querySelector("#your-score")
let computerScore = document.querySelector("#computer-score");
let arr = ["👊", "🖐", "✌"];
function randomSign(){
    let randomIdx = Math.floor(Math.random()*3);
    return arr[randomIdx];
}
btns.map((ele)=>{
    ele.addEventListener('click', ()=>{
        let computerSign = randomSign()
        if(ele.innerText==computerSign){
            result.innerText = "Its a Draw"
        }
        else if((ele.innerText=="👊" && computerSign=="🖐") || (ele.innerText=="🖐" && computerSign=="✌") || (ele.innerText=="✌" && computerSign=="👊")){
            computerScore.innerText++;
            result.innerText = `Sorry!! You Lose , ${computerSign} beats ${ele.innerText}`
        }
        else{
            yourScore.innerText++;
            result.innerText = `You Win!! , ${ele.innerText} beats ${computerSign}`
        }
    })
})