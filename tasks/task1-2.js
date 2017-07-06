function getInRange(start, end){
  for (var i=0; start <= end; start++){
    if ((String(start)).indexOf(5) > -1){
      continue;
    } else {
      i++;
    }
  }
  return i;
}

getInRange(start, end);
//Задать 2 числа start<end. Подсчитать сколько чисел в интервале [start, end] не содержат цифру 5. 

//Например, 
//start = - 7
//end = 7
//Количество чисел без “5” : 13


function getInRange(start, end){
   for(var i = start; i <= end; i++) document.write(i+ '')
}


