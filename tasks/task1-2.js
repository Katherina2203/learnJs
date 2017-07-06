function getInRange(start, end){
    var countInRange = function(){
        for(var i = start; i < end; i++){
            var counts = 0;
            if(counts[i]%5 && counts[i]){
                counts = count(counts[i]);
            }
            
        }
    };
    
    return start < end ? alert('Количество чисел без “5” :', countInRange) : alert('Количество чисел без “5” :', countInRange);
}

getInRange(start, end);
//Задать 2 числа start<end. Подсчитать сколько чисел в интервале [start, end] не содержат цифру 5. 

//Например, 
//start = - 7
//end = 7
//Количество чисел без “5” : 13


