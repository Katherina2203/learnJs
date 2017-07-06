function runPrecisionExp(n){
    var precisionExp, 
            numerator, denumerator = function(n){
                (n !== 1) ? n * denumerator(n-1) : 1;
            }, x = 1;
    
   
        numerator = Math.pow(x, n);
        while(x != n){
            res += numerator/denumerator;
            x++;
        }
        precisionExp =  1 + res;

    
    return alert (parseFloat(precisionExp.toFixed(4))); //округление до 4 знаков после запятой. parseFloat для получения числового типа данных
}

//parseFloat(Math.exp(3).toFixed(4))  for checking  result = 20.0855


