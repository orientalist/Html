var rootDoc;
$(document).ready(function(){
    rootDoc="WOW";
    initWOW();
});

var initWOW=function(){
    initDashBoard();
    $("#menu").menu();
    initMenuItmClick();
}