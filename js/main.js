document.addEventListener("DOMContentLoaded", ready); 
function ready() { 
	/*делаем свич эфект для мини картинки следующего слайда*/
	var sourceList = [{url:'img/sl-mini1.jpg', heading:'Sara Taylor1', description:'Trainer1'}, 
	{url: 'img/sl-mini2.jpg', heading:'Sara Taylor2', description:'Trainer2'}, 
	{url:'img/sl-mini3.jpg', heading:'Sara Taylor3', description:'Trainer3'}, 
	{url:'img/sl-mini4.jpg', heading:'Sara Taylor4', description:'Trainer4'}]; 

	var bloquotesPreview = document.getElementsByClassName('sl__bloquotes-preview_img')[0], 
	bloquotesPreviewHeading = document.getElementsByClassName('sl__bloquotes-preview_heading')[0],
	bloquotesPreviewDescription = document.getElementsByClassName('sl__bloquotes-preview_description')[0];
	bloquotesPreview.src = sourceList[0].url; 
	bloquotesPreviewHeading.innerHTML = sourceList[0].heading;
	bloquotesPreviewDescription.innerHTML = sourceList[0].description;
	var i = 0; 

	var arrow2 = document.querySelector('.bloquotes .slick-next');  
	arrow2.addEventListener("click", moveRight); 
	function moveRight() { 
	i++; 
	if(i > sourceList.length - 1) { 
	i = 0; 
	}; 
	bloquotesPreview.src = sourceList[i].url; 
	bloquotesPreviewHeading.innerHTML = sourceList[i].heading;
	bloquotesPreviewDescription.innerHTML = sourceList[i].description;
	}; 

	var arrow1 = document.querySelector('.bloquotes .slick-prev'); 
	arrow1.addEventListener("click", moveLeft);  
	function moveLeft() { 
	i--; 
	if(i < 0) { 
	i = sourceList.length - 1; 
	}; 
	bloquotesPreview.src = sourceList[i].url; 
	bloquotesPreviewHeading.innerHTML = sourceList[i].heading;
	bloquotesPreviewDescription.innerHTML = sourceList[i].description;
	};

	/*делаем завязку мини превью картинки с дотсами слайдера слик*/

	var dots = document.querySelectorAll('.bloquotes .slick-dots li button');

	function dotsMarker() {
		for(let j = 0; j<dots.length; j++) {
			dots[j].setAttribute('marker', j);
		}
	}
	dotsMarker();

	
	function addClickMethods() {
		for(let j = 0; j<dots.length; j++) {
			dots[j].onclick = function(e) {
				var current = event.target;
				var picIndex = current.getAttribute('marker');
				bloquotesPreview.src = sourceList[picIndex].url;
				bloquotesPreviewHeading.innerHTML = sourceList[picIndex].heading;
				bloquotesPreviewDescription.innerHTML = sourceList[picIndex].description; 
			}
		}
	}
	addClickMethods();

	/*делаем липкое меню при скролле*/

	var nav = document.getElementsByTagName('nav')[0];

	window.onscroll = function() {
	  var scrolled = window.pageYoffset || document.documentElement.scrollTop;
	  var target = nav;
	  
	  if(scrolled > 0) {
	    target.style.position = 'fixed';
	    target.style.top = 0 + 'px';
	    target.style.left = 0 + 'px';
	    target.style.right = 0 + 'px';
	    target.style.zIndex = 999;
	  }

	  else {
	    target.style.position = 'static';
	  }

	 }

	 /*переключение класса актив для менюшки на jquery*/
	 $(".main-menu_list li").click(function(e) {
		  //e.preventDefault();
		  $(".main-menu_list li").removeClass("active");
		  $(this).addClass("active");
		});

	 /*подсвечиваем шапку блока с ценой*/

	 $('.price_item_buy:eq(0)').hover(
    	function(){
        $('.price_item-list_purchase:eq(0)').css('background-color','#FF4500');
    	},
    	function(){
        $('.price_item-list_purchase:eq(0)').css('background-color','#5b6ceb');
    	}
	);

	 $('.price_item_buy:eq(1)').hover(
    	function(){
        $('.price_item-list_purchase:eq(1)').css('background-color','#FF4500');
    	},
    	function(){
        $('.price_item-list_purchase:eq(1)').css('background-color','#5b6ceb');
    	}
	);


	 $('.price_item_buy:eq(2)').hover(
    	function(){
        $('.price_item-list_purchase:eq(2)').css('background-color','#FF4500');
    	},
    	function(){
        $('.price_item-list_purchase:eq(2)').css('background-color','#5b6ceb');
    	}
	);

	/* делаем плавную прокрутку к якорям*/
	$(".main-menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top - 100;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    /* кнопки включения-выключения меню на телефонах*/
    $(".main-menu_mobile-bars").click(function(e) {
	  e.preventDefault();
	  $(".main-menu_list").css("display", "block");
	});

	$(".main-menu_list-close").click(function(e) {
	  e.preventDefault();
	  $(".main-menu_list").css("display", "none");
	});

}