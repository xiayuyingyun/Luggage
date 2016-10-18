//鍥藉棣嗗垏鎹�
$(document).ready(function() {
    jQuery.jqtab = function(tabtit,tab_conbox,shijian) {
        $(tab_conbox).find(".tab_con").hide();
        $(tabtit).find("li:first").addClass("active").show();
        $(tab_conbox).find("div.tab_con:first").show();
        $(tabtit).find("li").bind(shijian,function(){
            $(this).addClass("active").siblings("li").removeClass("active");
            var activeindex = $(tabtit).find("li").index(this);
            $(tab_conbox).children().eq(activeindex).show().siblings().hide();
            return false;
        });

    };
    /*璋冪敤鏂规硶濡備笅锛�*/
    $.jqtab("#tabs","#tab_conbox","mouseover");

});
//棣栭〉鍒嗙被鏄剧ず
$(document).ready(function() {
    jQuery.jqtab = function(tabtit,tab_conbox,shijian) {
        $(tab_conbox).find(".tab_con").hide();
        $(tab_conbox).find("div.tab_con:first").show();
        $(tabtit).find("li").bind(shijian,function(){
            $(this).addClass("active").siblings("li").removeClass("active");
            var activeindex = $(tabtit).find("li").index(this);
            $(tab_conbox).children().eq(activeindex).show().siblings().hide();
            return false;
        });

    };
    $('.classify-con').mouseleave(function(e) {
        $('ul.cathook').hide(0);
        $('.classify li').removeClass('active');
    });
    /*璋冪敤鏂规硶濡備笅锛�*/
    $.jqtab(".classify",".r-secend-classify","mouseenter");

});
//闈為椤靛叏閮ㄥ垎绫绘樉绀�
function allClassifyShow(){$('.classify-con').show(0);};
function allClassifyHide(){$('.classify-con').show(0);};



//涓嬫媺鍒楄〃
$(function(){
    $("#dropdown p").click(function(){
        var ul = $("#dropdown ul");
        if(ul.css("display")=="none"){
            ul.slideDown("fast");
        }else{
            ul.slideUp("fast");
        }
    });
    $("#dropdown ul li a").click(function(){
        var txt = $(this).text();
        $("#dropdown p").html(txt);
        var value = $(this).attr("rel");
        $("#dropdown ul").hide();
    });

});


//鏂囧瓧閬僵js
$(document).ready(function(){
    $(".imgtext").hide();
    $(".dd1").hover(function(){
        $(".imgtext",this).slideToggle(500);
    });
});
$(document).ready(function(){
    $(".imgtext").hide();
    $(".dd2").hover(function(){
        $(".imgtext",this).slideToggle(500);
    });
});
$(document).ready(function(){
    $(".imgtext").hide();
    $(".dd3").hover(function(){
        $(".imgtext",this).slideToggle(500);
    });
});
$(document).ready(function(){
    $(".imgtext").hide();
    $(".dd4").hover(function(){
        $(".imgtext",this).slideToggle(500);
    });
});
$(document).ready(function(){
    $(".imgtext").hide();
    $(".dd5").hover(function(){
        $(".imgtext",this).slideToggle(500);
    });
});
$(document).ready(function(){
    $(".imgtext").hide();
    $(".dd6").hover(function(){
        $(".imgtext",this).slideToggle(500);
    });
});

$(document).ready(function(){
    $(".imgtext").hide();
    $(".dd7").hover(function(){
        $(".imgtext",this).slideToggle(500);
    });
});

$(document).ready(function(){
    $(".imgtext").hide();
    $(".dd8").hover(function(){
        $(".imgtext",this).slideToggle(500);
    });
});
$(document).ready(function(){
    $(".imgtext").hide();
    $(".dd9").hover(function(){
        $(".imgtext",this).slideToggle(500);
    });
});
$(document).ready(function(){
    $(".imgtext").hide();
    $(".dd10").hover(function(){
        $(".imgtext",this).slideToggle(500);
    });
});
$(document).ready(function(){
    $(".imgtext").hide();
    $(".dd11").hover(function(){
        $(".imgtext",this).slideToggle(500);
    });
});
$(document).ready(function(){
    $(".imgtext").hide();
    $(".dd12").hover(function(){
        $(".imgtext",this).slideToggle(500);
    });
});


