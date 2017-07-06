<!DOCTYPE html>
<html  lang="ru">
<head>
	<meta charset="UTF-8">
    <title>Learn JS. Task 4</title>
    <link href="style.css" rel="stylesheet">
    <script src="http://code.jquery.com/jquery-1.9.0.js"></script>
    
</head>
<body>
    <div id="wrapper">
	<div id="container">
            <p>Создать холст. На холст добавлять шарики разного диаметра и разного цвета. Через каждые 5 секунд. Всего должно быть 20 шариков. Шарики должны двигаться по холсту с одинаковой скоростью, отскакивать от стенок холста в разных направлениях. Появляются все шарики в координате 0,0
Творческих успехов!
</p>
            <div class="box-body" style="width: 500px; margin: 0 auto;border: 1px solid #ccc;">
                <canvas height="320" width="480" id="canvas-balls">Обновите браузер</canvas>
                <script src="tasks/task4.js" type="text/javascript"></script>
                <select id="animations" name="animations" onchange="changeAnimation(this.value)">
                    <option value="stop">Stop</option>
                    <option value="jump">Jump</option>
                    <option value="bum">Bum</option>
                    <option value="dead">Dead</option>
                </select>
               
            </div>
        </div>
    </div>	
</body>
</html>