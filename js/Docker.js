var rootDoc;
$(document).ready(function(){
    rootDoc="Docker";
    initDocker();
});

var initDocker=function(){
    initDashBoard();
    $("#menu").menu();
    initMenuItmClick();
}