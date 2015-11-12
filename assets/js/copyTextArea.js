//
// Author: Hanni Abu
// URL: http://hanniabu.com
//


// Selects and copies html text
$('.copy-text-btn').click(function() {
		// Testing
		log('Copy To Clipboard Initiated...','start');
		var success = true;
	// Selecting text to copy
	var select = $('.copy-text-area').select();
		// Testing
		if (select) {
			log('---Success: Text Was Selected','success');
		} else {
			log('---Error: Unable To Select Text','error');
			success = false
		}
	// Copying selected text
	var copy = document.execCommand('copy');
		// Testing
		if (copy == true) {
			log('---Success: Text Was Copied','success');
		} else {
			log('---Error: Unable To Copy Text','error');
			success = false
		}
		if (success) {
			log('---Copy To Clipboard Complete','end');
		} else {
			log('---Copy To Clipboard Failed','error');;
		}
})
