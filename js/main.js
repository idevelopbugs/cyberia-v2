/* Gömmer menyn när länk klickas */
jQuery(function($){
    $('.navbar .navbar-nav > li > a').click(function() {
        $('.navbar .navbar-collapse').collapse('hide')
    });
});