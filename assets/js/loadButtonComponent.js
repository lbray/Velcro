//
// Author: Hanni Abu
// URL: http://hanniabu.com
//


// Loads the code to generate a preview for the button component page
function loadButtonComponent(previewID) {
	var dir = componentSettings[pageName],
	text = dir['text'],
	size = dir['size'],
	color = dir['color'],
	tag = dir['type'],
	state = dir['state'],
	width = dir['width'],
	hasIcon = dir['icon'],
	iconPos = dir['position'],
	glyph = 'glyphicon-'+dir['glyphicon'],
	classes,
	span,
	code;

	if (width && state) {
		classes = 'class="btn '+size+' '+color+' '+width+' '+state+'"';
	} else if (width) {
		classes = 'class="btn '+size+' '+color+' '+width+'"';
	} else if (state) {
		classes = 'class="btn '+size+' '+color+' '+state+'"';
	} else {
		classes = 'class="btn '+size+' '+color+'"';
	};
	if (hasIcon == 'yes') {
		span = '<span class="glyphicon '+glyph+'"></span>'
	};
	if (tag == 'link') {
		if (hasIcon == 'yes' && iconPos == 'left') {
			code = '<a href="#" '+classes+'>'+span+' '+text+"</a>";
		} else if (hasIcon == 'yes' && iconPos == 'right') {
			code = '<a href="#" '+classes+'>'+text+' '+span+"</a>";
		} else {
			code = '<a href="#" '+classes+'>'+text+"</a>";
		};
	} else if (tag == 'button') {
		if (hasIcon == 'yes' && iconPos == 'left') {
			code = '<button '+classes+'>'+span+' '+text+"</button>";
		} else if (hasIcon == 'yes' && iconPos == 'right') {
			code = '<button '+classes+'>'+text+' '+span+"</button>";
		} else {
			code = '<button '+classes+'>'+text+"</button>";
		};
	} else if (tag == 'input' || tag == 'submit') {
		code ='<input type="'+tag+'" '+classes+'value="'+text+'"/>'
	};
	$(previewID).html(code)
	$('#button-preview2').html(code)
}