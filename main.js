var loadedPage;
var timer;

var home1, home2, home3, drumset;
var loader;
var imagetoload = 18;

window.onload = function() {
	loader = $('<div> </div>');
	loader.bind('loaded',function() {
		imagetoload--;
	});
	loader.bind('finishedloading',function() {
		$('#loadingpage').animate({
			opacity:'0.0'
		},1000,function() {
			$('#loadingpage').remove();
		});
		home1.attr('id','main');
		$('#main').replaceWith(home1);
		$('#homenum1').css({
			opacity:1
		});
		$('#homenum2').css({
			opacity:0.5
		});
		$('#homenum3').css({
			opacity:0.5
		});
		loadedPage = 1;
		slideshow();
		updateNavigation();
	});
	loadAsset();
};

function loadAsset() {
	var img = new Array();
	img[0] = 'pics/Chrysanthemum.jpg';
	img[1] = 'pics/Desert.jpg';
	img[2] = 'pics/Hydrangeas.jpg';
	img[3] = 'pics/Jellyfish.jpg';
	img[4] = 'pics/Home/Click for details.png';
	img[5] = 'pics/Home/Click for details hover.png';
	img[6] = 'pics/Home/Hover FB.png';
	img[7] = 'pics/Home/Hover Twitter.png';
	img[8] = 'pics/Home/Overview 1.png';
	img[9] = 'pics/Home/Overview 2.png';
	img[10] = 'pics/Home/Overview 3.png';
	img[11] = 'pics/Home/Menu/about hover.png';
	img[12] = 'pics/Home/Menu/Artist hover.png';
	img[13] = 'pics/Home/Menu/Contact hover.png';
	img[14] = 'pics/Home/Menu/Drumset hover.png';
	img[15] = 'pics/Home/Menu/forum hover.png';
	img[16] = 'pics/Home/Menu/home hover.png';
	img[17] = 'pics/Home/Menu/tips hover.png';
	for (i = 0; i < 18; i++) {
		var temp = new Image();
		temp.onload = function() {
			loader.trigger('loaded');
		};
		temp.src = img[i];
	}
	home1 = $('<div></div>');
	home2 = $('<div></div>');
	home3 = $('<div></div>');
	drumset = $('<div></div>');
	home1.load('home1.html');
	home2.load('home2.html');
	home3.load('home3.html');
	drumset.load('drumset.html');
	waitFinishedLoading();
}

function waitFinishedLoading() {
	if (imagetoload > 0) {
		setTimeout(waitFinishedLoading,50);
	}
	else {
		loader.trigger('finishedloading');
	}
}

function loadPage(pagenum) {
	if (pagenum != loadedPage) {
		clearInterval(timer);
		slideshow();
		switch (pagenum) {
			case (1) : {
				page = home1;
				$('#homenumber').show();
				$('#homenum1').css({
					opacity:1
				});
				$('#homenum2').css({
					opacity:0.5
				});
				$('#homenum3').css({
					opacity:0.5
				});
				break;
			}
			case (2) : {
				page = home2;
				$('#homenumber').show();
				$('#homenum1').css({
					opacity:0.5
				});
				$('#homenum2').css({
					opacity:1
				});
				$('#homenum3').css({
					opacity:0.5
				});
				break;
			}
			case (3) : {
				page = home3;
				$('#homenumber').show();
				$('#homenum1').css({
					opacity:0.5
				});
				$('#homenum2').css({
					opacity:0.5
				});
				$('#homenum3').css({
					opacity:1
				});
				break;
			}
			case (4) : {
				page = drumset;
				$('#homenumber').hide();
			}
		}
		if (pagenum < loadedPage) {
			loadFromLeft(page);
		}
		else {
			loadFromRight(page);
		}
		loadedPage = pagenum;
	}
	updateNavigation();
}

function slideshow(){
	timer = setInterval(function() {
		if (loadedPage == 1){
			loadedPage = 2;		
			loadFromRight(home2);
			$('#homenum1').css({
				opacity:0.5
			});
			$('#homenum2').css({
				opacity:1
			});
			$('#homenum3').css({
				opacity:0.5
			});
		}
		else if (loadedPage == 2) {
			loadedPage = 3;		
			loadFromRight(home3);
				$('#homenum1').css({
					opacity:0.5
				});
				$('#homenum2').css({
					opacity:0.5
				});
				$('#homenum3').css({
					opacity:1
				});
		}
		else if (loadedPage == 3) {
			loadedPage = 1;		
			loadFromLeft(home1);
			$('#homenum1').css({
				opacity:1
			});
			$('#homenum2').css({
				opacity:0.5
			});
			$('#homenum3').css({
				opacity:0.5
			});
		}
	}, 5000);
}

function loadFromLeft(page) {
	page.attr('id','slider');
	page.attr('style','left:-' + $(window).width() + 'px');
	$('#main').after(page);
	$('#main').animate({
		left:'+=' + $(window).width()
	},800);
	$('#slider').animate({
		opacity:'1.0',
		left:'+=' + $(window).width()
	},800,function() {
		$('#main').remove();
		$('#slider').attr('id','main');
		$('#main').removeAttr('style');
	});
}

function loadFromRight(page) {
	page.attr('id','slider');
	page.attr('style','left:' + $(window).width() + 'px');
	$('#main').after(page);
	$('#main').animate({
		left:'-=' + $(window).width()
	},800);
	$('#slider').animate({
		opacity:'1.0',
		left:'-=' + $(window).width()
	},800,function() {
		$('#main').remove();
		$('#slider').attr('id','main');
		$('#main').removeAttr('style');
	});
}

function updateNavigation() {
	switch (loadedPage) {
		case (1) : {
			$('#selhome').attr('style','visibility:visible');
			$('#seldrum').attr('style','visibility:hidden');
			$('#selartist').attr('style','visibility:hidden');
			$('#seltips').attr('style','visibility:hidden');
			$('#selforum').attr('style','visibility:hidden');
			$('#selcontact').attr('style','visibility:hidden');
			$('#selabout').attr('style','visibility:hidden');
			break;
		}
		case (2) : {
			$('#selhome').attr('style','visibility:visible');
			$('#seldrum').attr('style','visibility:hidden');
			$('#selartist').attr('style','visibility:hidden');
			$('#seltips').attr('style','visibility:hidden');
			$('#selforum').attr('style','visibility:hidden');
			$('#selcontact').attr('style','visibility:hidden');
			$('#selabout').attr('style','visibility:hidden');
			break;
		}
		case (3) : {
			$('#selhome').attr('style','visibility:visible');
			$('#seldrum').attr('style','visibility:hidden');
			$('#selartist').attr('style','visibility:hidden');
			$('#seltips').attr('style','visibility:hidden');
			$('#selforum').attr('style','visibility:hidden');
			$('#selcontact').attr('style','visibility:hidden');
			$('#selabout').attr('style','visibility:hidden');
			break;
		}
		case (4) : {
			$('#selhome').attr('style','visibility:hidden');
			$('#seldrum').attr('style','visibility:visible');
			$('#selartist').attr('style','visibility:hidden');
			$('#seltips').attr('style','visibility:hidden');
			$('#selforum').attr('style','visibility:hidden');
			$('#selcontact').attr('style','visibility:hidden');
			$('#selabout').attr('style','visibility:hidden');
			break;
		}
	}
}