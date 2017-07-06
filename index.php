<!DOCTYPE html>
<html  lang="ru">
<head>
	<meta charset="UTF-8">
    <title>Learn JS</title>
    <link href="style.css" rel="stylesheet">
    <script src="http://code.jquery.com/jquery-1.9.0.js"></script>
    <script src="script.js" type="text/javascript"></script>
</head>
<body>
    <div id="wrapper">
	<div id="container">
		<div class="content-block" style="display:flex; height:160px;width:100%;margin-bottom:15px">
		
			<div id="box-block" class="block block-block block-first " style="float:left;position:relative;width:25%; background-color: #ff0;word-wrap: break-word;padding-left: 20px;padding-right:55px">
				<h5 class="rtecenter"><span style="font-size:12px"><span style="color:#000000"><strong>1 Шаг</strong></span></span></h5>

				<p><strong><span style="color:#008000">Специалист&nbsp;осматривает помещение на наличие зараженных зон. Изучение возникновения заражения.</span></strong></p>

			</div>
			<div id="box-block" class="block block-block block-second" style="float:left;position: relative;width:25%;background-color: #b2b2b2;padding-left: 20px;padding-right:35px;word-wrap:break-word">
				<h5 class="rtecenter"><span style="font-size:12px"><strong>2 Шаг</strong></span></h5>

				<p><strong>После&nbsp;мониторинга вы можете получить полную&nbsp;<u>консультацию</u>&nbsp;и <u>рекомендации</u>. </strong></p>
			</div>
			<div id="box-block" class="block block-third" style="float:left;position: relative;width:25%; background-color: #c9f602;padding-left: 20px;padding-right:35px;word-wrap:break-word">
				<h5 class="rtecenter"><span style="font-size:12px"><strong>3 Шаг</strong></span></h5>

				<p><strong>Проводится обработка (<u>уничтожение насекомых, личинок и яиц</u>) всего помещения <u>полностью!</u></strong></p>
			</div>
			<div id="box-block" class="block block-fourth" style="float:left;position: relative;width:25%; background-color: #72d8fe;padding-left: 20px;padding-right:35px;word-wrap:break-word">
				<h5 class="rtecenter"><span style="font-size:12px"><strong>4 Шаг</strong></span></h5>

				<p class="rtecenter"><strong>Получение гарантии и необходимых документов</strong><strong>.</strong></p>
			</div>
	    <script>
			$(function(){
				$(".content-block").mouseover(function(){
					var $p = $(".block-first");
					$p.stop()
					  .delay(3500).css("background-color","red").show(3000);
					 
				});
                                $(".content-block").mouseover(function(){
					var $p = $(".block-second");
					$p.stop()
					  .delay(3500).css("background-color","orange").show(3000);
					 
				});
				$(".content-block").mouseout(function(){
					var $p = $(".block-first");
					$p.stop()
					  .delay(3500).css("background-color","yellow");
					 
				});
                                $(".content-block").mouseout(function(){
					var $p = $(".block-second");
					$p.stop()
					  .delay(3500).css("background-color","green");
					 
				});
			});
		</script>
		</div>
        <div id="left-side">
            <h3>Menu</h3>
                    
                    <div class="list_tasks">
                            <a class="done" href="#">Task 1</a>
                            <a class="done" href="#">Task 2</a>
                            <a class="done" href="#">Task 3</a>

                    </div>
            </div>
            <div id ="right-side">
                <button id="btn">Task 3</button>
                <script src="tasks/task3.js"></script>
                <div id="box-info"></div>
                
                
                <ul>
                            <li><button id="btn">Task 1</button>
                                <script src="tasks/task1.js"></script>
                                 <div id="box-info"></div>
                            </li>
                            <li><button id="btn">Task 1-2</button>
                                 <div id="box-info"></div>

                            </li>
                            <li><button id="btn">Task 2</button>
                        <div id="box-info"></div>
                            </li>
                           
                    </ul>
            </div>
        </div>
    </div>	
</body>
</html>