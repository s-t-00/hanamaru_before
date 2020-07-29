var $win = $(window);

$win.on("load resize", function () {
    var windowWidth = window.innerWidth;


    // ウィンドウサイズを変化させるごとに画面をリロード
    var timer = false;
    $(window).resize(function () {
        if (timer !== false) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () {
            location.reload();
        }, 200);
    });


    if (windowWidth > 1024) {
        // PCの処理
    } else if (windowWidth > 768) {
        // TABの処理
    } else {
        // SPの処理




        $(function () {
            $(".accordion li a").on("click", function () {
                $(this).next().slideToggle();
                // activeが存在する場合
                if ($(this).children(".accordion_icon").hasClass('active')) {
                    // activeを削除
                    $(this).children(".accordion_icon").removeClass('active');
                } else {
                    // activeを追加
                    $(this).children(".accordion_icon").addClass('active');
                }
            });
        });



        // $(function () {
        //     $(".menu-btn01").click(function () {
        //         $(".sp-menu01").slideToggle(200);
        //     });
        //     $(".sp-menu01 li a").click(function () {
        //         $(".sp-menu01").css({
        //             display: "none",
        //         });
        //     });
        //     $(".menu-btn01").click(function () {
        //         event.stopPropagation();
        //     });
        //     $(document).click(function (event) {
        //         if (!$(event.target).closest(".sp-menu01").length) {
        //             $(".sp-menu01").slideUp(200);
        //         }
        //     });
        // });

        // $(function () {
        //     $(".menu-btn02").click(function () {
        //         $(".sp-menu02").slideToggle(200);
        //     });
        //     $(".sp-menu02 li a").click(function () {
        //         $(".sp-menu02").css({
        //             display: "none",
        //         });
        //     });
        //     $(".menu-btn02").click(function () {
        //         event.stopPropagation();
        //     });
        //     $(document).click(function (event) {
        //         if (!$(event.target).closest(".sp-menu02").length) {
        //             $(".sp-menu02").slideUp(200);
        //         }
        //     });
        // });
    }
});

/*
 */