var drumNumber = document.querySelectorAll(".drum").length;

console.log(drumNumber);


// for loop made 6 added event listner document query in the [i] index
for (var i = 0 ; i < drumNumber ; i++){
// we can only use index in queryselectorall only
document.querySelectorAll(".drum")[i].addEventListener("click" , handleClick );
console.log(i);

}


function handleClick(){
    // this is use for to check the element inner html
    console.log(this.innerHTML);
    // this is defined what is going in the innerhtml
    this.style.color = " "; // blank because of white color
    // checked which btn clickeed
    var ButtonName = this.innerHTML;
    makeSound(ButtonName);
  // animation
    buttonAnimation(ButtonName);

    switch (ButtonName) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
          break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
          break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
          break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
          break;
          case "j":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
          break;
          case "k":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
          break;
          case "l":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
          break;
        default: console.log("Unkwon Error");
            break;
    }
}
  

// Keypress function

document.addEventListener("keypress" , handleKeyPress);

function handleKeyPress(event){ // event used in params if we click check
  console.log(event.key);
  makeSound(event.key);
  // animation
  buttonAnimation(event.key);
}

// Make Sound Func using key input
function makeSound(key) {
  switch (key) {
    case "w":
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
      break;
    case "a":
        var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
      break;
    case "s":
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
      break;
    case "d":
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
      break;
      case "j":
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
      break;
      case "k":
        var kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
      break;
      case "l":
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
      break;
    default: console.log("Unkwon Error");
        break;
}
}



function buttonAnimation(currentKey){

 var activeButton =  document.querySelector("." + currentKey);

 activeButton.classList.add("pressed");   

  setTimeout(function(){
  activeButton.classList.remove("pressed");   
  
  } , 100);


}

























