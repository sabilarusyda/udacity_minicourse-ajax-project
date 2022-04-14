
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
	var yourApiKey = '';
	var streetStr = $('#street').val();
	var cityStr = $('#city').val();
	var address = streetStr + ', ' + cityStr;
	
	$greeting.text('So, you want to live at ' + address + '?');
	
	var streetviewUrl = 'https://maps.googleapis.com/maps/api/streetview?size=600x400&key=' + yourApiKey + '&location=' + address + '';
	$body.append('<img class="bgimg" src="' + streetviewUrl + '">');
	
	// Example 01: 
	// Street: 24 willie mays plaza
	// City: san fransisco, ca
	// SUBMIT

    return false;
};

$('#form-container').submit(loadData);

// loadData();
