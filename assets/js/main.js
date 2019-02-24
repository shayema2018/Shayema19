
//Gallery Plugins Code

$(document).ready(function(){
	$(".web").hide();
	$(".graphic").hide();
	$(".islamic").hide();
	$(".nature").hide();
	$("#all").click(function(){
		$(".web").show(1000);		
		$(".graphic").show(1500);
		$(".islamic").show(2000);
		$(".nature").show(2500);
	});
	$("#web").click(function(){
		$(".web").show(1000);		
		$(".graphic").hide();
		$(".islamic").hide();		
		$(".nature").hide();
	});
	$("#islamic").click(function(){
		$(".web").hide();
		$(".graphic").hide();
		$(".islamic").show(1000);		
		$(".nature").hide();
	});
	$("#graphic").click(function(){
		$(".web").hide();
		$(".graphic").show(1000);
		$(".islamic").hide();
		$(".nature").hide();
	});
	$("#nature").click(function(){
		$(".web").hide();
		$(".graphic").hide();
		$(".islamic").hide();
		$(".nature").show(1000);
	});

});










