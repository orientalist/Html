var rootDoc;
$(document).ready(function(){
    rootDoc="Tools";
    initTools();
});

var initTools=function(){
    initDashBoard();
    $("#menu").menu();
    initMenuItmClick();
}