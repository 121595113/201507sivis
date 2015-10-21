$(function() {
    $(".star_box b").hover(function(){
    	var me = $(this);
        $(".star_box b").each(function(index, el) {
            if (me.index() >= index) {
                $(this).addClass("active")
            } else {
                $(this).removeClass("active")
            }
        })
    },function(){
    	$(".star_box b").each(function(){
    		$(this).removeClass("active")
    	})
    })
})
