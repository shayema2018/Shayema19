$(document).ready(function () {
    $(".slider_1").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        autoplay: true,
        mouseDrag: true,
        autoplayTimeout: 2000,
        autoplayHoverpause: true,
        smartSpeed: 1000,
    });
});

<!-- Initialize WOW JS-->
new WOW().init();
<!-- WOW JS End-->

<!-- Initialize material-scrolltop-->   
$('body').materialScrollTop();
<!-- Material-scrolltop plugin End-->

// external js: isotope.pkgd.js


// init Isotope
var $grid = $('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows',
    getSortData: {
        name: '.name',
        symbol: '.symbol',
        number: '.number parseInt',
        category: '[data-category]',
        weight: function (itemElem) {
            var weight = $(itemElem).find('.weight').text();
            return parseFloat(weight.replace(/[\(\)]/g, ''));
        }
    }
});

// filter functions
/*var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function () {
        var number = $(this).find('.number').text();
        return parseInt(number, 10) > 50;
    },
    // show if name ends with -ium
    ium: function () {
        var name = $(this).find('.name').text();
        return name.match(/ium$/);
    }
};

// bind filter button click
$('#filters').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[filterValue] || filterValue;
    $grid.isotope({
        filter: filterValue
    });
});

// bind sort button click
$('#sorts').on('click', 'button', function () {
    var sortByValue = $(this).attr('data-sort-by');
    $grid.isotope({
        sortBy: sortByValue
    });
});*/

// change is-checked class on buttons
$('.button-group').each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'button', function () {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
    });
});

//Gallery Plugins Code
$(document).ready(function(){
	$(".web").show(4000);
	$(".graphic").show(5000);
	$(".islamic").show(6000);
	$(".nature").show(7000);
	$("#all").click(function(){
		$(".web").show(1000);		
		$(".graphic").show(2000);
		$(".islamic").show(3000);
		$(".nature").show(4000);
	});
	$("#web").click(function(){
		$(".web").show(2000);		
		$(".graphic").hide();
		$(".islamic").hide();		
		$(".nature").hide();
	});
	$("#islamic").click(function(){
		$(".web").hide();
		$(".graphic").hide();
		$(".islamic").show(2000);		
		$(".nature").hide();
	});
	$("#graphic").click(function(){
		$(".web").hide();
		$(".graphic").show(2000);
		$(".islamic").hide();
		$(".nature").hide();
	});
	$("#nature").click(function(){
		$(".web").hide();
		$(".graphic").hide();
		$(".islamic").hide();
		$(".nature").show(2000);
	});

});