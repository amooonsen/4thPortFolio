      $(function() {
        let i = 0;

        $(".slider_list li").mouseenter(function () {
          i = $(this).index()
        })

        function slide() {

          i++;

          if (i > $(".slider_page:last").index()) {
            i = 0;
          }
          $(".slider_page").eq(i).stop().fadeIn("slow");
          $(".slider_page").eq(i-1).stop().fadeOut();

          if (i == 1) {
            $("#slider_wrap").css({
              "background": "#ffd4d4"
            })
            $(".slider_list li").eq(i-1).css({
              color:"black",
              borderTop:"none"
            });

            $(".slider_list li").eq(i).css({
              borderTop:"3px solid red",
              margin: "-1px 0 0 0"
            });

          } else if (i == 2) {
            $("#slider_wrap").css({
              "background": "#ebebeb"
            })
            $(".slider_list li").eq(i-1).css({
              color:"black",
              borderTop:"none"
            });

            $(".slider_list li").eq(i).css({
              borderTop:"3px solid red",
              margin: "-1px 0 0 0"
            });
          } else if (i == 3) {
            $("#slider_wrap").css({
              "background": "#91d7ff"
            })
            $(".slider_list li").eq(i-1).css({
              color:"black",
              borderTop:"none",
              margin: "-1px 0 0 0"
            });

            $(".slider_list li").eq(i).css({
              borderTop:"3px solid red",
              margin: "-1px 0 0 0"
            });
          } else if (i == 4) {
            $("#slider_wrap").css({
              "background": "#fffed9"
            })
            $(".slider_list li").eq(i-1).css({
              color:"black",
              borderTop:"none",
              margin: "-1px 0 0 0"
            });

            $(".slider_list li").eq(i).css({
              borderTop:"3px solid red",
              margin: "-1px 0 0 0"
            });
          } else {
            $("#slider_wrap").css({
              "background": "#e2faff"
            })
            $(".slider_list li").eq(i-1).css({
              color:"black",
              borderTop:"none"
            });

            $(".slider_list li").eq(i).css({
              borderTop:"3px solid red",
              margin: "-1px 0 0 0"
            });
          }

        }

        $(".slider_list li").eq(0).mouseenter(function () {
          var i = 0;
          $("#slider_wrap").css({
            "background": "#e2faff"
          });
          $(".slider_list li").css({
            borderTop: "none"
          });
          $(this).css({
            borderTop: "3px solid red",
            margin:"-1px 0 0 0"
          });
          $(".slider_page").stop().hide();
          $(".slider_page").eq(0).stop().show();
        });

        $(".slider_list li").eq(1).mouseenter(function () {
          var i = 0;
          $("#slider_wrap").css({
            "background": "#ffd4d4"
          });
          $(".slider_list li").css({
            borderTop: "none"
          });
          $(this).css({
            borderTop: "3px solid red",

            margin:"-1px 0 0 0"
          });
          $(".slider_page").stop().hide();
          $(".slider_page").eq(1).stop().show();
        });

        $(".slider_list li").eq(2).mouseenter(function () {
          var i = 0;
          $("#slider_wrap").css({
            "background": "#ebebeb"
          });
          $(".slider_list li").css({
            borderTop: "none"
          });
          $(this).css({
            borderTop: "3px solid red",
            margin:"-1px 0 0 0"
          });
          $(".slider_page").stop().hide();
          $(".slider_page").eq(2).stop().show();
        });

        $(".slider_list li").eq(3).mouseenter(function () {
          var i = 0;
          $("#slider_wrap").css({
            "background": "#91d7ff"
          });
          $(".slider_list li").css({
            borderTop: "none"
          });
          $(this).css({
            borderTop: "3px solid red",
            margin:"-1px 0 0 0"
          });
          $(".slider_page").stop().hide();
          $(".slider_page").eq(3).stop().show();
        });

        $(".slider_list li").eq(4).mouseenter(function () {
          var i = 0;
          $("#slider_wrap").css({
            "background": "#fffed9"
          });
          $(".slider_list li").css({
            borderTop: "none"
          });
          $(this).css({
            borderTop: "3px solid red",
            margin:"-1px 0 0 0"
          });
          $(".slider_page").stop().hide();
          $(".slider_page").eq(4).stop().show();
        });

        let ani = setInterval(slide, 5000)

        $(".slider_list li").mouseover(function () {
          clearInterval(ani);
        });

        $(".slider_list li").mouseout(function () {
          $(this).css({
           borderTop: "3px solid red",
           margin: "-1px 0 0 0"
         });
          ani = setInterval(slide, 5000);
        });
      })