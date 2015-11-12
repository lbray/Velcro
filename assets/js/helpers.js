// Highlights menu/navbar links
$(document).on('click','.navbar-menu-link', function() {
	$('.navbar-menu-link').parent().removeClass('active');
	var name = $(this).attr('data-link-id');
	var nameID = '#'+name;
	if ($(this).parent().prop('tagName') == 'LI') {
		$(nameID).parent().addClass('active');
	} else {
		$(nameID).addClass('active');
	};
})

// *Requires jQuery
// Setup: 
// - Place this snippet in your javascript file
// - Add the class 'navbar-menu-link' to each anchor element(<a>)
// - Give each anchor tag an ID
// - Add the attribute 'data-link-id' to each anchor tag
// - The value of the 'data-link-id' attribute should the same the the ID for that element
// How It Works:
// - When a link with the 'menu-link' class is clicked, the class 'active' will be added to the direct parent list element(<li>)
// - If the link does not have list element as it's direct parent, the class 'active' will be added to the clicked anchor element
// Tips:
// - This is intended for single page websites
// Example:
// 	<nav class="navbar navbar-default">
// 	  <div class="container-fluid">
// 	    <div class="navbar-header">
// 	      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
// 	        <span class="sr-only">Toggle navigation</span>
// 	        <span class="icon-bar"></span>
// 	        <span class="icon-bar"></span>
// 	        <span class="icon-bar"></span>
// 	      </button>
// 	      <a class="navbar-brand" href="#">Brand</a>
// 	    </div>
// 	    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
// 	      <ul class="nav navbar-nav">
// 	        <li class="active"><a href="#" class="menu-link" id="link1" data-link-id="link1">Link <span class="sr-only">(current)</span></a></li>
// 	        <li><a href="#" class="menu-link" id="link2" data-link-id="link2">Link</a></li>
// 	        <li class="dropdown">
// 	          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
// 	          <ul class="dropdown-menu">
// 	            <li><a href="#" class="menu-link"  id="link3" data-link-id="link3">Action</a></li>
// 	            <li><a href="#" class="menu-link"  id="link4" data-link-id="link4">Another action</a></li>
// 	            <li><a href="#" class="menu-link"  id="link5" data-link-id="link5">Something else here</a></li>
// 	            <li role="separator" class="divider"></li>
// 	            <li><a href="#" class="menu-link"  id="link6" data-link-id="link6">Separated link</a></li>
// 	            <li role="separator" class="divider"></li>
// 	            <li><a href="#" class="menu-link"  id="link7" data-link-id="link7">One more separated link</a></li>
// 	          </ul>
// 	        </li>
// 	      </ul>
// 	    </div><!-- /.navbar-collapse -->
// 	  </div><!-- /.container-fluid -->
// 	</nav>

// -------------------------------------------------------------------------------------------------

// Closes the navbar menu when a link is clicked
$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});
// *Requires jQuery
// Setup: 
// - Place this snippet in your javascript file
// How It Works:
// - When the navbar menu is expanded in smaller screens, clicking a menu link will collapse the navbar menu
// Tips:
// - This is intended for single page websites