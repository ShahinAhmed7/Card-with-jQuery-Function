(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
        // Show more category
        
        for(var i=0; i < $(".category").length;i++)
            { 
                var $currentBox=  $($(".category")[i]);
                $currentBox.find(".categoryBtn:eq(0)").show();
                $currentBox.find(".categoryBtn:eq(1)").show();
                var len  = $currentBox.find(".categoryBtn").length - 2;
                $currentBox.next(".showMoreBtn").text("Show more("+len + ")");
                $currentBox.next(".showMoreBtn").click(function(){
                    if($(this).text().indexOf("more") > 0){
                        $(this).parent().find(".categoryBtn").show();
                        $(this).text("See less");
                        return;
                    }
                    
                     if($(this).text().indexOf("less") > 0){
                        $(this).parent().find(".categoryBtn").hide();
                        $(this).parent().find(".categoryBtn:eq(0)").show();
                        $(this).parent().find(".categoryBtn:eq(1)").show();
                        
                        var len  = $(this).parent().find(".categoryBtn").length - 2;
                        $(this).text("Show more("+len + ")");
                    }
                });
            }
    

            

        //  Load more button
        $(".singleCard").slice(0,4).show();
        $("#loadMoreBtn").click(function(e){
            e.preventDefault();
            $(".singleCard:hidden").slice(0,2).fadeIn("slow");
            if($(".singleCard:hidden").length == 0){
              $("#loadMoreBtn").fadeOut("slow");
              }
         });


      });
  


    

}(jQuery));	