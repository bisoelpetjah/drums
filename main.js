var selectednavbutton;
var selectedsubnavbutton;

$(document).ready(function() {
	$('#main').load('home.html');
	// selectednavbutton = '1';
	// selectedsubnavbutton = '1';
	// updateNavigation();
});

function loadPage(pagenum) {
	var sliderdiv;
	var pos_x;
	if (pagenum == '1' || pagenum == '2' || pagenum == '6') {
		switch (pagenum) {
			case ('1') : {
				if (selectednavbutton != '1') {
					pos_x = - $(window).width();
					sliderdiv = $('<div id="slider" style="left:' + pos_x + 'px"></div>');
					sliderdiv.load('home.html');
					$('#main').after(sliderdiv);
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
				selectedsubnavbutton = '1';
				break;
			}
			case ('2') : {
				if (selectedsubnavbutton != '3') {
					if (pagenum < selectedsubnavbutton) {
						pos_x = - $(window).width();
					}
					else {
						pos_x = $(window).width();
					}
					sliderdiv = $('<div id="slider" style="left:' + pos_x + 'px"></div>');
					sliderdiv.load('test1-1.html');
					$('#main').after(sliderdiv);
					if (pagenum < selectedsubnavbutton) {
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
					else {
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
					selectedsubnavbutton = '3';
				}
				break;
			}
			case ('6') : {
				if (selectedsubnavbutton != '7') {
					if (pagenum < selectedsubnavbutton) {
						pos_x = - $(window).width();
					}
					else {
						pos_x = $(window).width();
					}
					sliderdiv = $('<div id="slider" style="left:' + pos_x + 'px"></div>');
					sliderdiv.load('test2-1.html');
					$('#main').after(sliderdiv);
					if (pagenum < selectedsubnavbutton) {
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
					else {
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
					selectedsubnavbutton = '7';
				}
				break;
			}
		}
		selectednavbutton = pagenum;
	}
	else {
		if (selectedsubnavbutton != pagenum) {
			if (pagenum < selectedsubnavbutton) {
				pos_x = - $(window).width();
			}
			else {
				pos_x = $(window).width();
			}
			sliderdiv = $('<div id="slider" style="left:' + pos_x + 'px"></div>');
			switch (pagenum) {
				case ('3') : {
					sliderdiv.load('test1-1.html');
					selectednavbutton = '2';
					break;
				}
				case ('4') : {
					sliderdiv.load('test1-2.html');
					selectednavbutton = '2';
					break;
				}
				case ('5') : {
					sliderdiv.load('test1-3.html');
					selectednavbutton = '2';
					break;
				}
				case ('7') : {
					sliderdiv.load('test2-1.html');
					selectednavbutton = '3';
					break;
				}
				case ('8') : {
					sliderdiv.load('test2-2.html');
					selectednavbutton = '3';
					break;
				}
			}
			$('#main').after(sliderdiv);
			if (pagenum < selectedsubnavbutton) {
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
			else {
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
			selectedsubnavbutton = pagenum;
		}
	}
	updateNavigation();
}

function updateNavigation() {
	switch (selectednavbutton) {
		case ('1') : {
			$('#subnavbar').hide();
			break;
		}
		case ('2') : {
			$('#subnavbar').show();
			$('#3').show();
			$('#4').show();
			$('#5').show();
			$('#7').hide();
			$('#8').hide();
			break;
		}
		case ('6') : {
			$('#subnavbar').show();
			$('#3').hide();
			$('#4').hide();
			$('#5').hide();
			$('#7').show();
			$('#8').show();
			break;
		}
	}
	var buttons = $('.navbutton');
	for (i = 0; i < buttons.length; i++) {
		if (selectednavbutton == buttons[i].id) {
			buttons[i].src = 'pics/test_selected.jpg';
		}
		else {
			buttons[i].src = 'pics/test.jpg';
		}
	}
	buttons = $('.subnavbutton');
	for (i = 0; i < buttons.length; i++) {
		if (selectedsubnavbutton == buttons[i].id) {
			buttons[i].src = 'pics/test_selected.jpg';
		}
		else {
			buttons[i].src = 'pics/test.jpg';
		}
	}
}