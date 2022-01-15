window.addEventListener('keydown',function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; // stop the function if there is no matching key
    audio.currentTime = 0; //let you play a note more than one time at the same time without  delay
    audio.play(); //play the note
    key.classList.add('playing'); //add css clas we made earlier in style.css to play the note
})

function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
    console.log(this);
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',removeTransition));












































































// window.addEventListener('keydown',function (e){
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
//     audio.currentTime = 0; // playing without delay
//     audio.play(); 
//     key.classList.add('playing');
// })

// function removeTransition(e){
//     if(e.propertyName !== 'transform') return;
//     this.classList.remove('playing');
// }

// const keys = document.querySelectorAll('.key');
// keys.forEach(key => key.addEventListener('transitionend',removeTransition));