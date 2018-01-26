$(function(){
	var w_w=$(window).width();
	var m_l=(1920-w_w)/2;
	$('#owl-demo img').css('margin-left','-'+m_l+'px');


	$('.nav_m .n_icon').click(function(){
		$(this).siblings('ul').slideToggle();
	});

	$('.nav li:last-child').css('margin-right',0);
	$('.i_service li:last-child').css('margin-right',0);

	$(".tabBox .tabCont:first").css("display","block");
	$(".tabBox .tabNav li").click(function(){
		$(this).siblings("li").removeClass("now");
		$(this).addClass("now");
		$(this).parents(".tabBox").find(".tabCont").css("display","none");
		var i=$(this).index();
		$(this).parents(".tabBox").find(".tabCont:eq("+i+")").css("display","block");
	});

	$('.case li:nth-child(4n)').css('margin-right',0);
	$('.team dl:nth-child(2n)').css('margin-right',0);


	// 首页滑动门
	var sumWidth=function(index,padding){
	var left=0;
	for(var i=0;i<index;i++){
		var width=$($('.menu-dropdown')[i]).width();
		left+=width+padding;
	}
return left;
}

$('.menu li').mouseenter(function(){
		$('.header-slider').css({'left':sumWidth($(this).index(),28)+'px','width':$(this).width()})
		setTimeout(function(){
			$('.header-slider').addClass('header-slider-show')
		},0)
})
$('.menu').mouseleave(function(){
	$('.header-slider').css({'width':0}).removeClass('header-slider-show')
})
// 轮播图
$('.shutter').shutter({
shutterW: '99%', // 容器宽度
shutterH: 300, // 容器高度
isAutoPlay: true, // 是否自动播放
playInterval: 5000, // 自动播放时间
curDisplay: 0, // 当前显示页
fullPage: false // 是否全屏展示
});

})
function marquee(i, direction){
	var obj = document.getElementById("marquee" + i);
	var obj1 = document.getElementById("marquee" + i + "_1");
	var obj2 = document.getElementById("marquee" + i + "_2");
	if (direction == "up"){
		if (obj2.offsetTop - obj.scrollTop <= 0){
			obj.scrollTop -= (obj1.offsetHeight + 20);
		}else{
			var tmp = obj.scrollTop;
			obj.scrollTop++;
			if (obj.scrollTop == tmp){
				obj.scrollTop = 1;
			}
		}
	}else{
		if (obj2.offsetWidth - obj.scrollLeft <= 0){
			obj.scrollLeft -= obj1.offsetWidth;
		}else{
			obj.scrollLeft++;
		}
	}
}

function marqueeStart(i, direction){
	var obj = document.getElementById("marquee" + i);
	var obj1 = document.getElementById("marquee" + i + "_1");
	var obj2 = document.getElementById("marquee" + i + "_2");

	obj2.innerHTML = obj1.innerHTML;
	var marqueeVar = window.setInterval("marquee("+ i +", '"+ direction +"')", 40);
	obj.onmouseover = function(){
		window.clearInterval(marqueeVar);
	}
	obj.onmouseout = function(){
		marqueeVar = window.setInterval("marquee("+ i +", '"+ direction +"')", 40);
	}
}
