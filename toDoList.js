$(document).ready(function() {

    $(".tasktxt").keypress(function(e) {

        if (e.keyCode == 13 && $(".tasktxt").val() != "") {
            var task = $("<div class='task'></div>");
            var check = $("<i class='fas fa-check'></i>");
            var del = $("<i class='fas fa-trash-alt'></i>");
            task.text($(".tasktxt").val());
            task.append(del, check);
            $(".notcomp").append(task);

            del.click(function(){
                var p = $(this).parent();
                p.fadeOut();
            });

            check.click(function(){
                var p = $(this).parent();
                p.fadeOut(function(){
                    $(".comp").append(p);
                    p.fadeIn();
                });
                $(this).fadeOut();
            });

            $(".tasktxt").val("");
        }
    });
});