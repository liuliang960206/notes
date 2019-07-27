// rem 缩放函数
function htmlsize() {
    let w = 750;//设计稿宽度
    let ww = window.innerWidth//屏幕宽度;
    let scale = w / ww;
    if (ww > 750) { ww = 750; }
    else if (ww < 320) { ww = 320; }
    let html = document.documentElement
    html.style.fontSize = 100 / scale + 'px';
}
htmlsize();
window.onresize = function () {
    htmlsize();
};
