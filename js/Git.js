var rootDoc;
$(document).ready(function(){
    rootDoc="Git";
    initGit();
});
var initGit=function(){
    initDashBoard();
    $("#menu").menu();
    initMenuItmClick();
}