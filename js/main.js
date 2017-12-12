$("#burger-nav").click(function(){
	$(".navMob").toggleClass("hidden");
});

$(".hl").hover(function(){
	$(this).attr("src", "img/hl-logo.png");
}, function(){
	$(this).attr("src", "img/hl-logobw.png");
});

$(".cityOS").hover(function(){
	$(this).attr("src", "img/logo.png");
}, function(){
	$(this).attr("src", "https://i.imgur.com/AQkWdh9.png");
});

$(".intera").hover(function(){
	$(this).attr("src", "img/logo_intera.png");
}, function(){
	$(this).attr("src", "img/logo_interabw.png");
});

$(".katana").hover(function(){
	$(this).attr("src", "img/katana.png");
}, function(){
	$(this).attr("src", "https://i.imgur.com/yzhZghO.png");
});

$(".callToAction").click(function() {
    $('html, body').animate({
        scrollTop: $(".ourProduct").offset().top
    }, 1000);
});

$(".kontaktKlik").click(function() {
    $('html, body').animate({
        scrollTop: $(".interes").offset().top
    }, 1000);
});

$(".projektiKlik").click(function() {
    $('html, body').animate({
        scrollTop: $(".ourProduct").offset().top
    }, 1000);
});


$(".clickButton").click(function() {
    $('html, body').animate({
        scrollTop: $(".interes").offset().top
    }, 1000);
});

$(".clickButton").click(function(){
	$(".emailInput").focus();
});


$(".kontakt").click(function() {
    $('html, body').animate({
        scrollTop: $(".interes").offset().top
    }, 1000);
});

$(".kontakt").click(function(){
	$(".emailInput").focus();
});

$(".forma").submit(function(e) {
	e.preventDefault();
});

$(".prviSpan").click(function(){
	window.open("https://meta5.io/", "_self");
})
$(".drugiSpan").click(function(){
	window.open("https://meta5.io/indexEng.html", "_self");
})
$(".jezikPreko").hover(function(){
	$(".jezikAktiviran").removeClass("hidden");
},function(){
	setTimeout(function(){
		if(!$('.jezikAktiviran').is(":hover"))
		$(".jezikAktiviran").addClass("hidden")}, 500);
} );
$(".jezikAktiviran").hover(function(){
	$(".jezikAktiviran").removeClass("hidden");
},function(){
	setTimeout(function(){
		if(!$('.jezikAktiviran').is(":hover"))
		$(".jezikAktiviran").addClass("hidden")}, 3000);
} );

setInterval(function(){
	if($(window).width() > 555 && $(window).width() <= 955){
		if($(".noviRed").hasClass("hidden"))
			$(".noviRed").toggleClass("hidden");
		if(!$(".redPartnera").hasClass("hidden"))
			$(".redPartnera").toggleClass("hidden");
		if(!$(".redIspod").hasClass("hidden"))
			$(".redIspod").toggleClass("hidden");
	}
	if($(window).width() <= 555){
		if(!$(".noviRed").hasClass("hidden"))
			$(".noviRed").toggleClass("hidden");
		if($(".redIspod").hasClass("hidden"))
			$(".redIspod").toggleClass("hidden");
		if(!$(".redPartnera").hasClass("hidden"))
			$(".redPartnera").toggleClass("hidden");
	}
	if($(window).width() > 955){
		if(!$(".noviRed").hasClass("hidden"))
			$(".noviRed").toggleClass("hidden");
		if(!$(".redIspod").hasClass("hidden"))
			$(".redIspod").toggleClass("hidden");
		if($(".redPartnera").hasClass("hidden"))
			$(".redPartnera").toggleClass("hidden");
	}
}, 60);


$(".kontaktKlik").click(function(){
	$(".emailInput").focus();
})

$(".prviKorakClick").click(function(){
	$(".prviKorak").addClass("hidden");
	$(".drugiKorak").removeClass("hidden");
	$(".emailInput").focus();
});

$('.emailInput1').keypress(function (e) {
  if (e.which == 13) {
	$(".prviKorak").addClass("hidden");
	$(".drugiKorak").removeClass("hidden");
	$(".emailInput2").focus();
	return false; 
  }
});

$(".drugiKorakClick").click(function(){
	$(".drugiKorak").addClass("hidden");
	$(".emailInput3").focus();
	$(".treciKorak").removeClass("hidden");
});

$('.emailInput2').keypress(function (e) {
  if (e.which == 13) {
   $(".drugiKorak").addClass("hidden");
	$(".treciKorak").removeClass("hidden");
	$(".emailInput3").focus();
	return false;
  }
});

$(".treciKorakClick").click(function(){
	SaveMail();
	$(".treciKorak").addClass("hidden");
	$(".prviKorak").removeClass("hidden");
	$(".emailInput3").focus();
	$(".emailInput").val("");
});

$('.emailInput3').keypress(function (e) {
  if (e.which == 13) {
	  SaveMail();
	$(".treciKorak").addClass("hidden");
	$(".prviKorak").removeClass("hidden");
	$(".emailInput3").focus();
	$(".emailInput").val("");
	return false;
  }
});


setInterval(function(){
	if($(window).width() <= 1440){
		$(".weAre").addClass("hidden");
		$(".weAre2").removeClass("hidden");
	} else{
		$(".weAre2").addClass("hidden");
		$(".weAre").removeClass("hidden");
	}
},50);

