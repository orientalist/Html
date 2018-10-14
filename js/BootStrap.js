$(document).ready(function () {
    initBootStrap();

});
var initBootStrap = function () {
    initDashBoard();
    $("#test").click(function () {
        $.ajax({
            url: "TheMeetingRoom.html",
            dataType: "html"
        }).done(function (content) {
            $("#bootStrap_body").html(content);
        });
    });
}