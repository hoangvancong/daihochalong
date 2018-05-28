$(document).ready(function(){
        
    /* Menu drop down*/
    $(".primary-menu>.menu-item").append('<span class="cs-menu-toggle"><i class="fas fa-sort-up"></i></span>');
    $('.cs-menu-toggle').on('click', function(){
        
        if(!$(this).prev().hasClass('submenu-open')){
            $(this).prev().addClass('submenu-open');
             $(this).children('.fas').removeClass('fa-sort-up');
            $(this).children('.fas').addClass('fa-sort-down');
        
        } else {
            $(this).prev().removeClass('submenu-open');
           $(this).children('.fas').removeClass('fa-sort-down');
            $(this).children('.fas').addClass('fa-sort-up');
        }
    });

    $('.menu-respon').on('click',function(e){

        var navigation = $(this).parent().find('.primary-menu');
        e.preventDefault();
        if(!navigation.hasClass('menu-open')){
            navigation.addClass('menu-open');
        } else {
            navigation.removeClass('menu-open');
        }
    }); 
});
