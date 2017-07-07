/*
 * Написать функцию, которая будет возвращать товары в зависимости от переданного аргумента.
Аргументом может быть или название товара и/или цена в пределах min, max и/или модель.

Например, 

функция(ipad, 35000, 40000) 

вернет
"id": "9",
        "name": "Motorola",
        "price": "38000",
        "img": "img/cars/motorola.jpg"


 */
var resultContainer = document.getElementById("box-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'http://localhost/learnjs/tasks/task3.json');
    ourRequest.onload = function(){
        var ourData = JSON.parse(ourRequest.responseText);
     //   console.log(ourData[0]);
        renderHtml(ourData);
    };
    ourRequest.send();
});

function renderHtml(data){
    var htmlString = 'try tests';
    for(i = 0; i < data.length; i++){
        htmlString += '<p>' + 'try tests' + '</p>';
    }
    resultContainer.insertAdjacentHTML('beforeend', htmlString);
}

function getProductsBySort(name, price,model){
    var newProducts =[];
    
    for (var i = 0; i < products.length; i++){
       
    }
    
    return newProducts;
}
