//
// Author: Hanni Abu
// URL: http://hanniabu.com
//


var pageName, // current pages name all lowercase: navbar
	pageTitle, // current page name first letter capped: Navbar
	page = '#home-page', // page ID selector all lowercase: #navbabar-page
	windowResizeCount = 0;



// Loads last viewed page or home
$(document).ready(function() {
		// Testing
		log('Document Ready Initiated...','start');
	setPageName();

	loadPage();

	setPageLinkActive();
	setTabTitle();
	checkScreenWidth();
		// Testing
		log('---Document Ready Complete', 'end');
});


// Check to see if on mobile or not
function checkScreenWidth() {
	if ($(window).width() < 767 & windowResizeCount == 0) {
		$('#small-screen-notice').modal('show')
		windowResizeCount++;
	};
	windowResizeCount == 0 ? log('---Success: Page Width Acceptable', 'success') : log('---Error: Page Width Too Small', 'error');
};
// Capitalizes first letter of a string
function capFirst(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}
// Keep page link highlighted
function setPageLinkActive() {
	var pagePound = '#' + pageName;
	$('.page-link').removeClass('active');
	$(pagePound).addClass('active');
		// Testing
		$(pagePound).hasClass('active') == true ? log('---Success: Page Link Highlighted', 'success') : log('---Error: Page Link Not Highlighted', 'error');
}
// Loads page from link or last viewed page
function loadPage() {
	if (pageName == undefined) {
			// Testing
			log('---First Time Visitor', 'warning');
		changePageView('#home');
			// Testing
			$('#home-page').hasClass('hide') == false ? log('---Success: Home Page Visible', 'success') : log('---Error: Home Page Not Visible', 'error');
	} else {
			// Testing
			log('---Recurring Visitor');
			log('---Loading ' + capFirst(pageName));
		changePageView('#'+pageName);
	}
}
// Show page title in tab
function setTabTitle() {
	pageTitle = capFirst(pageName);
	$('title').html(pageTitle + ' | Velcro');
		// Testing
		$('title').html().split(' ').length == 3 ? log('---Success: Tab Title Set', 'success') : log('---Error: Tab Title Not Set', 'error');

}
// Hide all pages
function hideAllPages() {
	$('.page').addClass('hide');
		// Testing
		$('.page').hasClass('hide') == true ? log('---Success: All Pages Are Hidden', 'success') : log('---Error: Pages Are Not Hidden', 'error');
}
// Show clicked-link page and hides all other pages
function changePageView(pagePound) {
	hideAllPages();
	pageName = $(pagePound).attr('id');
	setPage();
	showCurrentPage();
	loadComponent();
	getHTML();
		// Testing
		$(pagePound).hasClass('hide') == false ? log('---Success: Current Page Visible', 'success') : log('---Error: Current Page Not Visible', 'error');
}
// Unhide current page
function showCurrentPage() {
	$(page).removeClass('hide');
}
// Stores last viewed page in localStorage
function savePageName() {
	localStorage.setItem('page_name',pageName);
}
// Retrieves last viewed page in localStorage
function setPageName() {
	pageName = localStorage.getItem('page_name');
}
// Defines current page name
function setPage() {
	page = '#' + pageName + '-page';
}
// Insert elements' html into current pages html code section
function getHTML() {
	if ((this.tagName != "ul") && (this.tagName != "li")) {
		var preview = '#' + pageName + '-preview';
		var code = $(preview).html();
		var htmlID = '#' + pageName + '-html';
		$(htmlID).text(code);
	}
		//Testing
		code == $(htmlID).text() ? log("---Success: Preview's HTML Placed In HTML Section" ,'success') : log("---Error: Preview's HTML Not Placed in HTML Section",'error')
}
// Determines which component to load
function loadComponent() {
	var code,
	previewID = '#' + pageName + '-preview';
	if (pageName == 'button') {
		loadButtonComponent(previewID);
	} else if (pageName == 'navbar') {
		loadNavbarComponent(previewID);
	};
		// Testing
		$(previewID).text().trim() == ('Preview') ? log("---Error: Component Preview Not Loaded" ,'error') : log("---Success: Component Preview Loaded",'success')
}