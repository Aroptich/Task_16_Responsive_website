document.addEventListener("DOMContentLoaded", function (){
    document.getElementById("burger").addEventListener("click", function(){
        document.querySelector("sub_menu").toggleClass('sub_menu_active')
    })
})

//('.btn_burger').on('click', function(e) {
//    e.preventDefault;
//    (this).toggleClass('btn_burger_active');
//    ('sub_menu').toggleClass('sub_menu_active');
//
//});