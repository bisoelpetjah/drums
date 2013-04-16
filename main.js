var selectednavbutton;
var selectedsubnavbutton;

$(document).ready(function() {
	$('#main').load('home.html #content');
	loadPage('home');
});

function loadPage(pagename) {
	selectednavbutton = pagename;
	if (pagename == 'home') {
		$('#subnavbar').hide();
		var targetname = selectednavbutton + '.html #content';
	}
	else {
		$('#subnavbar').show();
		if (pagename == 'test1') {
			selectedsubnavbutton = 'test1-1';
		}
		else if (pagename == 'test2') {
			selectedsubnavbutton = 'test2-1';
		}
		else {
			selectedsubnavbutton = pagename;
			selectednavbutton = pagename.substring(0,5);
		}
		var targetname = selectedsubnavbutton + '.html #content';
	}
	$('#main').load(targetname);
	updateNavigation();
}

function updateNavigation() {
	var buttons = $('.navbutton');
	for (i = 0; i < buttons.length; i++) {
		var button = buttons[i];
		if (button.title.toLowerCase() == selectednavbutton) {
			button.src = 'pics/test_selected.jpg';
		}
		else {
			button.src = 'pics/test.jpg';
		}
	}
	if (selectednavbutton != 'home') {
		buttons = $('.subnavbutton');
		for (i = 0; i < buttons.length; i++) {
			var button = buttons[i];
			if (button.title.toLowerCase().indexOf(selectednavbutton) !== -1) {
				button.parentNode.parentNode.style.display = 'inline';
				if (button.title.toLowerCase() == selectedsubnavbutton) {
					button.src = 'pics/test_selected.jpg';
				}
				else {
					button.src = 'pics/test.jpg';
				}
			}
			else {
				button.parentNode.parentNode.style.display = 'none';
			}
		}
	}
}