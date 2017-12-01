$(document).ready(function(){
	$("#zalog-home").show();
	var pts = $("#pts");
	pts.mouseover(function () {
		$("#zalog-home").hide();
		$("#zalog-car").hide();
		$("#zalog-lizing").hide();
		$("#zalog-pts").show().delay(1000);
	});
	var home = $("#home");
	home.mouseover(function () {
		$("#zalog-pts").hide();
		$("#zalog-car").hide();
		$("#zalog-lizing").hide();
		$("#zalog-home").show();
	});
	var car = $("#car");
	car.mouseover(function () {
		$("#zalog-pts").hide();
		$("#zalog-home").hide();
		$("#zalog-lizing").hide();
		$("#zalog-car").show();
	});

	var lizing = $("#lizing");
	lizing.mouseover(function(){
		$("#zalog-pts").hide();
		$("#zalog-home").hide();
		$("#zalog-car").hide();
		$("#zalog-lizing").show();
	});
});

$(document).ready(function() {
   $('a[href^="#"]').click(function () { 
     elementClick = $(this).attr("href");
     destination = $(elementClick).offset().top;
     $('html').animate( { scrollTop: destination }, 1100 );
     return false;
   });

   	$('.spoiler_links').click(function(){	 	 
 		$(this).parent().children('div.spoiler_body').toggle('normal');	 	 
 		return false;	 	 
 		});	 	
 	});

ymaps.ready(init);
    var myMap;

    function init(){     
        myMap = new ymaps.Map("map", {
            center: [52.249721, 104.358167], 
            zoom: 17,
            type: 'yandex#map',
            controls:['zoomControl'],
            behaviors:['drag']
        });


    var placemark = new ymaps.Placemark([52.249721, 104.358167],{
 		// iconContent:'<a class="map-point"></a>',
        balloonContent: ' \
           <div class="map-balloon"> \
             <a class="title" href="#">ИФК Капитал - Быстрая финансовая помощь</a> \
             <ul class="chars"> \
               <li> \
                 <b>Время работы:</b> \
                 Пн-Вс с 8.00 до 20.00 \
               </li> \
               <li> \
                 <b>Сайт:</b> \
                 <a class="href" href="#">www.ifk-kapital.ru</a> \
             \
               </li> \
             </ul> \
           </div> \
         '
        }, {
          // Указываем ссылку на изображение иконки
          iconImageHref: '',
          // Пиксельный сдвиг содержимого иконки относительно родительского элемента
          iconContentOffset:[-13, -10],
          // Отключаем кнопку закрытия балуна.
          balloonCloseButton: false,
          // Балун будем открывать и закрывать кликом по иконке метки.
          hideIconOnBalloonOpen: false,
          balloonOffset: [0, -50]
          });

    
    myMap.geoObjects.add(placemark);

    placemark.balloon.open();
    }

