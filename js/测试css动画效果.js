var screenAnimateElements = {
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
var isAnimateInit = false;
var isAnimateDone = false;
var setElementAnimate = function (screenNum) {
    var screen = document.querySelector(screenNum);
    var AnimateElement = screenAnimateElements[screenNum];
    screen.onclick = function () {
        /*第一步初始化所有元素添加init*/
        if (isAnimateInit === false) {
            for (var i = 0; i < AnimateElement.length; i++) {
                var element = document.querySelector(AnimateElement[i]);
                var basCls = element.getAttribute('class');
                element.setAttribute('class', basCls + ' ' + AnimateElement[i].substr(1) + '_animate_init');
            }
            isAnimateInit = true;
            return;
        }
        /*第二步 将init改为done*/
        if (isAnimateDone === false) {
            for (var i = 0; i < AnimateElement.length; i++) {
                var element = document.querySelector(AnimateElement[i]);
                var basCls = element.getAttribute('class');
                element.setAttribute('class', basCls.replace('_animate_init', '_animate_done'));
            }
            isAnimateDone = true;
            return;
        }
        /*第三步 将done 改为init*/
        if (isAnimateDone === true) {
            for (var i = 0; i < AnimateElement.length; i++) {
                var element = document.querySelector(AnimateElement[i]);
                var basCls = element.getAttribute('class');
                element.setAttribute('class', basCls.replace('_animate_done', '_animate_init'));
            }
            isAnimateDone = false;
            return;
        }
    }
}
for (k in screenAnimateElements) {
    setElementAnimate(k);
}