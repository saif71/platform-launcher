$(function(){
    $('body').on('click touchend', 'button', function(e) {
        let that = $(this),
            $targetIframe = $("iframe#" + that.attr('data-toggle'));
        
        // lazy load target iframe if needed
        if ($targetIframe.data('src')) {
            $targetIframe.attr('src', $targetIframe.data('src'));
            $targetIframe.data('src', null);
        }
        // toggle active iframe
        $("iframe").removeClass('content-iframe-active');
        $($targetIframe).addClass('content-iframe-active');

        // toggle active state of launcher button
        $(".launcher-sidebar button").removeClass('btn-active');
        that.addClass('btn-active')
    })

    $('body').on('click touchend', 'div.resizer', function(e) {
        let that = $('div.launcher-sidebar');
        $( 'img.side_bar_logo_img' ).toggleClass( 'side_bar_logo_img_small' )
        if (that.hasClass('launcher-small')) {
            that.removeClass('launcher-small');
        } else {
            that.addClass('launcher-small');
        }
    })
});
