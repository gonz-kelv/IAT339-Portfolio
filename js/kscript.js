
// Once the document is ready
$(document).ready( function() {

	// Full bleed of color in load
	$('.Color-Bleed').fadeOut('slow');
	
	$('.Nav.Top').on('click', function(){	
		// Call this function to move content upwards
		upContent();
	});
	
	$('.Nav.Left').on('click', function(){
		// Call this function to move content to the left
		leftContent();
	});
	
	$('.Nav.Right').on('click', function(){
		// Call this function to move content to the right
		rightContent();
	});
	
	$('.Nav.Bottom').on('click', function(){
		// Call this function to move content downwards
		downContent();
	});
	
});

// Add event listener for arrow keys
$(document).keydown(function(e) {
	
	switch(e.which){
		case 37:
			// Call this function to move content to the left
			leftContent();
		break;
		case 38:
			// Call this function to move content upwards
			upContent();
		break;
		case 39:
			// Call this function to move content to the right
			rightContent();
		break;
		case 40:
			// Call this function to move content downwards
			downContent();
		break;
		default: return;
	}

});

function upContent(){
	
	// Move Navigation to their side
	navFixPos();

	// Show the right content depending on what Navigation button was clicked
	$('.Content-Me').show().animate({
		'padding-top':'15%'
	},1000);
	
	// Change color of navigation button
	$('#NavButton1').css({'background-color': '#D3CEAA', color: "#8E001C"});
	
	// Hide the content not needed
	$('.Content-Resume').hide().attr('style','');
	$('.Content-Work').hide().attr('style','');
	$('.Content-Contact').hide().attr('style','');
	
}

function leftContent(){
	
	// Move Navigation to their side
	navFixPos();
	
	// Change color of navigation button
	$('#NavButton2').css({'background-color': '#D3CEAA', color: "#8E001C"});
	
	$('.Content-Resume').show().animate({
		'padding-left':0
	},1000);
	
	$('.Content-Me').hide().attr('style','');
	$('.Content-Work').hide().attr('style','');
	$('.Content-Contact').hide().attr('style','');
	
}

function rightContent(){
	
	// Move Navigation to their side
	navFixPos();
	
	// Change color of navigation button
	$('#NavButton3').css({'background-color': '#D3CEAA', color: "#8E001C"});
	
	$('.Content-Work').show().animate({
		'width':'100%'
	},1000);
	
	$('.Content-Me').hide().attr('style','');
	$('.Content-Resume').hide().attr('style','');
	$('.Content-Contact').hide().attr('style','');
	
}

function downContent(){
	
	// Move Navigation to their side
	navFixPos();
	
	// Change color of navigation button
	$('#NavButton4').css({'background-color': '#D3CEAA', color: "#8E001C"});
	
	$('.Content-Contact').show().animate({
		'margin-top':'20%'
	},1000);
	
	$('.Content-Me').hide().attr('style','');
	$('.Content-Work').hide().attr('style','');
	$('.Content-Resume').hide().attr('style','');
	
}

function navFixPos(){
	
	$('.Nav.Top').animate({
		'margin-top':'1%',
		'margin-bottom':'20%',
		'top': 0
	}, 1000);
	
	$('.Nav.Left').animate({
		'margin-left':0,
		'left':0
	}, 1000);
	
	$('.Nav.Right').animate({
		'margin-right':0,
		'right':0
	}, 1000);
	
	$('.Nav.Bottom').animate({
		'margin-top': '48%'
	},1000);
	
	// Reset any style change
	$('#NavButton1').attr('style','');
	$('#NavButton2').attr('style','');
	$('#NavButton3').attr('style','');
	$('#NavButton4').attr('style','');
	
}