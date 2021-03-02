//ici 
//import nomDuModule './nomDuModule'
//import designBouton './designBouton'
//console.log(designBouton)
//cet import export permet de lier les deux fichiers 
import main from './main';

main();
console.log(main);


//-----------------Initiation touche a
  let btnPresse1 = document.getElementById('btn__sound-1');
  let sound1 = document.getElementById('audiotag_a');

  document.addEventListener("keydown",  event => {
    if(event.keyCode == 65) {
    sound1.play();
    btnPresse1.classList.add('en_ecoute');
    console.log(event);
    sound1.onended = function() {
        btnPresse1.classList.remove('en_ecoute')
    }

  }
});


//-----------------Initiation touche z
let btnPresse2 = document.getElementById('btn__sound-2');
let sound2 = document.getElementById('audiotag_z');

document.addEventListener("keydown", event => {
    if(event.keyCode == 90) {
      sound2.play();
      btnPresse2.classList.add('en_ecoute');
      console.log(event);
      sound2.onended = function() {
          btnPresse2.classList.remove('en_ecoute')
      }
  
    }
  });


  //-----------------Initiation touche e
 let btnPresse3 = document.getElementById('btn__sound-3');
 let sound3 = document.getElementById('audiotag_e');

document.addEventListener("keydown", event => {
    if(event.keyCode == 69) {
      sound3.play();
      btnPresse3.classList.add('en_ecoute');
      console.log(event);
      sound3.onended = function() {
          btnPresse3.classList.remove('en_ecoute')
      }
  
    }
  });


  //-----------------Initiation touche r
  let btnPresse4 = document.getElementById('btn__sound-4');
  let sound4 = document.getElementById('audiotag_r');

    document.addEventListener("keydown", event => {
    if(event.keyCode == 82) {
      sound4.play();
      btnPresse4.classList.add('en_ecoute');
      console.log(event);
      sound4.onended = function() {
          btnPresse4.classList.remove('en_ecoute')
      }
  
    }
  });


  //-----------------Initiation touche t
    let btnPresse5 = document.getElementById('btn__sound-5');
    let sound5 = document.getElementById('audiotag_t');

    document.addEventListener("keydown", event => {
    if(event.keyCode == 84) {
      sound5.play();
      btnPresse5.classList.add('en_ecoute');
      console.log(event);
      sound5.onended = function() {
          btnPresse5.classList.remove('en_ecoute')
      }
  
    }
  });

  //-----------------Initiation touche y
    let btnPresse6 = document.getElementById('btn__sound-6');
    let sound6 = document.getElementById('audiotag_y');

    document.addEventListener("keydown", event => {
    if(event.keyCode == 89) {
      sound6.play();
      btnPresse6.classList.add('en_ecoute');
      console.log(event);
      sound6.onended = function() {
          btnPresse6.classList.remove('en_ecoute')
      }
  
    }
  });

  
  //-----------------Initiation touche u
  let btnPresse7 = document.getElementById('btn__sound-7');
  let sound7 = document.getElementById('audiotag_u');

    document.addEventListener("keydown", event => {
    if(event.keyCode == 85) {
      sound7.play();
      btnPresse7.classList.add('en_ecoute');
      console.log(event);
      sound7.onended = function() {
          btnPresse7.classList.remove('en_ecoute')
      }
  
    }
  });


  //-----------------Initiation touche i
    let btnPresse8 = document.getElementById('btn__sound-8');
    let sound8 = document.getElementById('audiotag_i');

    document.addEventListener("keydown", event => {
    if(event.keyCode == 73) {
      sound8.play();
      btnPresse8.classList.add('en_ecoute');
      console.log(event);
      sound8.onended = function() {
          btnPresse8.classList.remove('en_ecoute')
      }
  
    }
  });


  //-----------------Initiation touche o
    let btnPresse9 = document.getElementById('btn__sound-9');
    let sound9 = document.getElementById('audiotag_o');

    document.addEventListener("keydown", event => {
    if(event.keyCode == 79) {
      sound9.play();
      btnPresse9.classList.add('en_ecoute');
      console.log(event);
      sound9.onended = function() {
          btnPresse9.classList.remove('en_ecoute')
      }
  
    }
  });