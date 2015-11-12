//
// Author: Hanni Abu
// URL: http://hanniabu.com
//


// Loads the code to generate a preview for the button component page
function loadNavbarComponent(previewID) {
	var dir = componentSettings[pageName],
	color = dir['color'],
	position = dir['position'],
	branding = dir['branding'],
	brandingPos = dir['branding-position'],
	hasLinks = dir['link'],
	hasDropdown = dir['dropdown'],
	linkPos = dir['link-position'],
	hasSearch = dir['search'],
	searchPos = dir['search-position'],
	nav = '<nav class="navbar ' + color + ' ' + position + '">',
	brandingLogo,
	brandingText,
	linkPosition = '<ul class="nav navbar-nav ' + linkPos + '">',
	link,
	dropdown,
	search,
	brand,
	navbar,
	code;
	if (brandingPos == 'navbar-left') {
		brandingLogo = '\n\t\t\t<a class="navbar-brand ' + brandingPos + '" href="#">\n\t\t\t\t<img alt="Logo" src="...">\n\t\t\t</a>';
		brandingText = '\n\t\t\t<a class="navbar-brand ' + brandingPos + '" href="#">Brand</a>';
	} else if (brandingPos == 'navbar-right') {
		brandingLogo = '\n\t\t<a class="navbar-brand ' + brandingPos + '" href="#">\n\t\t\t<img alt="Logo" src="...">\n\t\t</a>';
		brandingText = '\n\t\t<a class="navbar-brand ' + brandingPos + '" href="#">Brand</a>';
	};
	if (hasLinks == 'yes') {
		link = '\n\t\t\t\t<li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>\n\t\t\t\t<li><a href="#">Link</a></li>';
	} else if (hasLinks == 'no') {
		link = '';
	};
	if (hasDropdown == 'yes') {
		dropdown = '\n\t\t\t\t<li class="dropdown">\n\t\t\t\t\t<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>\n\t\t\t\t\t<ul class="dropdown-menu">\n\t\t\t\t\t\t<li><a href="#">Link</a></li>\n\t\t\t\t\t\t<li><a href="#">Another Link</a></li>\n\t\t\t\t\t\t<li><a href="#">Something Else Here</a></li>\n\t\t\t\t\t\t<li role="separator" class="divider"></li>\n\t\t\t\t\t\t<li><a href="#">Separated link</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</li>'
	} else if (hasDropdown == 'no') {
		dropdown = '';
	};
	if (hasSearch == 'yes') {
		search = '\n\t\t\t<form class="navbar-form ' + searchPos + '" role="search">\n\t\t\t\t<div class="form-group">\n\t\t\t\t\t<input type="text" class="form-control" placeholder="Search">\n\t\t\t\t</div>\n\t\t\t\t<button type="submit" class="btn btn-default">Submit</button>\n\t\t\t</form>'
	} else if (hasSearch == 'no') {
		search = '';
	};
	if (branding == 'text') {
		brand = brandingText
	} else if (branding == 'logo') {
		brand = brandingLogo
	} else if (branding == 'logo-text') {
		brand = brandingLogo + brandingText
	} else if (branding == 'text-logo') {
		brand= brandingText + brandingLogo
	} else if (branding == '') {
		brand = '';
	};
	if (brandingPos == 'navbar-left') {
		navbar = nav + '\n\t<div class="container-fluid">\n\t\t<!-- Brand and toggle get grouped for better mobile display -->\n\t\t<div class="navbar-header">\n\t\t\t<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false">\n\t\t\t\t<span class="sr-only">Toggle navigation</span>\n\t\t\t\t<span class="icon-bar"></span>\n\t\t\t\t<span class="icon-bar"></span>\n\t\t\t\t<span class="icon-bar"></span>\n\t\t\t</button>' + brand + '\n\t\t</div>\n\t\t<!-- Collect the nav links, forms, and other content for toggling -->\n\t\t<div class="collapse navbar-collapse" id="navbar-collapse-1">\n\t\t\t' + linkPosition + link + dropdown + '\n\t\t\t</ul>' + search + '\n\t\t</div><!-- /.navbar-collapse -->\n\t</div><!-- /.container-fluid -->\n</nav>';
	} else if (brandingPos == 'navbar-right') {
		navbar = nav + '\n\t<div class="container-fluid">\n\t\t<!-- Brand and toggle get grouped for better mobile display -->' + brand + '\n\t\t<div class="navbar-header">\n\t\t\t<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false">\n\t\t\t\t<span class="sr-only">Toggle navigation</span>\n\t\t\t\t<span class="icon-bar"></span>\n\t\t\t\t<span class="icon-bar"></span>\n\t\t\t\t<span class="icon-bar"></span>\n\t\t\t</button>\n\t\t</div>\n\t\t<!-- Collect the nav links, forms, and other content for toggling -->\n\t\t<div class="collapse navbar-collapse" id="navbar-collapse-1">\n\t\t\t' + linkPosition + link + dropdown + '\n\t\t\t</ul>' + search + '\n\t\t</div><!-- /.navbar-collapse -->\n\t</div><!-- /.container-fluid -->\n</nav>';
	};

	code = navbar;
	$(previewID).html(code)
};
