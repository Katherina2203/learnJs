var cities = "Винница Балановка Ладыжин Луцк Владимир-Волынский Ковель Нововолынск Днепропетровск Булаховка Днепродзержинск Жёлтые-Воды Зеленодольск Кривой-Рог Кринички Марганец Никополь Новомосковск Павлоград Житомир Андреевка Бердичев Коростень Новоград-Волынский Ужгород Берегово Виноградов Иршава Мукачево Рахов Свалява Тячев Хуст Запорожье Бердянск Днепрорудное Камыш-Заря Мелитополь Токмак Энергодар Ивано-Франковск Бурштын Калуш Коломыя Белая-Церковь Борисполь Бровары Вышгород Припять";

var citiesArr = cities.split(' ');
// console.log(citiesArr); create the array with cities

var rand = citiesArr[Math.floor(Math.random() * citiesArr.length)];
// console.log(rand); get random city from cities-Array

//function sortCity(){
    var resultCities = [];
    
   // resultCities[0] = rand; //первый элемент массива будет Рандомный город
    for (var i = rand; i < citiesArr.length; i++){
      //  var sortArr = resultCities.sort().push(citiesArr[i]);
        resultCities[0] = rand;
        //resultCities = resultCities.slice().sort().push(citiesArr[i]);//push(citiesArr[i])
        resultCities = resultCities.unshift(rand);
    };

 //   return resultCities;
//}
citiesArr.sort();

