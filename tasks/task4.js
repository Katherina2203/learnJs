function runAnimationBubble()
{
    var 
        сb = $('cnv').getContext('2d'),
        body = document.getElementById("canvas-balls"),
        childs = {}, //массив объектов сцены
        animate = {};//Массив анимаций для объектов


}

function initAnimation()
{
    //Добавляем шарик
    childs['ball'] = {
      'at' : 'jump', //Стартовая анимация
      'w'  : 30,   //Ширина объекта
      'h'  : 30,   //Высота объекта
      'fw' : 30,   //Ширина кадра анимации
      'x'  : 100,  //Положение по горизонтали
      'y'  : 100   //Положение по вертикали
    }
     animate['ball'] = {
    'jump': {                      //Ключ есть имя анимации
      'el'    : null,              //Объект Image
      'src'   : 'images/ball.png', //Путь к изображению
      'step'  : 0,                 //Текущий шаг анимации
      'speed' : 3,                 //Скорость анимации
      'curr'  : 0,                 //Счетчик кадров
      'steps' : 3,                 //Количество кадров анимации, считаем от 0
      'onend' : null               //Функция для вызова по окончании анмации
    },
    'bum': {
      'el'    : null,
      'src'   : 'images/ball_m.png', 
      'step'  : 0,
      'speed' : 3,
      'curr'  : 0,
      'steps' : 7,
      'onend' : 'onBumEnd'
    },
    'stop': {
      'el'    : null,
      'src'   : 'images/ball_s.png', 
      'step'  : 0,
      'speed' : 10,
      'curr'  : 0,
      'steps' : 0,
      'onend' : null
    },
    'dead': {
      'el'    : null,
      'src'   : 'images/ball_d.png', 
      'step'  : 0,
      'speed' : 10,
      'curr'  : 0,
      'steps' : 0,
      'onend' : null
    }
  }
  //Идем по всем объектам
  for (var o in childs) {          

    //И по все их анимациям
    for (var a in animate[o]) {

      //Подгружаем изображения
      var img = new Image();
      img.src = animate[o][a].src;
      //Помещаем объект изобраения в анимацию
      animate[o][a].el = img;

    }

  }
}


function onBumEnd() {
        
  //Меняем тип анимации на мертый шарик
  childs['ball'].at = 'dead';
  //Сбрасываем счетчик
  animate['ball'][childs['ball'].at].curr = 0;
        
}

function changeAnimation(value) {
         
  //Меняем анимацю на выбранную
  childs['ball'].at = value;  
  //Сбрасываем счетчик       
  animate['ball'][childs['ball'].at].curr = 0;
        
}


function startAnimation() {

  //Запускаем единый таймер
  setInterval(function() {          

    //Чистим сцену
    ctx.save();
    ctx.fillStyle = '#ccc';
    ctx.fillRect(0, 0, 600, 200);
    ctx.restore();

    //Проходим по всем объектам и отрисовываем
    for (var o in childs) {

      //Смотрим текущую анимацию
      if (animate[o]) {
        
        //Берем текущий шаг
        var step = animate[o][childs[o].at].step;

        //Рисуем его
        ctx.drawImage(
          animate[o][childs[o].at].el,     //Объект Image анимации 
          Math.round(childs[o].fw * step), //Берем текущий кадр, ширина кадра * шаг 
          0,                               //Кадры идут один за другим, тут 0
          childs[o].w,                     //Вырез в ширину объекта
          childs[o].h,                     //И в высоту
          childs[o].x,                     //Размещаем по горизонтали на холсте
          childs[o].y,                     //И по вертикали
          childs[o].w,                     //Ширина как у кадра
          childs[o].h                      //Ну и высота
        );
        
        //Проверяем счетчик и если достигли speed, переходим к следующему кадру
        if (animate[o][childs[o].at].curr >= animate[o][childs[o].at].speed) {

          //Проверяем, если кадр последний переходим к первому
          if (animate[o][childs[o].at].step >= animate[o][childs[o].at].steps) {

            animate[o][childs[o].at].step = 0;

            //Кадр последний, значит вызываем функцию, если есть
            if (animate[o][childs[o].at].onend)
              window[animate[o][childs[o].at].onend]();

          }
          else animate[o][childs[o].at].step++;

          //Сбрасываем счетчик
          animate[o][childs[o].at].curr = 0;

        }

        //Увеличиваем счетчик
        animate[o][childs[o].at].curr++;       

      }

    }

  }, 1000/16);

}
