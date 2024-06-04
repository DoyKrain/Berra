// var currentSlide = 0; // 当前幻灯片索引

// // 自动播放功能
// function startSlideShow() {
//     setInterval(nextSlide, 5000); // 每隔三秒自动切换到下一张图片
// }

// // 切换到下一张幻灯片
// function nextSlide() {
//     var slides = document.querySelectorAll('.slider img'); // 获取所有幻灯片元素
//     slides[currentSlide].classList.remove('active'); // 隐藏当前图像
//     currentSlide = (currentSlide + 1) % slides.length; // 更新幻灯片索引
//     slides[currentSlide].classList.add('active'); // 显示下一张幻灯片
// }


// 获取幻灯片相关元素
var slide = document.querySelector('.slide');
var slider = slide.querySelector('.slider');
var slides = slider.querySelectorAll('img');

// 获取上一页/下一页按钮
var prevBtn = slide.querySelector('.prev');
var nextBtn = slide.querySelector('.next');

// 初始化幻灯片索引为0
var currentSlide = 0;

// 显示当前幻灯片
function showSlide(index) {
    // 删除所有幻灯片的 'active' class
    slides.forEach(function (slide) {
        slide.classList.remove('active');
    });

    // 添加 'active' class 到指定的幻灯片
    slides[index].classList.add('active');
}

// 切换到下一张幻灯片
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// 切换到上一张幻灯片
function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// 启动自动播放
var intervalId = setInterval(nextSlide, 3000);

// 当鼠标移入幻灯片区域时停止自动播放
slide.addEventListener('mouseover', function () {
    clearInterval(intervalId);
});

// 当鼠标移出幻灯片区域时恢复自动播放
slide.addEventListener('mouseout', function () {
    intervalId = setInterval(nextSlide, 3000);
});

// 添加事件监听器来手动切换幻灯片
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

setInterval(nextSlide, 3000);