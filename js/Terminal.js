var rootDoc;
$(document).ready(function(){
    rootDoc="Terminal";
    initTerminal();
});
var initTerminal=function(){
    initDashBoard();
    $("#menu").menu();
    initMenuItmClick();
}