$(document).ready(function(){
        
    /* Menu drop down*/
    $('.cs-menu-toggle').on('click', function(){
        
        if(!$(this).prev().hasClass('submenu-open')){
            $(this).prev().addClass('submenu-open');
            
        } else {
            $(this).prev().removeClass('submenu-open');
           
        }

        if (!$(this).children('fa-sort-up')) {
            $('.fas').removeClass('fa-sort-down');
            $('.fas').addClass('fa-sort-up');
        }else{
            $('.fas').removeClass('fa-sort-up');
            $('.fas').addClass('fa-sort-down');
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
