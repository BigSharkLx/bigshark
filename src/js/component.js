$(document).ready(function() {
  var fragmentConfig = {
    container: '.img-flex', //显示容器
    line: 10, //多少行
    column: 20, //多少列
    width: 660, //显示容器的宽度
    animeTime: 4000, //最长动画时间,图片的取值将在 animeTime*0.33 + animeTime*0.66之前取值
    img: 'http://bigshark.nos-eastchina1.126.net/2.jpg' //图片路径
  };
  fragmentImg(fragmentConfig);


  // $("body").gradientify({
  //   gradients: [{
  //       start: [49, 76, 172],
  //       stop: [242, 159, 191]
  //     },
  //     {
  //       start: [255, 103, 69],
  //       stop: [240, 154, 241]
  //     },
  //     {
  //       start: [33, 229, 241],
  //       stop: [235, 236, 117]
  //     }
  //   ]
  // });

  // 首页导航特效
  $('.nav').find('a').on('mouseover', function() {
    $(this).addClass('animated swing');
  });
  $('.nav').find('a').on('mouseout', function() {
    $(this).removeClass('animated swing');
  });
  // 个人资料的动画
  function animateSection1() {
    $('.myself').addClass('animated slideInUp');
    $('.myself').find('a').show();
    $('.myself').find('a').addClass('animated fadeInLeft');
  }
  // 个人技能的动画
  function animateSection2() {
    $('.skill').addClass('animated slideInUp');
    $('.skill').find('li').show();
    $('.firstLine').find('li').addClass('animated bounceInDown');
    $('.secondLine').find('li').addClass('animated bounceInUp');
  }
  // 作品展示轮播图
  var idx = 0,
    timer = null,
    showDiv = $('.photo'),
    len = showDiv.length,
    dots = $('#dots').find('span');

  function runphoto() {
    clearInterval(timer);
    timer = setInterval(function() {
      idx++;
      if (idx == len) {
        idx = 0;
      }
      changePhoto(idx);
    }, 5000);
    showDiv.on('mouseover', function() {
      clearInterval(timer);
    });
    dots.on('mouseover', function() {
      clearInterval(timer);
      idx = $(this).data('index');
      showDiv.removeClass('fadeInRight');
      showDiv.addClass('fadeOutLeft');
      changePhoto(idx);
    });
  }

  showDiv.on('mouseleave', function() {
    runphoto();
  });
  dots.on('mouseout', function() {
    runphoto();
  });

  function changePhoto(idx) {
    dots.css('background-color', '#fff');
    showDiv.eq(idx - 1).removeClass('animated fadeInRight');
    showDiv.eq(idx - 1).addClass('animated fadeOutLeft');
    showDiv.eq(idx).show();
    showDiv.eq(idx).removeClass('animated fadeOutLeft');
    showDiv.eq(idx).addClass('animated fadeInRight');
    dots.eq(idx).css('background-color', 'red');
  }

  function animateSection3() {
    runphoto();
  }
  // 联系我的动画
  function animateSection4() {
    $('.call').addClass('animated rotateIn');
  }

  // 主页面上方导航
  function showSection(index) {
    var section = $('.wrap').find('section');
    section.each(function(index, element) {
      $(this).hide();
    });
    $(section[index]).show();
  }
  // 默认是第一页出现
  showSection(0);
  // 点击变换页面
  $('.nav').find('a').on('click', function() {
    var index = $(this).data("index");
    showSection(index);
    if (index == 1) {
      animateSection1();
    }
    if (index == 2) {
      animateSection2();
    }
    if (index == 3) {
      animateSection3();
    }
    if (index == 4) {
      animateSection4();
    }
  });
  // 第二页个人资料导航
  function showMe(index) {
    var me = $('.aboutMe');
    me.each(function(index, element) {
      $(this).hide();
    });
    $(me[index]).show();
    if (index == 0) {
      $(me[index]).addClass('animated rotateInDownRight');
    }
    if (index == 1) {
      $(me[index]).addClass('animated zoomInLeft');
    }
    if (index == 2) {
      $(me[index]).addClass('animated zoomInRight');
    }
    if (index == 3) {
      $(me[index]).addClass('animated rotateInUpLeft');
    }

  }
  showMe(0);
  // 点击变换个人资料显示
  $('.myselfWrap').find('a').on('click', function() {
    var index = $(this).data("index");
    showMe(index);
  });

  // 我的技能鼠标滑过显示背后的文字
  $('.skill').find('li').on('mouseover', function() {
    $(this).find('img').css('opacity', '0.4');
    $(this).find('div').show();
    $(this).find('div').removeClass('aanimated zoomOut');
  });
  $('.skill').find('li').on('mouseout', function() {
    $(this).find('img').css('opacity', '1');
    $(this).find('div').addClass('animated zoomOut');
  });


});
