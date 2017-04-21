/*设置简单的基本函数*/
var getEle = function (selector) {
    return document.querySelector(selector);

}
var getAllEle = function (selector) {
    return document.querySelectorAll(selector);
}
var getCls = function (element) {
    return element.getAttribute('class');
}
var addCls = function (element, cls) {
    var baseCls = getCls(element);
    if (baseCls.indexOf(cls) === -1) {
        element.setAttribute('class', baseCls + ' ' + cls)
    }
}
var delCls = function (element, cls) {
        var baseCls = getCls(element);
        if (baseCls.indexOf(cls) != -1) {
            element.setAttribute('class', baseCls.replace(cls, ' ').replace(/\s+/g, ' '));
        }
    }
    /*第一步  初始化动画*/
var screenAnimateElements = {/*需要添加动画效果的元素*/
    '.screen-1': [
        '.screen-1_heading',
        '.screen-1_subheading',
    ],
    '.screen-2': [
        '.screen-2_heading',
        '.screen-2_subheading',
        '.screen-2_photo-1',
        '.screen-2_photo-3'
    ],
    '.screen-3': [
        '.screen-3_heading',
        '.screen-3_subheading',
        '.screen-3_photo',
        '.screen-3_circle'
    ],
    '.screen-4': [
        '.screen-4_heading',
        '.screen-4_subheading',
        '.screen-4_photo_item-1',
        '.screen-4_photo_item-2',
        '.screen-4_photo_item-3',
        '.screen-4_photo_item-4',
    ],
    '.screen-5': [
         '.screen-5_heading',
        '.screen-5_subheading',
    ]
}
/*初始化为当前屏幕添加_animate_init*/
var setAnimateInit = function (screenNum) {/*screenNum：屏幕数*/
        var screen = document.querySelector(screenNum);
        var AnimateElement = screenAnimateElements[screenNum];
        for (var i = 0; i < AnimateElement.length; i++) {
            var element = document.querySelector(AnimateElement[i]);
            var basCls = element.getAttribute('class');
            element.setAttribute('class', basCls + ' ' + AnimateElement[i].substr(1) + '_animate_init');
        }
    }
    /*设置播放动画函数 为当前屏幕动画添加_animate_done*/
var playAnimateDone = function (screenNum) {
    var screen = document.querySelector(screenNum);
    var AnimateElement = screenAnimateElements[screenNum];
    for (var i = 0; i < AnimateElement.length; i++) {
        var element = document.querySelector(AnimateElement[i]);
        var basCls = element.getAttribute('class');
        element.setAttribute('class', basCls.replace('_animate_init', '_animate_done'));
    }
}
/*页面加载为每个屏幕元素加init*/
window.onload = function () {
        for (k in screenAnimateElements) {
            if (k === '.screen-1') {
                continue;
            }
            setAnimateInit(k);
        }
    }
    /*设置活跃状态跟随导航序号发生变化*/
var navItem = getAllEle('.header_nav_item');
var outlineItem = getAllEle('.outline_item');
var navShine = function (idx) {
    for (var i = 0; i < navItem.length; i++) {
        delCls(navItem[i], 'header_nav_item_active')
    }
    for (var i = 0; i < outlineItem.length; i++) {
        delCls(outlineItem[i], 'outline_item_active')
    }
    addCls(navItem[idx], 'header_nav_item_active');
    addCls(outlineItem[idx], 'outline_item_active');
}
navShine(0);

var header = getEle('.header')
var outline = getEle('.outline')
/*鼠标滚动事件*/
window.onscroll = function () {
        var top = document.body.scrollTop;
        /*设置上方导航以及右侧导航的固定显示以及隐藏*/
        if (top >= 60) {
            addCls(header, 'header_back');
            addCls(outline, 'outline_in');
        } else {
            delCls(header, 'header_back');
            delCls(outline, 'outline_in');
        }
        /*设置鼠标滚动依次每屏播放动画，同时导航区发生相应改变*/
        if (top >= 0) {
            navShine(0);
            playAnimateDone('.screen-1');
            tip.style.left = 0 * 130 + 'px';
        }
        if (top >= 1 * 640 - 100) {
            navShine(1);
            playAnimateDone('.screen-2');
            tip.style.left = 1 * 130 + 'px';
        }
        if (top >= 2 * 640 - 100) {
            navShine(2);
            playAnimateDone('.screen-3');
            tip.style.left = 2 * 130 + 'px';
        }
        if (top >= 3 * 640 - 100) {
            navShine(3);
            playAnimateDone('.screen-4');
            tip.style.left = 3 * 130 + 'px';
        }
        if (top >= 4 * 640 - 100) {
            navShine(4);
            playAnimateDone('.screen-5');
            tip.style.left = 4 * 130 + 'px';
        }
    }
    /*鼠标和右侧链接点击双向定位*/
var setItemJump = function (i, lib) {
    var item = lib[i];
    item.onclick = function () {
        document.body.scrollTop = i * 640 - 100;
    }
}
for (var i = 0; i < navItem.length; i++) {
    setItemJump(i, navItem);
}
for (var i = 0; i < outlineItem.length; i++) {
    setItemJump(i, outlineItem);
}
/*导航滑动门效果*/
var tip = getEle('.header_nav_slide_tip');

var setTipLeft = function (idx, lib) {
    lib[idx].onmouseover = function () {
        tip.style.left = idx * 130 + 'px';
    }
    var activeIdx = 0;
    lib[idx].onmouseout = function () {
        for (var m = 0; m < navItem.length; m++)
            if (getCls(navItem[m]).indexOf('header_nav_item_active') != -1) {
                activeIdx = m;
            }
        tip.style.left = activeIdx * 130 + 'px';
    }
}
for (var i = 0; i < navItem.length-1; i++) {
    setTipLeft(i, navItem);
}
/*默认自动加载第一屏动画效果*/
setTimeout(function () {
    playAnimateDone('.screen-1')
}, 500);