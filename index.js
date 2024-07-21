for (var i = 0; i < document.querySelectorAll(".drum").length; i++ ) {
document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
});
}

addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
    
})

function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom1 = new Audio("sounds/tom-3.mp3");
            tom1.play();
            break;
        case "d":
            var tom2 = new Audio("sounds/tom-4.mp3");
            tom2.play();
            break;
        case "j":
            var tom1 = new Audio("sounds/crash.mp3");
            tom1.play();
            break;
        case "k":
            var tom2 = new Audio("sounds/snare.mp3");
            tom2.play();
            break;
        case "l":
            var tom2 = new Audio("sounds/kick-bass.mp3");
            tom2.play();
            break;
        default:
            break;
    }

} 

function buttonAnimation(currentkey){
   var activeButton = document.querySelector("." + currentkey);
   activeButton.classList.add("pressed");
   setTimeout(function () {
    activeButton.classList.remove("pressed");
   }, 100)
}