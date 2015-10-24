$(function() {
    // 评分
    $(".data_list .star_box b").hover(function() {
        var me = $(this),
            val = me.attr("data-value");
        $(this).parents('.pingfen').find(".pingfen-txt").html(val)
        $(".data_list .star_box b").each(function(index, el) {
            if (me.index() >= index) {
                $(this).addClass("active")
            } else {
                $(this).removeClass("active")
            }
        })
    }, function() {
        $(".data_list .star_box b").each(function() {
            $(this).removeClass("active")
        })
        $(".pingfen-txt").html("")
    });

    $('.dialog_header b').hover(function(){
        var me = $(this);
        $('.dialog_header b').each(function(index, el) {
            if (me.index() >= index) {
                $(this).addClass("active")
            } else {
                $(this).removeClass("active")
            }
        })
    },function(){
        $('.dialog_header b').each(function() {
            $(this).removeClass("active")
        })
    });

    $('.close_btn').on('click', function() {
        $('.dialog_box').hide();
    })
    $('.blue_btn').click(function() {
        $('.dialog_box').show()
    })
    // 点亮icon
    $('.good_light span').on('click', function() {
        var a = $(this).attr('data-class');
        $(this).hasClass(a) ? $(this).removeClass(a) : $(this).addClass(a);

    })
})
