

//first thing we save the input of the text fields into variables 

let hex = document.querySelector('#hex');

let oct = document.querySelector('#octal');

let bin =document.querySelector('#binary');


let intgerHex = document.querySelector('#intgerHex');
intgerHex.style.textAlign = 'center'

let hexReg = "^0?[xX]?[0-9a-fA-F]+$";

let hexClick =document.querySelector('#hex-click');



hexClick.addEventListener('click', changeToInt);


function changeToInt() {
   
   if(hex.val == '' || !hex.value.match(hexReg)) {
       hex.classList.add('invalied');
   }  else if(hex.value != '' && hex.value.match(hexReg)) {
    let val = hex.value;
    intgerHex.value = parseInt(val, 16);
    hex.classList.remove('invalied');
} 

hex.addEventListener('focus', getRidOfInv);

function getRidOfInv() {
    hex.classList.remove('invalied');
    intgerHex.value = '';
}

}

let intgerOct =document.querySelector('#intgerOct');
let octClick = document.querySelector('#oct-click');

let octReg = /^[0-7]+$/;


octClick.addEventListener('click', changeToOct);

function changeToOct() {
  if(oct.value == '' || !oct.value.match(octReg)) {
      oct.classList.add('invalied')
  }  else if (oct.value != '' && oct.value.match(octReg)) {
    let val = oct.value;
    intgerOct.value = parseInt(val,8);
    oct.classList.remove('invalied');
  }
}

oct.addEventListener('focus', removeInva);

function removeInva() {
    oct.classList.remove('invalied');
    intgerOct.value = '';
}
let binReg = /[01]/g;

let intergerBin = document.querySelector('#intgerBin');
let binClick = document.querySelector('#bin-click');

intergerBin.style.textAlign = 'center';

binClick.addEventListener('click', changeToBin);

function changeToBin() {
    if(bin.value == '' || !bin.value.match(binReg)) {
        bin.classList.add('invalied')
    } else if (bin.value != '' && bin.value.match(binReg)) {
        let val = bin.value;
        intergerBin.value = parseInt(val, 2);
        bin.classList.remove('invalied');
    }
}

bin.addEventListener('focus', removeInvalid);

function removeInvalid() {
    bin.classList.remove('invalied');
    intergerBin.value = '';
}

let restBtn = document.querySelector('.fa-stop-circle ');

restBtn.addEventListener('click', restAll);

function restAll() {

    hex.value = '';
    oct.value = '';
    bin.value = '';
    intgerOct.value = '';
    intgerHex.value = '';
    intergerBin.value = '';
}