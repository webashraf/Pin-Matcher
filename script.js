// Random Number Genarate Program Start
// rndomPinInput  
// rndomPinGenarate
document.getElementById('rndomPinGenarate').addEventListener('click', function(){
    function randomNumber(a, b){
        return Math.round(Math.random() * (a - b) + b )
    }
    let randomValue = randomNumber(1000, 9999)
    document.getElementById('rndomPinInput').value = randomValue;
})
// Random Number Genarate Program End
// Calculator button program
let display = document.getElementById('userInputBox');
let clickedButton = Array.from(document.getElementsByClassName('button'));

clickedButton.map(myButton => {
    myButton.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            default:
                 display.innerText += e.target.innerText;
        }
    })
})


let count = 0;
document.getElementById('submitButton').addEventListener('click', ()=> {
    let finalRandom = document.getElementById('rndomPinInput').value;
switch(finalRandom){
        case display.innerText:
        document.getElementById('notifyTik').style.display = 'block';
        document.getElementById('notifyCross').style.display = 'none';
        break;
    default:
        document.getElementById('notifyCross').style.display = 'block';
        document.getElementById('notifyTik').style.display = 'none';

}
display.innerText = '';
document.getElementById('rndomPinInput').value = ' ';

count = count + 1;
switch (count) {
    case 3:
        document.getElementById('submitButton').style.pointerEvents = 'none';
        document.getElementById('submitButton').style.color = 'red';
        document.body.style.pointerEvents = 'none';
        break;
}
console.log(count);
})