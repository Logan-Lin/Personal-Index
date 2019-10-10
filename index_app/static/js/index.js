$(window).ready(function() {
    $('.mdui-card').addClass('links-to-blank');
    $('.links-to-blank a').attr('target', '_blank');
})

let isDarkMode = false;
$('#style-switch-btn').on('click', function() {
    if (isDarkMode) {
        $('.mdui-card').removeClass('mdui-color-grey-800');
        $('body').removeClass('mdui-color-grey-900');
        $('header').removeClass('mdui-color-black');
        isDarkMode = false;
    } else {
        $('.mdui-card').addClass('mdui-color-grey-800');
        $('body').addClass('mdui-color-grey-900');
        $('header').addClass('mdui-color-black');
        isDarkMode = true;
    }
})