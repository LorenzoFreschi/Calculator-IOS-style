
let inputVal = document.querySelector('#inputVal');
let clear = document.querySelector('#clear');
let back = document.querySelector('#back');
let percent = document.querySelector('#percent');
let divide = document.querySelector('#divide');
let multiply = document.querySelector('#multiply');
let subtract = document.querySelector('#subtract');
let add = document.querySelector('#add');
let equals = document.querySelector('#equals');



document.querySelector('.keyboard').addEventListener('click', function(e){
  // check if the target element have id = clear
  if (e.target.id == 'clear'){
    inputVal.value = '';
  }else if(
    e.target.id == 'one' ||
    e.target.id == 'two' ||
    e.target.id == 'three' ||
    e.target.id == 'four' ||
    e.target.id == 'five' || 
    e.target.id == 'six' ||
    e.target.id == 'seven' ||
    e.target.id == 'eight' ||
    e.target.id == 'nine' ||
    e.target.id == 'zero' ||
    e.target.id == 'decimal'
    ){
    inputVal.value += String(e.target.childNodes[0].nodeValue);
  }
})

back.addEventListener('click', function(){
  inputVal.value = inputVal.value.slice(0, -1);
})

percent.addEventListener('click', function(){
  inputVal.value += '/100';
  inputVal.value = eval(inputVal.value);
})

divide.addEventListener('click', function(){
  if(
    inputVal.value != '' && 
    inputVal.value[inputVal.value.length-1] != '/' && 
    inputVal.value[inputVal.value.length-1] != '*' &&
    inputVal.value[inputVal.value.length-1] != '-' &&
    inputVal.value[inputVal.value.length-1] != '+'
    ){
    inputVal.value += '/'
  }
})
multiply.addEventListener('click', function(){
  if(
    inputVal.value != '' && 
    inputVal.value[inputVal.value.length-1] != '/' && 
    inputVal.value[inputVal.value.length-1] != '*' &&
    inputVal.value[inputVal.value.length-1] != '-' &&
    inputVal.value[inputVal.value.length-1] != '+'
    ){
    inputVal.value += '*'
  }
})
subtract.addEventListener('click', function(){
  if(
    inputVal.value != '' && 
    inputVal.value[inputVal.value.length-1] != '/' && 
    inputVal.value[inputVal.value.length-1] != '*' &&
    inputVal.value[inputVal.value.length-1] != '-' &&
    inputVal.value[inputVal.value.length-1] != '+'
    ){
    inputVal.value += '-'
  }
})
add.addEventListener('click', function(){
  if(
    inputVal.value != '' && 
    inputVal.value[inputVal.value.length-1] != '/' && 
    inputVal.value[inputVal.value.length-1] != '*' &&
    inputVal.value[inputVal.value.length-1] != '-' &&
    inputVal.value[inputVal.value.length-1] != '+'
    ){
    inputVal.value += '+'
  }
})
equals.addEventListener('click',function(){
  if (inputVal.value != '') {
    inputVal.value = eval(inputVal.value);
  }
})
