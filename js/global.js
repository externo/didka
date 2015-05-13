$(function() {
	



	/* navigation */
	$('.nav li ul').children().hide();
	$('.nav li ul').parent().hover(
		function (e) { 
			$('.nav li ul').children().slideDown(150).show();
		},
		function () {
			$('.nav li ul').children().hide();
		}
	);
    //$(".nav > li").last().find('a').first().css('background', 'none');
    $(".sub-menu").css('margin-top','-12px');
    $(".sub-menu").append('<li class="lastSub"></li>'); //addClass('lastSub');

	/* pagination hide first element */
    $(".wp-paginate > li").first().css('display', 'none');

	/* tooltip */
	$(".social img[title]").tooltip();
	
	/* cufon text replace */
	Cufon.replace('.nav', { color : '-linear-gradient(red, 0.2=#fff, 0.9=#999, rgb(0, 0, 0))',
							fontSize : '14'});
	Cufon.replace('.sub-menu', {color : '#666',
                                fontSize: '14'});
	Cufon.replace('h1', { color : '-linear-gradient(red, 0.2=#fff, 0.8=#999999, rgb(0, 0, 0))',
						  fontSize : '38'});
	Cufon.replace('h2', { color : '-linear-gradient(red, 0.2=#fff, 0.8=#999999, rgb(0, 0, 0))',
						  fontSize : '32'});
	Cufon.replace('h3', { color : '-linear-gradient(red, 0.2=#daf10b, 0.8=#768107, rgb(0, 0, 0))',
						  fontSize : '28'});
	Cufon.replace('h4', { color : '-linear-gradient(red, 0.2=#daf10b, 0.8=#768107, rgb(0, 0, 0))',
						  fontSize : '22'});
	Cufon.replace('.readmore_main', {'color' : '#292218'});
	
	
	/* gallery effects */
	$('.gallery li ul').children().hide();
	$('.gallery li').hover(
		function () { 
			/* $('.gallery li ul').children().fadeIn('slow');	*/
			$(this).find('img').stop().fadeTo('slow', '0.6');
		},
		function () {
			$(this).find('img').stop().fadeTo('fast', '1.0');
		}
	);
	
});



$.fn.infiniteCarousel = function () {

    function repeat(str, num) {
        return new Array( num + 1 ).join( str );
    }
  
    return this.each(function () {
        var $wrapper = $('> div', this).css('overflow', 'hidden'),
            $slider = $wrapper.find('> ul'),
            $items = $slider.find('> li'),
            $single = $items.filter(':first'),
            
            
            singleWidth = $single.outerWidth(), 
            visible = Math.ceil($wrapper.outerWidth() / singleWidth),
            currentPage = 1,
            pages = Math.ceil($items.length / visible);
		
		/* note: doesn't include padding or border */

        // 1. Pad so that 'visible' number will always be seen, otherwise create empty items
        if (($items.length % visible) != 0) {
            $slider.append(repeat('<li class="empty" />', visible - ($items.length % visible)));
            $items = $slider.find('> li');
        }

        // 2. Top and tail the list with 'visible' number of items, top has the last section, and tail has the first
        $items.filter(':first').before($items.slice(- visible).clone().addClass('cloned'));
        $items.filter(':last').after($items.slice(0, visible).clone().addClass('cloned'));
        $items = $slider.find('> li'); // reselect
        
        // 3. Set the left position to the first 'real' item
        $wrapper.scrollLeft(singleWidth * visible);
        
        // 4. paging function
        function gotoPage(page) {
            var dir = page < currentPage ? -1 : 1,
                n = Math.abs(currentPage - page),
                left = singleWidth * dir * visible * n;
            
            $wrapper.filter(':not(:animated)').animate({
                scrollLeft : '+=' + left
            }, 500, function () {
                if (page == 0) {
                    $wrapper.scrollLeft(singleWidth * visible * pages);
                    page = pages;
                } else if (page > pages) {
                    $wrapper.scrollLeft(singleWidth * visible);
                    // reset back to start position
                    page = 1;
                } 

                currentPage = page;
            });                
            
            return false;
        }
        
        $wrapper.after('<a class="arrow back"></a><a class="arrow forward"></a>');
        
        // 5. Bind to the forward and back buttons
        $('a.back', this).click(function () {
            return gotoPage(currentPage - 1);                
        });
        
        $('a.forward', this).click(function () {
            return gotoPage(currentPage + 1);
        });
        
        // create a public interface to move to a specific page
        $(this).bind('goto', function (event, page) {
            gotoPage(page);
        });
    });  
};