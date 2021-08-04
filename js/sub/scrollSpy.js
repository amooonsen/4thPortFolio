// 좌측 고정된 메뉴 스크롤 spy

$(function(){

    var link = $('#navbar a.dot');
    link.on('click',function(e){
        
        //href 속성을 통해, section id 타겟을 잡음
        var target = $($(this).attr('href')); 
        
        //target section의 좌표를 통해 꼭대기로 이동
        $('html, body').animate({
            scrollTop: target.offset().top
        },400);
        
        //active 클래스 부여
        $(this).addClass('active');

        //앵커를 통해 이동할때, URL에 #id가 붙지 않도록 함.
        e.preventDefault();
    });
    
    $(window).on('scroll',function(){
        findPosition();
    });

    function findPosition(){
        $('section').each(function(){
            if( ($(this).offset().top - $(window).scrollTop() ) < 200){
                link.removeClass('active');
                $('#navbar').find('[data-scroll="'+ $(this).attr('id') +'"]').addClass('active');

            }
        });
    }

    findPosition();

    

    // 일정 높이(700px) 밑으로 내리면 scrollspy display block

    $(window).scroll(function() {
        if ($(window).scrollTop() > 700) {
            $('#navbar').fadeIn("fast");
        }else{
            $('#navbar').fadeOut("fast");
        }
    });
}); 


