var cities = "Винница Балановка Ладыжин Луцк Владимир-Волынский Ковель Нововолынск Днепропетровск Булаховка Днепродзержинск Жёлтые-Воды Зеленодольск Кривой-Рог Кринички Марганец Никополь Новомосковск Павлоград Житомир Андреевка Бердичев Коростень Новоград-Волынский Ужгород Берегово Виноградов Иршава Мукачево Рахов Свалява Тячев Хуст Запорожье Бердянск Днепрорудное Камыш-Заря Мелитополь Токмак Энергодар Ивано-Франковск Бурштын Калуш Коломыя Белая-Церковь Борисполь Бровары Вышгород Припять";

function sortCities(){

var citiesArr = cities.split(' ');
var rand = citiesArr[Math.floor(Math.random() * (citiesArr.length-1))];
var resultCities = [];
    resultCities.push(rand);
    citiesArr.splice(rand, 1);
    
    while(cities.length != 0){
        for(let i = 0; resultCities.length > 0; i++){
            for(let j = 0; citiesArr > 0; i++){
                if(resultCities[i.length-1] == citiesArr[j[0]]){
                    resultCities.push(citiesArr[j[0]]);
                    citiesArr.splice(citiesArr[j[0]],1);
                }else{
                    resultCities.push(rand);
                }
            }
        }
    }
return resultCities;
}

document.write(sortCities());