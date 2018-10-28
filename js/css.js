var rootDoc;
$(document).ready(function(){
    rootDoc="cssFolder";
    initcss();
});

var initcss=function(){
    initDashBoard();
    $("#menu").menu();
    initMenuItmClick();
}