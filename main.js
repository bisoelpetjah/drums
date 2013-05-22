var loadedPage;
var timer;

var home1, home2, home3, drumshell, material, bearing, hardware;
var loader;
var assettoload = 32;
var progress = 0;

var materialpage = 1;

window.onload = function() {
	loader = $('<div> </div>');
	$('#percent0').show();
	loader.bind('loaded',function() {
		progress++;
		if (progress / assettoload == 1) {
			$('#percent100').show();
		}
		else if (progress / assettoload >= 0.9) {
			$('#percent90').show();
		}
		else if (progress / assettoload >= 0.8) {
			$('#percent80').show();
		}
		else if (progress / assettoload >= 0.7) {
			$('#percent70').show();
		}
		else if (progress / assettoload >= 0.6) {
			$('#percent60').show();
		}
		else if (progress / assettoload >= 0.5) {
			$('#percent50').show();
		}
		else if (progress / assettoload >= 0.4) {
			$('#percent40').show();
		}
		else if (progress / assettoload >= 0.3) {
			$('#percent30').show();
		}
		else if (progress / assettoload >= 0.2) {
			$('#percent20').show();
		}
		else if (progress / assettoload >= 0.1) {
			$('#percent10').show();
		}
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
	img[0] = 'pics/Home/BG 1.jpg';
	img[1] = 'pics/Home/BG 1.jpg';
	img[2] = 'pics/Home/BG 1.jpg';
	img[3] = 'pics/Home/BG 1.jpg';
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
	img[14] = 'pics/Home/Menu/drumset hover.png';
	img[15] = 'pics/Home/Menu/forum hover.png';
	img[16] = 'pics/Home/Menu/home hover.png';
	img[17] = 'pics/Home/Menu/tips hover.png';
	img[18] = 'pics/Home/Menu Drumset/drumshell.png';
	img[19] = 'pics/Home/Menu Drumset/drumshell hover.png';
	img[20] = 'pics/Home/Menu Drumset/hardware.png';
	img[21] = 'pics/Home/Menu Drumset/hardware hover.png';
	img[22] = 'pics/Home/Menu Drumset/Drumhead.png';
	img[23] = 'pics/Home/Menu Drumset/Drumhead hover.png';
	img[24] = 'pics/Home/Menu Drumset/setup.png';
	img[25] = 'pics/Home/Menu Drumset/setup hover.png';
	img[26] = 'pics/Home/Menu Drumset/making.png';
	img[27] = 'pics/Home/Menu Drumset/making hover.png';
	img[28] = 'pics/Drumset/BGdrumshell.png';
	img[29] = 'pics/Drumset/Drumshell/keterangan.png';
	img[30] = 'pics/Drumset/Drumshell/Material/up.png';
	img[31] = 'pics/Drumset/Drumshell/Material/down.png';
	for (i = 0; i < assettoload; i++) {
		var temp = new Image();
		temp.onload = function() {
			loader.trigger('loaded');
		};
		temp.src = img[i];
	}
	home1 = $('<div></div>');
	home2 = $('<div></div>');
	home3 = $('<div></div>');
	drumshell = $('<div></div>');
	material = $('<div></div>');
	bearing = $('<div></div>');
	hardware = $('<div></div>');
	birch = $('<div></div>');
	home1.load('home1.html');
	home2.load('home2.html');
	home3.load('home3.html');
	drumshell.load('drumshell.html');
	material.load('material.html');
	bearing.load('bearing_edges.html');
	hardware.load('hardware.html');
	waitFinishedLoading();
}

function waitFinishedLoading() {
	if (progress < assettoload) {
		setTimeout(waitFinishedLoading,50);
	}
	else {
		loader.trigger('finishedloading');
	}
}

function loadPage(pagenum) {
	if (pagenum != loadedPage) {
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
				$('#drumsetbottomnav').animate({
					opacity:'0.0'
				},function() {
					$('#drumsetbottomnav').hide();
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
				page = drumshell;
				$('#homenumber').hide();
				setTimeout(function() {
					$('#drumsetbottomnav').show();
					$('#drumsetbottomnav').animate({
						opacity:'1.0'
					},800);
				},800);
				break;
			}
			case (5) : {
				page = material;
				$(page).find('#full').css('top','0px');
				materialpage = 1;
				$('#homenumber').hide();
				break;
			}
			case (6) : {
				page = bearing;
				$(page).find('#full').css('left','0px');
				break;
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
	clearInterval(timer);
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

function loadFromBottom(page) {
	page.attr('id','slider');
	page.attr('style','top:-' + $(window).height() + 'px');
	$('#main').after(page);
	$('#main').animate({
		top:'+=' + $(window).height()
	},800);
	$('#slider').animate({
		opacity:'1.0',
		top:'+=' + $(window).height()
	},800,function() {
		$('#main').remove();
		$('#slider').attr('id','main');
		$('#main').removeAttr('style');
	});
}

function loadFromTop(page) {
	page.attr('id','slider');
	page.attr('style','top:' + $(window).height() + 'px');
	$('#main').after(page);
	$('#main').animate({
		top:'-=' + $(window).height()
	},800);
	$('#slider').animate({
		opacity:'1.0',
		top:'-=' + $(window).height()
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
			$('#selmaterial').show();
			$('#selbearing').show();
			$('#selthickness').show();
			$('#selsize').show();
			$('#selfinishing').show();
			break;
		}
		case (5) : {
			$('#selhome').attr('style','visibility:hidden');
			$('#seldrum').attr('style','visibility:visible');
			$('#selartist').attr('style','visibility:hidden');
			$('#seltips').attr('style','visibility:hidden');
			$('#selforum').attr('style','visibility:hidden');
			$('#selcontact').attr('style','visibility:hidden');
			$('#selabout').attr('style','visibility:hidden');
			$('#selmaterial').hide();
			$('#selbearing').show();
			$('#selthickness').show();
			$('#selsize').show();
			$('#selfinishing').show();
			break;
		}
		case (6) : {
			$('#selhome').attr('style','visibility:hidden');
			$('#seldrum').attr('style','visibility:visible');
			$('#selartist').attr('style','visibility:hidden');
			$('#seltips').attr('style','visibility:hidden');
			$('#selforum').attr('style','visibility:hidden');
			$('#selcontact').attr('style','visibility:hidden');
			$('#selabout').attr('style','visibility:hidden');
			$('#selmaterial').show();
			$('#selbearing').hide();
			$('#selthickness').show();
			$('#selsize').show();
			$('#selfinishing').show();
			break;
		}
	}
}

function materialNext() {
	if (materialpage == 1) {
		materialpage = 2;
		$('#full').animate({
			top:'-=' + $(window).height()
		},800) ;
	}
}

function materialPrev() {
	if (materialpage == 2) {
		materialpage = 1;
		$('#full').animate({
			top:'+=' + $(window).height()
		},800) ;
	}
}