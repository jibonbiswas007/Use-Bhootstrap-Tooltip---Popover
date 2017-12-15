(function($) {
    "use strict";
    
    jQuery(document).ready(function($){
    	$(".mainmenu ul li").on("click", function(){
    		$(".mainmenu ul li").removeClass("active");
    		$(this).addClass("active");
    	});
        $('[data-toggle="tooltip"]').tooltip();
        $('[data-toggle="popover"]').popover();
        
    });
    
    jQuery(window).load(function(){
        
    });
    
    
}(jQuery));