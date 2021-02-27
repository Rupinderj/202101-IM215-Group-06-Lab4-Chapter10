$(document).ready(function(){
	$(".thumb-img").on("click",function(){
		var src = "images/medium/"+$(this).attr("src").split("/")[2];
		var text = "<em>"+$(this).attr("alt")+"</em><br>"+$(this).attr("title");
		$("#imgManipulated").find("img").attr("src","").attr("src",src);
		$("#imgManipulated").find("figcaption").html("").html(text);

	});
	$(document).on('input', '#sliderOpacity', function() {
	    var filterVal = 'opacity('+$(this).val()+'%)'; 
	    $("#numOpacity").html("").html($(this).val());
	    $("#imgManipulated img").css('filter',filterVal).css('webkitFilter',filterVal);
	});
	$(document).on('input', '#sliderSaturation', function() {
	    var filterVal = 'saturate('+$(this).val()+'%)';
	    $("#numSaturation").html("").html($(this).val()); 
	    $("#imgManipulated img").css('filter',filterVal).css('webkitFilter',filterVal);
	});
	$(document).on('input', '#sliderBrightness', function() {
	    var filterVal = 'brightness('+$(this).val()+'%)';
	    $("#numBrightness").html("").html($(this).val()); 
	    $("#imgManipulated img").css('filter',filterVal).css('webkitFilter',filterVal);
	});
	$(document).on('input', '#sliderHue', function() {
	    var filterVal = 'hue-rotate('+$(this).val()+'deg)'; 
	    $("#numHue").html("").html($(this).val());
	    $("#imgManipulated img").css('filter',filterVal).css('webkitFilter',filterVal);
	});
	$(document).on('input', '#sliderGray', function() {
	    var filterVal = 'grayscale('+$(this).val()+'%)'; 
	    $("#numGray").html("").html($(this).val());
	    $("#imgManipulated img").css('filter',filterVal).css('webkitFilter',filterVal);
	});
	$(document).on('input', '#sliderBlur', function() {
	    var filterVal = 'blur('+$(this).val()+'px)'; 
	    $("#numBlur").html("").html($(this).val());
	    $("#imgManipulated img").css('filter',filterVal).css('webkitFilter',filterVal);
	});
	$("#resetFilters").on('click', function() {
	    
	    var filterVal = 'opacity(100%) brightness(100%) contrast(100%)'; 
	    $("#sliderOpacity").val("100");$("#numOpacity").html("").html("100");
	    $("#sliderSaturation").val("100");$("#numSaturation").html("").html("100");
	    $("#sliderBrightness").val("60");$("#numBrightness").html("").html("60");
	    $("#sliderHue").val("0");$("#numHue").html("").html(0);
	    $("#sliderGray").val("0");$("#numGray").html("").html(0);
	    $("#sliderBlur").val("0");$("#numBlur").html("").html(0);
	    $("#imgManipulated img").css('filter',filterVal).css('webkitFilter',filterVal);
	});

	
});