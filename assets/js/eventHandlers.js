//
// Author: Hanni Abu
// URL: http://hanniabu.com
//


// *** On-Ready handler is in main.js ***


// Opens and closes the navbar menu
$('#nav-toggle').click(function() {
	// Opens and closes the navbar menu
	$('#sidebar-menu').toggleClass('toggled');
	// Dims the page content when the navbar menu is open
	$('#content-wrapper').hasClass('dim') == true ? $('#content-wrapper').removeClass('dim') : $('#content-wrapper').addClass('dim');
});
// Closes the sidebar and help box2 when the content area is clicked,  and removes dim on content area
$('#content-wrapper').click(function() {
	// Closes the navbar menu when the page content is clicked
	$('#sidebar-menu').removeClass('toggled');
	// If 2nd helper is visible, it is hidden when navbar menu is closed
	$('#help-box2').addClass('fadeOutRight').removeClass('show fadeIn');
	// If 3rd helper is visible, it is hidden when content is clicked
	if ($('#help-box3').hasClass('show')) {
	$('#help-box3').addClass('fadeOutRight').removeClass('show fadeIn');
	}
	// Removes the dim on page content when the navbar menu is closed
	$('#content-wrapper').removeClass('dim');
});
// Show the 1st helper button when getting started is clicked
$('#get-started').click(function() {
	$('#help-box1').removeClass('fadeOutRight').addClass('show fadeIn');
});
// Hides the 1st helper and 2nd helper button when the navbar toggle is clicked
$('#nav-toggle').click(function() {
	// If 1st helper is visible, 2nd helper is shown when navbar is opened
	if ($('#help-box1').hasClass('show')) {
		$('#help-box2').removeClass('fadeOutRight').addClass('show fadeIn');
	};
	// Closes 3rd helper when navbar is toggled
	if ($('#help-box3').hasClass('show')) {
		$('#help-box3').addClass('fadeOutRight').removeClass('show fadeIn');
	};
	// If 1st helper is visible, it is hidden when navbar is opened
  $('#help-box1').addClass('fadeOutRight').removeClass('show fadeIn');
});
// Hides the 2nd helper and removes dim on content area when a page link is clicked
$('.page-link').click(function() {
	// Hides 2nd helper and shows 3rd when a link in the navbar menu is clicked
	if ($('#help-box2').hasClass('show')) {
		$('#help-box2').addClass('fadeOutRight').removeClass('show fadeIn');
		$('#help-box3').addClass('show fadeIn');
	};
	// Removes the dim on page content when a page link is clicked
	$('#content-wrapper').removeClass('dim');
	// Navebar menu is hidden when a page link is clicked
	$('#sidebar-menu').toggleClass('toggled');
});
// Removes focus from buttons after they're clicked
$('.btn').mouseup(function() {
	$(this).blur();
});
// Prevent default within code preview section
$('.preview').click(function(e) {
	e.preventDefault();
});
// Check if the window is resized
$(window).on('resize', function(){
	setTimeout(function(){
		checkScreenWidth();
	}, 500);
});


// Page View Controller
$('.page-link').click(function() {
		// Testing
		log('Page Change Initiated...' + capFirst($(this).attr('id')) + ' Link Was Clicked','start');
	changePageView(this);
	setPageLinkActive();
	setTabTitle();
	savePageName();
		// Testing
		log('---Page Change Complete','end');
});

// Updates the code previews on a setting change
$("input[type=radio],input[type=text]").bind("change keyup", function() {
		// Testing
		log(capFirst(pageName) + ' Setting Change Initiated...','start');

	var thisName = $(this).attr('name').split('-');
	var thisPage = thisName.shift();
	var thisProp = thisName.join('-');

	// Change the property value
	componentSettings[thisPage][thisProp] = $(this).val();

	// Update the component preview
	loadComponent();
	getHTML();
		// Testing
		log('---Page: ' + thisPage,'info');
		log('---Prop: ' + thisProp,'info');
		log('---New Value: '+$(this).val(),'warning');
		log('---Setting Change Complete','end');
    return false;
});
